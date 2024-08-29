import {
  DatePicker,
  Commonstructure,
  Cardstructure,
  TextField
} from '../../../shared/components/index';
import { useState } from 'react';

const Datepicker = () => {
  const [selectedDate, handleDateChange] = useState<Date>(new Date());
  return (
    <>
      <Commonstructure
        titlename="Datepicker-Component"
        heading="Datepicker"
        subHeading="Datepicker Component with different types of properties"
        documentlink="https://mui.com/x/react-date-pickers/getting-started/"
      />

      <Cardstructure
        cardheader="Basic Datepicker"
        component={
          <>
            <DatePicker
              value={selectedDate}
              onChange={(newDate) => {
                handleDateChange(newDate);
              }}
              variant="filled"
              label="dates"
              renderInput={(params) => <TextField {...params} />}
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Datepicker with disabled"
        component={
          <>
            <DatePicker
              value={selectedDate}
              onChange={(newDate) => {
                handleDateChange(newDate);
              }}
              variant="filled"
              label="dates"
              disabled
              renderInput={(params) => <TextField {...params} />}
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Datepicker with disabled future dates"
        component={
          <>
            <DatePicker
              value={selectedDate}
              onChange={(newDate) => {
                handleDateChange(newDate);
              }}
              variant="filled"
              label="dates"
              disableFuture
              renderInput={(params) => <TextField {...params} />}
            />
          </>
        }
      />
    </>
  );
};

export default Datepicker;
