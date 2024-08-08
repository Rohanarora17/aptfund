module module_addr::rounds {
    use std::string::String;
    use std::vector;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use std::signer;
    use aptos_framework::event::{Self,EventHandle};
    use aptos_framework::randomness;


    const E_INSUFFICIENT_BALANCE: u64 = 1;
    const E_NOT_ADMIN: u64 = 2;
    const E_ROUND_NOT_FOUND: u64 = 3;
    const E_SEATS_FULL: u64 = 4;

    struct Admin has key {
        address: address,
    }


    struct ProjectData has copy, drop, store {
        id: u64,
        name: String,
        description:String,
        money_goal:u128,
        project_image:String,
        track:String,
        payment_address: address,
        project_url:String,
        
    }

    struct RoundData has copy, drop,store{
        id: u64,
        name: String,
        description:String,
        track:String,
        start: u64,
        end:u64, 
        image:String,
        size:u64,
        projects: vector<ProjectData>,
    }


    // Define a struct to hold all rounds
    struct RoundStore has key, store {
        rounds: vector<RoundData>,
    }

    // Initialize the module

    fun init_module(admin: &signer) {
        move_to(admin, Admin {
            address: signer::address_of(admin),
        });

        move_to(admin, RoundStore {
            rounds: vector::empty<RoundData>(),
        });
    }

    // Helper function to assert admin rights
    fun assert_admin(admin: &signer) acquires Admin {
        let admin_addr = signer::address_of(admin);
        let stored_admin = borrow_global<Admin>(admin_addr);
        assert!(stored_admin.address == admin_addr, E_NOT_ADMIN);
    }

    fun generate_id(): u64 {
        randomness::u64_integer()
    }




    #[randomness]
    entry fun create_round(admin: &signer, name:String, description:String, track:String, start:u64, end:u64, image:String, size:u64) acquires Admin, RoundStore {
        assert_admin(admin);
        let round_details  = RoundData{
            id: generate_id(),
            name,
            description,
            track,
            start,
            end,
            image,
            size,
            projects: vector::empty<ProjectData>(),
        };
        let round_store = borrow_global_mut<RoundStore>(signer::address_of(admin));
        vector::push_back(&mut round_store.rounds, round_details);
    }

    


    public fun register_in_a_track_validation(id: u64 )  acquires RoundStore {
        let round_store = borrow_global<RoundStore>(@0x1); // Assuming admin address is @0x1
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
    entry fun register_in_a_track(project_owner:&signer, round_id:u64, name:String, description:String, money_goal:u128, project_image:String, track:String, project_url:String, payment_address:address)  acquires RoundStore {

        register_in_a_track_validation(round_id);
        
        let project_details = ProjectData{
            id: generate_id(),
            name,
            description,
            money_goal,
            project_image,
            track,
            payment_address,
            project_url,
        };

        let round_store  =borrow_global_mut<RoundStore>(@0x1);
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
        let round_store = borrow_global<RoundStore>(@0x1); // Assuming admin address is @0x1
        round_store.rounds
    }


    
    // Function to get round data by id   
    #[view]
    public fun get_round_data(id: u64): RoundData acquires RoundStore {
        let round_store = borrow_global<RoundStore>(@0x1); // Assuming admin address is @0x1
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



    public fun get_balance(addr:address):u64{
        coin::balance<AptosCoin>(addr)
    }

    public entry fun transfer(from:&signer, to:address, amount:u64){
        let from_addr = signer::address_of(from);
        assert!(get_balance(from_addr) >= amount, E_INSUFFICIENT_BALANCE);
        coin::transfer<AptosCoin>(from, to, amount);
    }

    #[view]
    public fun can_transfer(addr:address, amount:u64):bool{
        get_balance(addr) >= amount
        
    }

    

    
    
}




    
