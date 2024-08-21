import { FormFieldType } from 'src/shared/components/form-field/service/formFieldInterface';

export interface EditCustomFormProps {
  formFields: FormFieldType[];
  updateFormFields: (updatedArray: FormFieldType[]) => void;
  closeEditFormPopup: () => void;
}
