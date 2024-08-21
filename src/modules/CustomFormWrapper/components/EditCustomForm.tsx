import React, { useState, MouseEvent, useEffect } from 'react';
import { EditCustomFormProps } from '../models/editCustomFormInterface';
import {
  Button,
  ButtonToggle,
  CustomForm,
  Tables,
  showErrorMessage
} from '../../../shared/components/index';
import {
  FieldType,
  FieldValidations,
  FormFieldType
} from 'src/shared/components/form-field/service/formFieldInterface';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Tooltip } from '@mui/material';
import { TextField } from 'src/shared/components/index';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { titleCase } from 'src/shared/utils/utils';
import { FIELD_TYPE } from 'src/shared/constants/constants';
import { useTranslation } from 'react-i18next';
import { Editor } from '@monaco-editor/react';

const EditCustomForm = ({
  formFields,
  updateFormFields,
  closeEditFormPopup
}: EditCustomFormProps) => {
  //Constants
  //This constant is to keep validation type which
  //needs input fields to take value form devloper
  const { t } = useTranslation(['english']);
  const validationsRequiredInput = [
    'maxLength',
    'minValue',
    'maxValue',
    'regex'
  ];

  //This constant is for toggle button to select between UI and JSON
  const toggleButtons = [
    {
      content: 'UI',
      value: 'UI'
    },
    {
      content: 'JSON',
      value: 'JSON'
    }
  ];

  //This constant is for select component options
  const fieldTypes = [
    {
      id: 'text',
      label: 'Text'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'select',
      label: 'Select'
    },
    {
      id: 'password',
      label: 'Password'
    },
    {
      id: 'number_only',
      label: 'Number Only'
    },
    {
      id: 'checkbox_group',
      label: 'Checkbox Group'
    },
    {
      id: 'integer_only',
      label: 'Integer Only'
    }
  ];

  //This const is for the options for multiSelect dropdown
  const validationArray = [
    {
      id: 'required',
      label: 'Required'
    },
    {
      id: 'maxLength',
      label: 'Max Length'
    },
    {
      id: 'minValue',
      label: 'Min Value'
    },
    {
      id: 'maxValue',
      label: 'Max Value'
    },
    {
      id: 'regex',
      label: 'Regex'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'password',
      label: 'Password'
    },
    {
      id: 'json',
      label: 'JSON'
    }
  ];

  //State
  const [selectedMode, setSelectedMode] = useState('JSON');
  const [updatedFieldsArray, setUpdatedFieldsArray] = useState(
    formFields as FormFieldType[]
  );
  const [editFieldData, setEditFieldData] = useState({});
  const [updatedEditFieldsArray, setUpdatedEditFieldsArray] = useState(
    [] as FormFieldType[]
  );
  const [stringJson, setStringJson] = useState<string>(
    JSON.stringify(formFields, null, 1)
  );

  // Methods
  /**
   * This method is to handle the toggle change between UI and JSON
   * @param _event
   * @param newValue
   */
  const handleModeChange = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setSelectedMode(newValue);
    }
  };

  /**
   * This method use to handle the submit event of JSON part.
   */
  const handleUpdateJson = () => {
    try {
      if (updatedFieldsArray) {
        updateFormFields(updatedFieldsArray);
        handleCancel();
      } else {
        showErrorMessage(`${t('validationErrMsg.default_err_msg')}!`, {
          theme: 'colored',
          position: 'bottom-center',
          autoClose: 5000
        });
      }
    } catch (error) {
      showErrorMessage(error?.message, {
        theme: 'colored',
        position: 'bottom-center',
        autoClose: 5000
      });
    }
  };

  /**
   * This method is to handle the cancel button click
   */
  const handleCancel = () => {
    closeEditFormPopup();
  };

  /**
   * This method is to handle the JSON change event
   * @param event
   */
  const handleJsonChange = (value: any) => {
    setStringJson(value);
    setUpdatedFieldsArray(JSON.parse(value));
  };

  /**
   * This method handles the edit button click of data-table.
   * @param rowData
   */
  const handleFieldEdit = (rowData: any) => {
    setEditFieldData({
      ...rowData,
      type: titleCase(rowData?.type),
      options: rowData?.options
        ? JSON.stringify(rowData?.options, null, 1)
        : '',
      validations: validationArray?.filter((item) =>
        Object.keys(rowData?.validations)?.includes(item?.id)
      )
    });
  };

  /**
   * This method handles the change event of multiSelect dropdown
   * @param _event
   * @param _field
   * @param selectedValidations
   */
  const handleValidationChange = (
    _event: any,
    _field: any,
    selectedValidations?: any
  ) => {
    const editFormFieldsArray = [...editFormFields];
    if (selectedValidations?.length) {
      selectedValidations?.map((validation) => {
        if (validationsRequiredInput?.includes(validation?.id)) {
          const validationField: FormFieldType = {
            id: validation?.id,
            name: validation?.id,
            type: validation?.id === 'regex' ? 'regex' : 'integer_only',
            label: validation?.label,
            validations: {
              required: true
            }
          };
          addToEditFieldsArray(validationField, editFormFieldsArray);
        } else {
          setUpdatedEditFieldsArray(editFormFieldsArray);
        }
      });
    } else {
      setUpdatedEditFieldsArray(editFormFieldsArray);
    }
  };

  /**
   * This method will add the new validation input field in edit form.
   * @param field
   * @param editFormFieldsArray
   * @returns returns the updated edit form fields array.
   */
  const addToEditFieldsArray = (
    field: FormFieldType,
    editFormFieldsArray: FormFieldType[]
  ) => {
    const existingFieldIndex = editFormFieldsArray?.findIndex(
      (formField) => formField?.name === field?.name
    );
    if (existingFieldIndex >= 0) return;
    editFormFieldsArray?.splice(4, 0, field);
    setUpdatedEditFieldsArray(editFormFieldsArray);
  };

  /**
   * This method handles the submit event of edit form
   * @param newFormField
   */
  const handleEditFormSubmittion = (newFormField) => {
    const formField: FormFieldType = {
      id: newFormField?.name,
      name: newFormField?.name,
      type: newFormField?.type?.toLowerCase() as FieldType,
      label: newFormField?.label,
      validations: getFieldValidationsObj(newFormField)
    };

    if (
      newFormField?.type?.toLowerCase() === FIELD_TYPE.SELECT ||
      newFormField?.type?.toLowerCase() === FIELD_TYPE.CHECKBOX_GROUP
    ) {
      formField.options =
        newFormField?.options && newFormField?.options?.length
          ? JSON.parse(newFormField?.options)
          : [];
      formField.itemValueKey = newFormField?.itemValueKey;
      formField.itemLabelKey = newFormField?.itemLabelKey;
    }
    setUpdatedFieldsArray([formField, ...updatedFieldsArray]);
  };

  /**
   * This method creates the valiation object for the field array
   * @param fieldObj
   * @returns returns valiation object
   */
  const getFieldValidationsObj = (fieldObj: any) => {
    let validationObj: FieldValidations = {};

    fieldObj?.validations?.map((item) => {
      if (item?.id === 'required') validationObj['required'] = true;
      if (item?.id === 'maxLength')
        validationObj['maxLength'] = Number(fieldObj?.maxLength);
      if (item?.id === 'minValue')
        validationObj['minValue'] = Number(fieldObj?.minValue);
      if (item?.id === 'maxValue')
        validationObj['maxValue'] = Number(fieldObj?.maxValue);
      if (item?.id === 'regex') validationObj['regex'] = fieldObj?.regex;
    });

    return validationObj;
  };

  /**
   * This method handles the updation of demo custom form fields array
   * @param finalFieldsArray
   */
  const handleEditedFormConfirmation = (finalFieldsArray: FormFieldType[]) => {
    updateFormFields(finalFieldsArray);
    handleCancel();
  };

  /**
   * This method handles the delete event of a row from data table
   * @param rowData
   */
  const handleFieldDelete = (rowData: any) => {
    setUpdatedFieldsArray((prevValues) =>
      prevValues?.filter((field) => field?.id !== rowData?.row?.id)
    );
  };

  //Edit form initial values
  const editFormInitialValues = {
    name: '',
    type: '',
    label: '',
    validations: [],
    options: '',
    itemValueKey: '',
    itemLabelKey: ''
  };

  //Edit Form Field
  let editFormFields: FormFieldType[] = [
    {
      name: 'name',
      type: 'text',
      validations: {
        required: true
      },
      label: t('editFormField.field_name')
    },
    {
      name: 'type',
      type: 'select',
      label: t('editFormField.field_type'),
      validations: {
        required: true
      },
      options: fieldTypes,
      itemValueKey: 'id',
      itemLabelKey: 'label'
    },
    {
      name: 'label',
      type: 'text',
      validations: {
        required: true
      },
      label: t('editFormField.field_label')
    },
    {
      name: 'validations',
      type: 'multi-select',
      label: t('editFormField.validations'),
      options: validationArray,
      itemValueKey: 'id',
      itemLabelKey: 'label',
      handleFieldChange: handleValidationChange
    },
    {
      name: 'options',
      type: 'textarea',
      label: t('editFormField.options'),
      textareaRows: 8,
      validations: {
        json: true
      },
      errorMessages: {
        jsonErrMsg: 'Enter valid JSON data'
      }
    },
    {
      name: 'itemValueKey',
      type: 'text',
      label: t('editFormField.item_value_key')
    },
    {
      name: 'itemLabelKey',
      type: 'text',
      label: t('editFormField.item_label_key')
    }
  ];

  //Table Columns
  const tableColumns: GridColDef[] = [
    {
      field: 'name',
      sortable: false,
      headerName: t('editFormField.field_name'),
      width: 160
    },
    {
      field: 'type',
      sortable: false,
      headerName: t('editFormField.field_type'),
      width: 160
    },
    {
      field: 'label',
      sortable: false,
      headerName: t('editFormField.field_label'),
      width: 160
    },
    {
      field: 'validations',
      sortable: false,
      headerName: t('editFormField.validations'),
      width: 270,
      renderCell: (params) => {
        const validations = Object?.keys(params.row?.validations || {}).join(
          ', '
        );
        {
          if (validations?.length > 20) {
            return (
              <Tooltip title={validations}>
                <Box className="fieldValidations">{validations || '-'}</Box>
              </Tooltip>
            );
          } else {
            return <Box className="fieldValidations">{validations || '-'}</Box>;
          }
        }
      }
    },
    {
      field: 'options',
      sortable: false,
      headerName: t('editFormField.options'),
      width: 100,
      renderCell: (params) => {
        if (params?.row?.options && params?.row?.options?.length > 0) {
          return t('common.available');
        }
        return '-';
      }
    },
    {
      field: 'itemValueKey',
      sortable: false,
      headerName: t('editFormField.value_key'),
      width: 100,
      renderCell: (params) =>
        params?.row?.itemValueKey ? params?.row?.itemValueKey : '-'
    },
    {
      field: 'itemLabelKey',
      sortable: false,
      headerName: t('editFormField.label_key'),
      width: 100,
      renderCell: (params) =>
        params?.row?.itemLabelKey ? params?.row?.itemLabelKey : '-'
    },
    {
      field: 'isDisabled',
      sortable: false,
      headerName: t('editFormField.disabled'),
      width: 80,
      renderCell: (params) => (params?.row?.isDisabled ? 'True' : '-')
    },
    {
      field: 'isDirectionRow',
      sortable: false,
      headerName: t('editFormField.direction_row'),
      width: 120,
      renderCell: (params) => (params?.row?.isDirectionRow ? 'True' : '-')
    },
    {
      field: 'action',
      sortable: false,
      headerName: t('editFormField.actions'),
      width: 150,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <>
          {/* <Button
            icon={<EditIcon />}
            variant="text"
            size="small"
            onClick={() => handleFieldEdit(params?.row)}
          /> */}
          <Button
            icon={<DeleteIcon />}
            variant="text"
            size="small"
            color="error"
            onClick={() => handleFieldDelete(params)}
          />
        </>
      )
    }
  ];

  //HTML
  return (
    <>
      {/* Keeping this code for future use */}
      {/* <Box className="flex-basic-end">
        <ButtonToggle
          sx={{ mb: 2 }}
          buttons={toggleButtons}
          value={selectedMode}
          exclusive
          onChange={handleModeChange}
        />
      </Box> */}
      {selectedMode === 'JSON' ? (
        <>
          {/* <TextField
            fullWidth
            multiline
            variant="outlined"
            value={stringJson}
            onChange={handleJsonChange}
          /> */}
          <Editor
            height="60vh"
            defaultLanguage="json"
            defaultValue={stringJson}
            theme="vs-dark"
            onChange={handleJsonChange}
          />
          <Box sx={{ mt: 3 }} className="flex-basic-end">
            <Button
              sx={{ mr: 2 }}
              btnText={t('common.cancel')}
              variant="text"
              size="large"
              onClick={handleCancel}
            />
            <Button
              btnText={t('common.submit')}
              variant="contained"
              size="large"
              onClick={handleUpdateJson}
            />
          </Box>
        </>
      ) : (
        <>
          <CustomForm
            formFields={
              updatedEditFieldsArray?.length
                ? updatedEditFieldsArray
                : editFormFields
            }
            initialValues={editFormInitialValues}
            editFieldValues={editFieldData}
            submitBtnText={t('common.add')}
            submitBtnHandler={handleEditFormSubmittion}
          />

          <Box sx={{ mt: 5 }}>
            <Tables rows={updatedFieldsArray} columns={tableColumns} />
            <Box sx={{ mt: 3 }} className="flex-basic-end">
              <Button
                fullWidth
                className="btn-180"
                btnText={t('common.submit')}
                variant="contained"
                onClick={() => handleEditedFormConfirmation(updatedFieldsArray)}
              />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default EditCustomForm;
