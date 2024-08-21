import { FormEvent } from 'react';
import { FormFieldType } from '../../form-field/service/formFieldInterface';

export type CustomFormType = {
  formFields: FormFieldType[];
  initialValues: object;
  submitBtnText?: string;
  cancelBtnText?: string;
  editFieldValues?: any;
  submitBtnHandler?: (args: any) => void;
  cancelBtnHandler?: (params?: any) => void;
};
