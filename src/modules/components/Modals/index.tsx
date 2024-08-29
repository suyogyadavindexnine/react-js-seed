import { useState } from 'react';
import {
  SimpleDialog,
  Button,
  Commonstructure,
  Cardstructure,
  Typography
} from '../../../shared/components/index';
import { Box } from '@mui/material';

function Modals() {
  const [open, setOpen] = useState<boolean>(false);
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [selectedValue, setSelectedValue] = useState<string>(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Commonstructure
        titlename="Modals - Component"
        heading="Modals"
        subHeading="Modals Component with different types of properties"
        documentlink="https://material-ui.com/components/dialogs/"
      />
      <Cardstructure
        cardheader="Basic Dialog"
        component={
          <>
            <Typography variant="subtitle1">
              Selected: {selectedValue}
            </Typography>
            <Button
              btnText=" Open simple dialog"
              variant="outlined"
              onClick={handleClickOpen}
            />
            <SimpleDialog
              model_title={<Box>Dialog Title</Box>}
              model_content={
                <Box>
                  Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.
                </Box>
              }
              model_actions={
                <>
                  <Button
                    onClick={closeDialog}
                    variant="text"
                    btnText="Disagree"
                  />
                  <Button
                    onClick={closeDialog}
                    variant="text"
                    btnText="Agree"
                  />
                </>
              }
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </>
        }
      />
    </>
  );
}

export default Modals;
