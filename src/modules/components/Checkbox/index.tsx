import {
  CheckBox,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const Checkbox = () => {
  return (
    <>
      <Commonstructure
        titlename="Checkbox-Components"
        heading="Checkbox"
        subHeading="checkbox Components with different types of properties"
        documentlink="https://mui.com/material-ui/react-checkbox/"
      />
      <Cardstructure
        cardheader="Checkbox with different types of colors"
        component={
          <>
            <CheckBox color="success" />
            <CheckBox color="info" />
            <CheckBox color="error" />
          </>
        }
      />
      <Cardstructure
        cardheader="Checkbox with default checked"
        component={
          <>
            <CheckBox color="success" defaultChecked />
            <CheckBox color="info" defaultChecked />
            <CheckBox color="error" defaultChecked />
          </>
        }
      />
      <Cardstructure
        cardheader="Checkbox with default disabled"
        component={
          <>
            <CheckBox color="success" disabled defaultChecked />
            <CheckBox color="info" disabled defaultChecked />
            <CheckBox color="error" disabled defaultChecked />
          </>
        }
      />
      <Cardstructure
        cardheader="Checkbox with  size"
        component={
          <>
            <CheckBox color="success" size="small" />
            <CheckBox color="info" size="medium" />
          </>
        }
      />
    </>
  );
};

export default Checkbox;
