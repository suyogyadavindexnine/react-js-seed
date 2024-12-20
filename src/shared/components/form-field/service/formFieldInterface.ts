export type FormFieldType = {
  id?: string;
  name: string;
  type: FieldType;
  label?: string;
  options?: any[];
  itemValueKey?: string;
  itemLabelKey?: string;
  isDisabled?: boolean;
  isDirectionRow?: boolean;
  textareaRows?: number | string;
  validations?: FieldValidations;
  errorMessages?: FieldValidationsErrorMessages;
  uniqueData?: any[];
  uniqueDataKey?: string;
  handleFieldChange?: (event, field, value?) => void;
  handleKeyDown?: (event: React.KeyboardEvent) => void;
  placeholder?: string;
};

export type FieldType =
  | "text"
  | "alphanumerics"
  | "radio"
  | "email"
  | "select"
  | "password"
  | "checkbox"
  | "textarea"
  | "number_only"
  | "autocomplete"
  | "checkbox_group"
  | "integer_only"
  | "switch"
  | "multi-select"
  | "regex";

export type FieldValidations = {
  required?: boolean;
  minValue?: number;
  maxValue?: number;
  regex?: RegExp;
  email?: boolean;
  uniqueDataValidation?: boolean;
  minLength?: number;
  maxLength?: number;
  password?: boolean;
  json?: boolean;
};

export type FieldValidationsErrorMessages = {
  requiredErrMsg?: string;
  minValueErrMsg?: string;
  maxValueErrMsg?: string;
  regexErrMsg?: string;
  emailErrMsg?: string;
  uniqueFieldDataErrMsg?: string;
  minLengthErrMsg?: string;
  maxLenghtErrMsg?: string;
  passwordErrMsg?: string;
  jsonErrMsg?: string;
};
