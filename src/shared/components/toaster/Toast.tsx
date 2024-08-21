import { AlertProps } from '@mui/material/Alert';
import { de } from 'date-fns/locale';
import { toast, ToastOptions } from 'react-toastify';

export interface ToastProps extends AlertProps {
  showToast: boolean;
  message?: string;
  onClose?: (event: any) => void;
}

export const showSuccessMessage = (message: string, options: ToastOptions) => {
  toast.success(message, options);
};

export const requestPopupMessage = (message: string, options: ToastOptions) => {
  toast.success(message, options);
};

export const showWarningMessage = (message: string, options: ToastOptions) => {
  toast.warn(message, options);
};

export const showErrorMessage = (message: string, options: ToastOptions) => {
  toast.error(message, options);
};
