import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Link, MobileStepper, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import { EventCardProps, EventData } from '../models/DashboardDetails';
import { Button, Card } from '../../../shared/components/index';

const EventCard = ({ eventData, showStepper = false }: EventCardProps) => {
  //Constant
  const maxSteps = eventData?.length / 2;
  const theme = useTheme();

  //State
  const [activeStep, setActiveStep] = useState(0);
  const [stepperData, setStepperData] = useState([] as any[]);

  //useEffects
  useEffect(() => {
    if (showStepper) {
      getStepperData();
    }
  }, [activeStep]);

  //Methods
  /**
   * get data for stepper.
   */
  const getStepperData = () => {
    const elements = eventData.slice(activeStep, activeStep + 2);
    setStepperData(elements);
  };

  /**
   * handle next event of stepper
   */
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  /**
   * Handle back event of stepper
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /**
   * Get the card content
   * @param data
   * @returns return the content of the card
   */
  const getContent = (data: EventData[]) => {
    return (
      <>
        {data?.map((item, index) => (
          <Box
            key={index}
            sx={{ p: 2 }}
            className={clsx('flex-basic-start', {
              ['cardBorder']: index !== eventData?.length - 1
            })}
          >
            <Box className="eventIconContainer flex-basic-center">
              {item?.eventIcon}
            </Box>
            <Box sx={{ pl: 2 }}>
              <Box>{item?.eventTitle}</Box>
              {item?.quickLink && (
                <Box className="eventLink">
                  <Link href={item?.quickLink} target="_blank">
                    {item?.quickLink}
                  </Link>
                </Box>
              )}
              {item?.extraContent && <>{item?.extraContent}</>}
            </Box>
          </Box>
        ))}
      </>
    );
  };

  //HTML
  return (
    <>
      <Card>
        {getContent(
          showStepper && stepperData?.length ? stepperData : eventData
        )}
        {showStepper && (
          <Box className="flex-basic-end">
            <MobileStepper
              className="customMobileStepper"
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <IconButton
                  color="primary"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </IconButton>
              }
              backButton={
                <IconButton
                  color="primary"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </IconButton>
              }
            />
          </Box>
        )}
      </Card>
    </>
  );
};

export default EventCard;
