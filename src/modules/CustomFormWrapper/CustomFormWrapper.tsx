import { Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EditIcon from '@mui/icons-material/Edit';

import {
  CustomForm,
  SimpleDialog,
  Typography
} from '../../shared/components/index';
import { FormFieldType } from '../../shared/components/form-field/service/formFieldInterface';
import {
  PageTitleWrapper,
  Card,
  PageHeader
} from 'src/shared/components/index';
import EditCustomForm from './components/EditCustomForm';

const CustomFormWrapper = () => {
  //Constants
  const USER_TYPE_OPTIONS = [
    {
      id: 'USER',
      label: 'User'
    },
    {
      id: 'ADMIN',
      label: 'Admin'
    }
  ];

  const GENDER_OPTIONS = [
    {
      id: 'FEMALE',
      label: 'Female'
    },
    {
      id: 'MALE',
      label: 'Male'
    }
  ];

  const CHECKBOX_GROUP_OPTIONS = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' }
  ];

  const emails = [
    {
      email: 'nishant@indexnine.com'
    },
    {
      email: 'nihar@indexnine.com'
    },
    {
      email: 'yash@indexnine.com'
    },
    {
      email: 'nitin@indexnine.com'
    }
  ];

  const initialValues = {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
    user_type: '',
    gender: '',
    remember_me: false,
    dummy_checkbox_group: []
  };

  //state
  const [openEditFormPopup, setOpenEditFormPopup] = useState(false);
  const [fields, setFields] = useState([] as FormFieldType[]);

  //useEffect
  useEffect(() => {
    const customFormFields: FormFieldType[] = [
      {
        id: 'first_name',
        name: 'first_name',
        type: 'text',
        label: 'First Name',
        validations: {
          required: true,
          maxLength: 10
        },
        handleFieldChange: handleInputChange
      },
      {
        id: 'last_name',
        name: 'last_name',
        type: 'text',
        label: 'Last Name',
        validations: {
          required: true,
          maxLength: 10
        },
        errorMessages: {
          maxLenghtErrMsg: 'Maximum 10 characters are allowed'
        },
        handleFieldChange: handleInputChange
      },
      {
        id: 'age',
        name: 'age',
        type: 'integer_only',
        label: 'Age',
        validations: {
          required: true,
          minValue: 18,
          maxValue: 60
        },
        errorMessages: {
          minValueErrMsg: 'Age should be greater than 18 years',
          maxValueErrMsg: 'Age should be less than 60 years'
        },
        handleFieldChange: handleInputChange
      },
      {
        id: 'email',
        name: 'email',
        type: 'email',
        label: 'Email',
        validations: {
          required: true,
          email: true,
          uniqueDataValidation: true
        },
        uniqueData: emails,
        uniqueDataKey: 'email',
        handleFieldChange: handleInputChange
      },
      {
        id: 'password',
        name: 'password',
        type: 'password',
        label: 'Password',
        validations: {
          required: true,
          password: true
        },
        handleFieldChange: handleInputChange
      },
      {
        id: 'user_type',
        name: 'user_type',
        type: 'select',
        label: 'User Type',
        validations: {
          required: true
        },
        options: USER_TYPE_OPTIONS,
        itemValueKey: 'id',
        itemLabelKey: 'label',
        handleFieldChange: handleAutoCompleteChange
      },
      {
        id: 'gender',
        name: 'gender',
        type: 'radio',
        label: 'Gender',
        validations: {
          required: true
        },
        options: GENDER_OPTIONS,
        itemValueKey: 'id',
        itemLabelKey: 'label',
        isDirectionRow: true,
        handleFieldChange: handleInputChange
      },
      {
        id: 'remember_me',
        name: 'remember_me',
        type: 'checkbox',
        label: 'Remember Me',
        handleFieldChange: handleChackboxChange
      },
      {
        id: 'dummy_checkbox_group',
        name: 'dummy_checkbox_group',
        type: 'checkbox_group',
        label: 'Demo checkbox group',
        options: CHECKBOX_GROUP_OPTIONS,
        itemValueKey: 'id',
        itemLabelKey: 'label',
        isDirectionRow: true,
        validations: {
          required: true
        },
        handleFieldChange: handleChackboxChange
      }
    ];
    setFields(customFormFields);
  }, []);

  //Methods
  const onCancel = () => {
    //handle cancel
  };

  const onSubmit = (values: any) => {
    //handle submit
    alert(JSON.stringify(values, null, 4));
  };

  const handleInputChange = (event, field) => {
    //handle Input box change event
  };

  const handleChackboxChange = (event, field) => {
    //handle checkbox change event
  };

  const handleAutoCompleteChange = (_event, field, value) => {
    // For autocomplete change event field and value props will be used
  };

  const handleBtnClick = () => {
    setOpenEditFormPopup(true);
  };

  const onEditPopupClose = () => {
    setOpenEditFormPopup(false);
  };

  const updateFormFields = (updatedArray: FormFieldType[]) => {
    setFields(updatedArray);
  };

  return (
    <>
      <Helmet>
        <title>Indexnine Custom Form - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          heading="Custom Form"
          subHeading={`Indexnine user this is your custom form`}
          buttonText="Edit Form"
          btnVariant={'contained'}
          icon={<EditIcon fontSize="small" />}
          btnClick={handleBtnClick}
        />
      </PageTitleWrapper>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card sx={{ p: 5 }}>
              <CustomForm
                formFields={fields}
                initialValues={initialValues}
                submitBtnHandler={onSubmit}
                cancelBtnHandler={onCancel}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: 5 }} maxWidth="lg">
        <Card sx={{ p: 5 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Code Examples
          </Typography>
          <Grid container direction={'row'}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="subtitle2">Text Field: </Typography>
              <Box>
                <pre>
                  {JSON.stringify(
                    {
                      id: 'first_name',
                      name: 'first_name',
                      type: 'text',
                      label: 'First Name',
                      validations: {
                        required: true,
                        maxLength: 10
                      },
                      handleFieldChange: handleInputChange
                    },
                    null,
                    4
                  )}
                </pre>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="subtitle2">Radio Button: </Typography>
              <Box>
                <pre>
                  {JSON.stringify(
                    {
                      id: 'gender',
                      name: 'gender',
                      type: 'radio',
                      label: 'Gender',
                      validations: {
                        required: true
                      },
                      options: GENDER_OPTIONS,
                      itemValueKey: 'id',
                      itemLabelKey: 'label',
                      isDirectionRow: true,
                      handleFieldChange: handleInputChange
                    },
                    null,
                    4
                  )}
                </pre>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="subtitle2">Dropdown Field: </Typography>
              <Box>
                <pre>
                  {JSON.stringify(
                    {
                      id: 'user_type',
                      name: 'user_type',
                      type: 'select',
                      label: 'User Type',
                      validations: {
                        required: true
                      },
                      options: USER_TYPE_OPTIONS,
                      itemValueKey: 'id',
                      itemLabelKey: 'label',
                      handleFieldChange: handleAutoCompleteChange
                    },
                    null,
                    4
                  )}
                </pre>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography variant="subtitle2">Checkbox Group: </Typography>
              <Box>
                <pre>
                  {JSON.stringify(
                    {
                      id: 'dummy_checkbox_group',
                      name: 'dummy_checkbox_group',
                      type: 'checkbox_group',
                      label: 'Demo checkbox group',
                      options: CHECKBOX_GROUP_OPTIONS,
                      itemValueKey: 'id',
                      itemLabelKey: 'label',
                      isDirectionRow: true,
                      validations: {
                        required: true
                      },
                      handleFieldChange: handleChackboxChange
                    },
                    null,
                    4
                  )}
                </pre>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <Container sx={{ mt: 5 }} maxWidth="lg">
        <Card sx={{ p: 5 }}>
          <Grid container direction={'row'}>
            <Grid item xs={12}>
              <Typography variant="h4">Possible fields</Typography>
              <Box sx={{ maxWidth: 250 }}>
                <pre>
                  {JSON.stringify(
                    {
                      name: 'string',
                      type: 'text | radio | email | select | password | checkbox | textarea | number_only | autocomplete | checkbox_group | integer_only',
                      label: 'string (optional)',
                      validations: 'object (optional)',
                      errorMessages: 'object (optional)',
                      options: 'any[] (optional)',
                      isDisabled: 'boolean (optional)',
                      itemValueKey: 'string (optional)',
                      itemLabelKey: 'string (optional)',
                      isDirectionRow: 'boolean (optional)',
                      handleFieldChange:
                        '(event, field, value?) => void (optional)'
                    },
                    null,
                    4
                  )}
                </pre>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      <SimpleDialog
        open={openEditFormPopup}
        model_title={
          <Typography sx={{ p: 3, pl: 2 }} variant="h4" fontWeight="bold">
            Edit Form
          </Typography>
        }
        model_content={
          <EditCustomForm
            formFields={fields}
            updateFormFields={updateFormFields}
            closeEditFormPopup={onEditPopupClose}
          />
        }
        customClass="editFormPopup"
        onClose={onEditPopupClose}
      />
    </>
  );
};

export default CustomFormWrapper;
