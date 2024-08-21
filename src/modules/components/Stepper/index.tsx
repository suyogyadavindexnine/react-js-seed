import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  Cardstructure,
  Commonstructure,
  Stepper
} from '../../../shared/components/index';

const CommonStepper = () => {
  const steps = [
    { value: 'Select campaign settings', key: 1 },
    { value: 'Create an ad group', key: 2 },
    { value: 'Create an ad', key: 3 }
  ];
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completed, setCompleted] = useState<object>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const handleFinish = () => {
    handleReset();
  };
  return (
    <>
      <Commonstructure
        titlename="Stepper-Component"
        heading="Stepper"
        subHeading="Stepper Component with different types of properties"
        documentlink="https://mui.com/material-ui/react-stepper/"
      />

      <Cardstructure
        cardheader="Basic stepper"
        component={
          <>
            <Stepper stepsList={steps} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic stepper with activesteps"
        component={
          <>
            <Stepper activestep={activeStep} stepsList={steps} />
            <Box mt={2}>
              {activeStep === 0 ? (
                <Button disabled onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <Button onClick={handleBack}>Back</Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleFinish}>Finish</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </Box>
          </>
        }
      />
      <Cardstructure
        cardheader="Basic stepper with vertical"
        component={
          <>
            <Stepper orientation="vertical" stepsList={steps} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic stepper with customize caption"
        component={
          <>
            <Stepper
              optional={
                <Typography variant="caption">Customize captions</Typography>
              }
              stepsList={steps}
            />
          </>
        }
      />
    </>
  );
};

export default CommonStepper;
