import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface RoundCreatedModalProps {
  show: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

const RoundCreatedModal: React.FC<RoundCreatedModalProps> = ({ show, onClose, content }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/dashboard');
  };

  return (
    <Dialog open={show} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Round Created</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button onClick={handleClose}>Go to Dashboard</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoundCreatedModal;
