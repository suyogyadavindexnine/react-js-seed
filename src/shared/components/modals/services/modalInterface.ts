import { DialogProps as MuiDialogProps } from '@mui/material';

export interface CustomDialogProps extends MuiDialogProps {
  onclose?: (event: object, reason: string) => void;
  open: boolean;
  selectedValue?: string;
  model_title?: JSX.Element;
  model_content?: JSX.Element;
  model_actions?: JSX.Element;
  customClass?: string;
}
