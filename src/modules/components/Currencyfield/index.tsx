import {
  CurrencyInput,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const CurrencyField = () => {
  const currencies = [
    {
      value: 10
    },
    {
      value: 20
    },
    {
      value: 30
    },
    {
      value: 40
    }
  ];
  return (
    <>
      <Commonstructure
        titlename="Currency field"
        heading="Currency field"
        subHeading="Currency field Component with different types of properties"
        documentlink="https://mui.com/material-ui/react-text-field/"
      />
      <Cardstructure
        cardheader="Basic Currency field with different variants"
        component={
          <>
            <CurrencyInput sx={{ m: 1 }} variant="filled" />
            <CurrencyInput sx={{ m: 1 }} variant="outlined" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Currency field with Native select"
        component={
          <>
            <CurrencyInput sx={{ m: 1 }} variant="filled" />
            <CurrencyInput sx={{ m: 1 }} variant="outlined" />
          </>
        }
      />
      <Cardstructure
        cardheader="Contained Buttons"
        component={
          <>
            <CurrencyInput
              sx={{ m: 1 }}
              select
              SelectProps={{
                native: true
              }}
              helperText="Please select amount"
              label="Native select"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </CurrencyInput>
          </>
        }
      />
    </>
  );
};

export default CurrencyField;
