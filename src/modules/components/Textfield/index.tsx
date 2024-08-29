import {
  TextField,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const Textfield = () => {
  return (
    <>
      <Commonstructure
        titlename="Textfield-Component"
        heading="Textfield"
        subHeading="Textfield Component with different types of properties"
        documentlink="https://mui.com/material-ui/react-text-field/"
      />
      <Cardstructure
        cardheader="Basic Textfield with colors"
        component={
          <>
            <TextField sx={{ p: 1 }} color="info" />
            <TextField sx={{ p: 1 }} color="primary" />
            <TextField sx={{ p: 1 }} color="error" />
            <TextField sx={{ p: 1 }} color="success" />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Textfield with label and variant properties"
        component={
          <>
            <TextField sx={{ p: 1 }} label="textfield" color="info" />
            <TextField
              sx={{ p: 1 }}
              label="outlined"
              variant="outlined"
              color="primary"
            />
            <TextField
              sx={{ p: 1 }}
              label="filled"
              variant="filled"
              color="error"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Textfield with helpertext and multilined"
        component={
          <>
            <TextField
              sx={{ p: 1 }}
              helperText="Please enter name"
              color="info"
            />
            <TextField
              sx={{ p: 1 }}
              label="Multilined textfield"
              multiline={true}
              color="primary"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Basic Textfield with fullwidth"
        component={
          <>
            <TextField
              sx={{ p: 1 }}
              fullWidth
              helperText="Please enter name"
              color="info"
            />
          </>
        }
      />
    </>
  );
};

export default Textfield;
