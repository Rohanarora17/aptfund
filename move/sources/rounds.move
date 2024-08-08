module module_addr::aptfund {
    use std::string::String;
    use std::vector;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use std::signer;
    use aptos_framework::event::{Self, EventHandle};
    use aptos_framework::randomness;
    use aptos_std::table::{Self, Table};
    use aptos_framework::account;
    use aptos_framework::timestamp;

    const E_INSUFFICIENT_BALANCE: u64 = 1;
    const E_NOT_ADMIN: u64 = 2;
    const E_ROUND_NOT_FOUND: u64 = 3;
    const E_SEATS_FULL: u64 = 4;
    const E_PROJECT_NOT_FOUND: u64 = 5;
    const MODULE_ADDR: address = @module_addr;
    const MAX_U64: u64 = 18446744073709551615;


    struct Admin has key {
        address: address,
    }

    struct Donation has copy, drop, store {
        amount: u64,
        timestamp: u64,
        project_id: u64,
        round_id: u64,
        donor:address,
    }

    struct DonationBook has key, store {
        donations: Table<address, vector<Donation>>,
    }

    struct ProjectData has copy, drop, store {
        id: u64,
        name: String,
        description: String,
        money_goal: u64,
        project_image: String,
        track: String,
        payment_address: address,
        amount: u64,
        unique_donors:u64,
        donations:vector<Donation>,
    }

    struct RoundData has copy, drop, store {
        id: u64,
        name: String,
        description: String,
        track: String,
        start: u64,
        end: u64,
        image: String,
        size: u64,
        total_amount: u64,
        total_unique_funders_count: u64,
        projects: vector<ProjectData>,
    }


    struct QfDetails has store,drop,copy {
        qf_amount: u64,
        project_id: u64,
    }


    struct RoundStore has key, store {
        rounds: vector<RoundData>,
    }

    // Initialize the module and create a resource account
    fun init_module(admin: &signer) {
        let admin_address = signer::address_of(admin);
        move_to(admin, Admin {
            address: admin_address,
        });

        move_to(admin, RoundStore {
            rounds: vector::empty<RoundData>(),
        });

        let donation_book = DonationBook {
            donations: table::new<address, vector<Donation>>(),
        };
        move_to(admin, donation_book);


        // Create a resource account for storing donations
        create_resource_account(admin);
    }


    public entry fun initialize_donations(admin:&signer)acquires Admin{
        assert_admin(admin);
        let donation_book = DonationBook {
            donations: table::new<address, vector<Donation>>(),
        };
        move_to(admin, donation_book);

    }

    // Function to create a resource account
     public fun create_resource_account(admin: &signer): address {
        let seed = b"hacker_house_goa";
        let (resource_signer, _capability) = account::create_resource_account(admin, seed);
        signer::address_of(&resource_signer)
    }

    // Helper function to assert admin rights
    fun assert_admin(caller: &signer) acquires Admin {
        let caller_addr = signer::address_of(caller);
        let admin = borrow_global<Admin>(caller_addr);
        assert!(admin.address == caller_addr, E_NOT_ADMIN);
    }

    fun generate_id(): u64 {
        randomness::u64_integer()
    }

    #[randomness]
    entry fun create_round(admin: &signer, name: String, description: String, track: String, start: u64, end: u64, image: String, size: u64) acquires Admin, RoundStore {
        assert_admin(admin);
        let round_details = RoundData {
            id: generate_id(),
            name,
            description,
            track,
            start,
            end,
            image,
            size,
            total_amount: 0,
            total_unique_funders_count: 0,
            projects: vector::empty<ProjectData>(),
        };
        let round_store = borrow_global_mut<RoundStore>(signer::address_of(admin));
        vector::push_back(&mut round_store.rounds, round_details);
    }

    public fun register_in_a_track_validation(id: u64 )  acquires RoundStore {
        let round_store = borrow_global<RoundStore>(MODULE_ADDR); // Assuming admin address is @0x1
        let rounds = &round_store.rounds;
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            if (vector::borrow(rounds, i).id == id) {
                let round  = vector::borrow(rounds,i);
                let seats  = vector::length(&round.projects);
                if (round.size < seats){
                    abort E_SEATS_FULL

                }
                
                
            };
            i = i + 1;
        };
        abort E_ROUND_NOT_FOUND
    }

    #[randomness]
    entry fun register_in_a_track(project_owner: &signer, round_id: u64, name: String, description: String, money_goal: u64, project_image: String, track: String, payment_address: address) acquires RoundStore {

        let project_details = ProjectData {
            id: generate_id(),
            name,
            description,
            money_goal,
            project_image,
            track,
            payment_address,
            amount: 0,
            
            unique_donors : 0,
            donations: vector::empty<Donation>(),
        };

        let round_store = borrow_global_mut<RoundStore>(MODULE_ADDR); // Using module address
        let rounds = &mut round_store.rounds;
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            if (vector::borrow(rounds, i).id == round_id) {
                vector::push_back(&mut vector::borrow_mut(rounds, i).projects, project_details);
                return;
            };
            i = i + 1;
        };
    }

    // Function to get all rounds
    #[view]
    public fun get_all_rounds(): vector<RoundData> acquires RoundStore {
        let round_store = borrow_global<RoundStore>(MODULE_ADDR); // Using module address
        round_store.rounds
    }

    // Function to get round data by id
    #[view]
    public fun get_round_data(id: u64): RoundData acquires RoundStore {
        let round_store = borrow_global<RoundStore>(MODULE_ADDR); // Assuming admin address is @0x1
        let rounds = &round_store.rounds;
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            if (vector::borrow(rounds, i).id == id) {
                return *vector::borrow(rounds, i);
            };
            i = i + 1;
        };
        abort E_ROUND_NOT_FOUND
    }

    public fun get_balance(addr: address): u64 {
        coin::balance<AptosCoin>(addr)
    }

    public entry fun transfer(from: &signer, to: address, amount: u64) {
        let from_addr = signer::address_of(from);
        assert!(get_balance(from_addr) >= amount, E_INSUFFICIENT_BALANCE);
        coin::transfer<AptosCoin>(from, to, amount);
    }

    #[view]
    public fun can_transfer(addr: address, amount: u64): bool {
        get_balance(addr) >= amount
    }


    

    public fun add_donation(donor: address, donation: Donation) acquires DonationBook{
        let book = borrow_global_mut<DonationBook>(MODULE_ADDR);
        if (!table::contains(&book.donations, donor)) {
            let donations = vector::empty<Donation>();
            table::add(&mut book.donations, donor, donations);
        };
        let donor_donations = table::borrow_mut(&mut book.donations, donor);
        vector::push_back(donor_donations, donation);
    }

    public entry fun donate(donator: &signer, amount: u64, project_id: u64, round_id: u64) acquires RoundStore, DonationBook {

        let donor = signer::address_of(donator);
        let donation = Donation {
            amount,
            timestamp: timestamp::now_seconds(),
            project_id,
            round_id,
            donor
        };


         // Ensure the DonationBook resource exists
        if (!exists<DonationBook>(MODULE_ADDR)) {
            let donation_book = DonationBook {
                donations: table::new<address, vector<Donation>>(),
            };
            move_to(donator, donation_book);
        };
        

         // Assuming DonationBook is stored at module address
        add_donation(donor, donation);

        let round_store = borrow_global_mut<RoundStore>(MODULE_ADDR); // Using module address
        let rounds = &mut round_store.rounds;
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            if (vector::borrow(rounds, i).id == round_id) {
                let round = vector::borrow_mut(rounds, i);
                round.total_amount  =  round.total_amount + amount;
                let projects = &mut round.projects;
                let projects_len = vector::length(projects);
                let j = 0;
                while (j < projects_len) {
                    if (vector::borrow(projects, j).id == project_id) {
                        //increase unique donors
                        vector::borrow_mut(projects, j).amount = amount + vector::borrow_mut(projects, j).amount;
                        vector::push_back(&mut vector::borrow_mut(projects, j).donations, donation);
                        // Funds are now kept in the smart contract's resource account
                        coin::transfer<AptosCoin>(donator, MODULE_ADDR, amount); // Transfer from donor to resource account
                        return;
                    };
                    j = j + 1;
                };
            };
            i = i + 1;
        };
        abort E_ROUND_NOT_FOUND
    }

    public fun calculate_quadratic_funding(round_id: u64): vector<QfDetails> acquires RoundStore {
        let total_weight = 0u64;
        let project_weights = vector::empty<u64>();
        let  round = get_round_data(round_id);

        // Calculate the weight (square of unique donations) for each project
        let i = 0;
        while (i < vector::length(&round.projects)) {
            let project = vector::borrow(&round.projects, i);
            let unique_donations = vector::length(&project.donations); // Assuming donations vector holds unique donations
            let weight = project.unique_donors * project.unique_donors;
            vector::push_back(&mut project_weights, weight);
            total_weight = total_weight + weight;
            i = i + 1;
        };

        // Determine the amount of funds each project should receive
        let qf_results = vector::empty<QfDetails>();
        i = 0;
        while (i < vector::length(&round.projects)) {
            let project = vector::borrow(&round.projects, i);
            let weight = vector::borrow(&project_weights, i);
            let qf_amount = if (total_weight > 0 ){
                // Calculate proportional funds based on weight
                (*weight * round.total_amount) / total_weight
                
            } else {
                0u64
            };
            let details = QfDetails {
                qf_amount,
                project_id: project.id,
            };
            vector::push_back(&mut qf_results, details);
            i = i + 1;
        };
        qf_results
    }


    public fun dac(round_id:u64): vector<u64>  acquires RoundStore {
        
        let round = get_round_data(round_id);
        let qf_details = calculate_quadratic_funding(round_id);
        let projects_goal_not_met = vector::empty<u64>();

        let i = 0;
        while (i < vector::length(&round.projects)) {
            let project = vector::borrow(&round.projects, i);
            let qf_project = vector::borrow(&qf_details, i);
            if(project.money_goal > qf_project.qf_amount){
                vector::push_back(&mut projects_goal_not_met, project.id);

            };
            i = i + 1;
        };

        projects_goal_not_met

    }


    public entry fun end_round(admin: &signer, round_id: u64) acquires RoundStore, DonationBook, Admin{
        assert_admin(admin);
        // Step 1: Call the dac function to get projects that did not meet their goals
        let round_not_qualified = dac(round_id);

        // Get the round data
        let round = get_round_data(round_id);
        let updated_projects = vector::empty<ProjectData>();

        // Step 2: Refund the donors for the projects that did not meet their goals
        let i = 0;
        while (i < vector::length(&round.projects)) {
            let project = vector::borrow(&round.projects, i);

            if (is_project_in_list(round_not_qualified, project.id)) {
                // Refund donors
                let donations = &project.donations;
                let j = 0;
                while (j < vector::length(donations)) {
                    let donation = vector::borrow(donations, j);
                    refund_donation(admin, donation, donation.donor);
                    j = j + 1;
                };
                // Reduce the total amount of the round
                round.total_amount = round.total_amount - project.amount;
            } else {
                vector::push_back(&mut updated_projects, *project);
            };
            i = i + 1;
        };

        // Step 3: Update the round data to remove refunded projects
        let round_store = borrow_global_mut<RoundStore>(MODULE_ADDR);
        let rounds = &mut round_store.rounds;
        let round_index = find_round_index(rounds, round_id);
        if (round_index !=MAX_U64) {
            let round = vector::borrow_mut(rounds, round_index);
            round.projects = updated_projects;
        };

        // Step 4: Recalculate the quadratic funding amounts for the remaining projects
        let qf_results = calculate_quadratic_funding(round_id);

        // Step 5: Distribute the recalculated funds to the remaining projects
        distribute_funds(admin, &qf_results);
    }

    

    fun refund_donation(admin:&signer, donation: &Donation, donor: address) acquires DonationBook, Admin{
        assert_admin(admin);
        let amount = donation.amount;
        let book = borrow_global_mut<DonationBook>(MODULE_ADDR);
        let donor_donations = table::borrow_mut(&mut book.donations, donor);

        let len = vector::length(donor_donations);
        let new_donor_donations = vector::empty<Donation>();
        let i = 0;
        while (i < len) {
            let d = vector::borrow(donor_donations, i);
            if (!(d.timestamp == donation.timestamp && d.amount == donation.amount && d.donor == donation.donor && d.project_id == donation.project_id && d.round_id == donation.round_id)) {
                vector::push_back(&mut new_donor_donations, *d);
            };
            i = i + 1;
        };

        // Replace the old vector with the new one
        table::add(&mut book.donations, donor, new_donor_donations);

        // Transfer the amount back to the donor
        transfer(admin, donor, amount);
    
    
    }



    // Helper function to check if a project is in the list of not qualified projects
    fun is_project_in_list(list: vector<u64>, project_id: u64): bool {
    let len = vector::length(&list);
    let i = 0;
    while (i < len) {
        if (*vector::borrow(&list, i) == project_id) {
            return true
        };
        i = i + 1;
    };
    false
}


    // Function to find the index of a round in the rounds vector
    fun find_round_index(rounds: &vector<RoundData>, round_id: u64): u64 {
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            if (vector::borrow(rounds, i).id == round_id) {
                return i
            };
            i = i + 1;
        };
        // Return a value that indicates the round was not found
        // In Move, we can use the maximum value of `u64` to indicate this
        MAX_U64
    }


    // Function to find the index of a donation in the donations vector
    fun find_donation_index(donations: &vector<Donation>, donation: &Donation): u64 {
        let len = vector::length(donations);
        let i = 0;
        while (i < len) {
            if (vector::borrow(donations, i).timestamp == donation.timestamp &&
                vector::borrow(donations, i).amount == donation.amount &&
                vector::borrow(donations, i).project_id == donation.project_id &&
                vector::borrow(donations, i).donor == donation.donor &&
                vector::borrow(donations, i).round_id == donation.round_id) {
                return i
            };
            i = i + 1;
        };
        MAX_U64
    }

    // Function to distribute funds based on quadratic funding results
    public fun distribute_funds(admin: &signer, qf_results: &vector<QfDetails>) acquires Admin, RoundStore {
        assert_admin(admin);
        let round_store = borrow_global_mut<RoundStore>(MODULE_ADDR);
        let rounds = &mut round_store.rounds;
        let len = vector::length(qf_results);
        let i = 0;
        while (i < len) {
            let qf_detail = vector::borrow(qf_results, i);
            let project_index = find_project_index(&round_store.rounds, qf_detail.project_id);
            if (project_index != MAX_U64) {
                let round = vector::borrow_mut(&mut round_store.rounds, project_index);
                let projects = &mut round.projects;
                let project_index_in_round = find_project_index_in_round(projects, qf_detail.project_id);
                if (project_index_in_round != MAX_U64) {
                    let project = vector::borrow_mut(projects, project_index_in_round);
                    coin::transfer<AptosCoin>(admin, project.payment_address, qf_detail.qf_amount);
                };
            };
            i = i + 1;
        };
    }


    fun find_project_index_in_round(projects: &vector<ProjectData>, project_id: u64): u64 {
        let len = vector::length(projects);
        let j = 0;
        while (j < len) {
            if (vector::borrow(projects, j).id == project_id) {
                return j
            };
            j = j + 1;
        };
        return MAX_U64
    }


    // Function to find the index of a project in the rounds vector
    fun find_project_index(rounds: &vector<RoundData>, project_id: u64): u64 {
        let len = vector::length(rounds);
        let i = 0;
        while (i < len) {
            let round = vector::borrow(rounds, i);
            let projects = &round.projects;
            let j = 0;
            while (j < vector::length(projects)) {
                if (vector::borrow(projects, j).id == project_id) {
                    return i
                };
                j = j + 1;
            };
            i = i + 1;
        };
        MAX_U64
    }






    // public entry fun distribute_funds(admin: &signer, project_id: u64, round_id: u64, amount: u64) acquires Admin, RoundStore {
    //     assert_admin(admin);

    //     // let round_store = borrow_global_mut<RoundStore>(module_addr); // Using module address
    //     // let rounds = &mut round_store.rounds;
    //     // let len = vector::length(rounds);
    //     // let mut i = 0;
    //     // while (i < len) {
    //     //     if (vector::borrow(rounds, i).id == round_id) {
    //     //         let round = vector::borrow_mut(rounds, i);
    //     //         let projects = &mut round.projects;
    //     //         let projects_len = vector::length(projects);
    //     //         let mut j = 0;
    //     //         while (j < projects_len) {
    //     //             if (vector::borrow(projects, j).id == project_id) {
    //     //                 let project = vector::borrow_mut(projects, j);
    //     //                 assert!(round.total_amount >= amount, E_INSUFFICIENT_BALANCE);
    //     //                 round.total_amount -= amount;
    //     //                 project.amount -= amount;
    //     //                 // Transfer funds from the smart contract resource account to the project's payment address
    //     //                 coin::transfer<AptosCoin>(module_addr, project.payment_address, amount);
    //     //                 return;
    //     //             }
    //     //             j = j + 1;
    //     //         }
    //     //         abort E_PROJECT_NOT_FOUND;
    //     //     }
    //     //     i = i + 1;
    //     // }
    //     // abort E_ROUND_NOT_FOUND;
    // }
}
