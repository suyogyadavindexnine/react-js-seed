import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, DialogActions, DialogContent } from '@mui/material';
// import { CustomDialogProps } from 'src/shared/components/modals/services/modalInterface';
// import { Dialog, DialogContent } from '@mui/material';
import { CustomDialogProps } from './services/modalInterface';

export const SimpleDialog = ({ ...props }: CustomDialogProps) => {
  const {
    onClose,
    selectedValue,
    open,
    model_title,
    model_content,
    model_actions,
    customClass
  } = props;

  const handleClose = () => {
    onClose(selectedValue, 'backdropClick');
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      data-testid="modalcomponent"
      className={customClass}
    >
      <DialogTitle>{model_title}</DialogTitle>
      <DialogContent>{model_content}</DialogContent>
      <DialogActions>{model_actions}</DialogActions>
    </Dialog>
  );
};
