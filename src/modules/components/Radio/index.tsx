import {
  Radio,
  Commonstructure,
  Cardstructure
} from './../../../shared/components/index';

const RadioButton = () => {
  return (
    <>
      <Commonstructure
        titlename="Radio - button"
        heading="Radio"
        subHeading="Radio  button Components with different types of properties"
        documentlink="https://mui.com/material-ui/react-radio-button/"
      />
      <Cardstructure
        cardheader="Basic Radio button "
        component={
          <>
            <Radio />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Radio button with color "
        component={
          <>
            <Radio color="info" />
            <Radio color="success" />
            <Radio color="warning" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Radio button with default checked "
        component={
          <>
            <Radio checked={true} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Radio button with disabled "
        component={
          <>
            <Radio disabled={true} />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Radio button with  size"
        component={
          <>
            <Radio size="small" />
            <Radio size="medium" />
          </>
        }
      />
    </>
  );
};

export default RadioButton;
