import * as React from 'react';
import { DatePicker } from '../../../shared/components/index';
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { Commonstructure, Cardstructure } from '../../../shared/components/index';

const Datepicker = () => {
  const [selectedDate, handleDateChange] = useState<Dayjs | null>(null);

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
              onChange={(newDate) => handleDateChange(newDate)}
              label="dates"
              slots={{
                textField: (params) => <TextField {...params} />,
              }}
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
              onChange={(newDate) => handleDateChange(newDate)}
              label="dates"
              disabled
              slots={{
                textField: (params) => <TextField {...params} />,
              }}
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
              onChange={(newDate) => handleDateChange(newDate)}
              label="dates"
              disableFuture
              slots={{
                textField: (params) => <TextField {...params} />,
              }}
            />
          </>
        }
      />
    </>
  );
};

export default Datepicker;
