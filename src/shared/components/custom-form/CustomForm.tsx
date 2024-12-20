import { Grid } from "@mui/material";
import { FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
import { Button } from "../button/Button";
import FormField from "../form-field/FormField";
import { CustomFormType } from "./service/customFormInterface";

export const CustomForm = ({
  formFields,
  initialValues,
  submitBtnText = "Submit",
  cancelBtnText = "Cancel",
  editFieldValues,
  submitBtnHandler,
  cancelBtnHandler,
  enableReinitialize = false,
}: CustomFormType) => {
  //Form constants
  const formik = useFormik({
    initialValues,
    enableReinitialize,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values: any) => {
      submitBtnHandler(values);
      handleReset();
    },
  });

  const { isValid, handleSubmit, resetForm, validateForm } = formik;

  //useEffect
  useEffect(() => {
    if (editFieldValues && Object.keys(editFieldValues)?.length) {
      formik.setValues(editFieldValues);
    }
  }, [editFieldValues]);

  //Methods
  const handleReset = async () => {
    await resetForm();
    validateForm();
  };

  return (
    <>
      <FormikProvider value={formik}>
        <form>
          {formFields?.map((field, index) => (
            <Grid key={index} container direction="row">
              <Grid sx={{ m: 1 }} xs={12} md={12} lg={12} xl={12}>
                <FormField fieldProps={field} />
              </Grid>
            </Grid>
          ))}
          <Grid sx={{ mt: 2 }} container direction={"row-reverse"} spacing={2}>
            <Grid xs={12} sm={6} md={2} lg={2} xl={2}>
              <Button
                btnText={submitBtnText}
                fullWidth
                type="submit"
                variant="contained"
                disabled={!isValid}
                onClick={(event: any) => handleSubmit(event)}
              />
            </Grid>
            <Grid xs={12} sm={6} md={2} lg={2} xl={2}>
              <Button
                fullWidth
                btnText={cancelBtnText}
                variant="text"
                onClick={cancelBtnHandler}
              />
            </Grid>
          </Grid>
        </form>
      </FormikProvider>
    </>
  );
};

export default CustomForm;
