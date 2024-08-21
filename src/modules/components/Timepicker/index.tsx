import {
  TimePicker,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const Timepicker = () => {
  return (
    <>
      <Commonstructure
        titlename="Timepicker"
        heading="Timepicker"
        subHeading="Timepicker Component with different types of properties"
        documentlink="https://mui.com/material-ui/time-picker/"
      />

      <Cardstructure cardheader="Basic Timepicker" component={<TimePicker />} />
      <Cardstructure
        cardheader="Basic Timepicker with variant"
        component={
          <>
            <TimePicker sx={{ m: 1 }} variant="filled" />
            <TimePicker sx={{ m: 1 }} variant="outlined" />
          </>
        }
      />
    </>
  );
};

export default Timepicker;
