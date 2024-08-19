import { CheckboxProps } from './services/checkboxInterface';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxprops
} from '@mui/material';

export const CheckBox = ({ disabled, ...props }: CheckboxProps) => {
  return (
    <>
      <MuiCheckbox disabled={disabled} {...props} />
    </>
  );
};
