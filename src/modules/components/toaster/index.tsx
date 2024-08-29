import {
  Button,
  Commonstructure,
  Cardstructure,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage
} from './../../../shared/components/index';

import { ToastContainer } from 'react-toastify';
const Toaster = () => {
  return (
    <>
      <Commonstructure
        titlename="Toaster-Component"
        heading="Toaster"
        subHeading="Toaster Components with different types of properties"
        documentlink="https://fkhadra.github.io/react-toastify/introduction"
      />

      <Cardstructure
        cardheader="Toaster-Component"
        component={
          <>
            <Button
              id="#Primary"
              sx={{ m: 1 }}
              btnText="bottom left toaster"
              variant="contained"
              onClick={() =>
                showSuccessMessage('success', {
                  theme: 'dark',
                  position: 'bottom-left'
                })
              }
            />

            <Button
              sx={{ m: 1 }}
              btnText="Bottom right toaster"
              variant="contained"
              onClick={() =>
                showSuccessMessage('success', {
                  theme: 'dark',
                  position: 'bottom-right'
                })
              }
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Toaster-Component with theme and autoclose"
        component={
          <>
            <Button
              id="#Primary"
              sx={{ m: 1 }}
              btnText="bottom left Error toaster"
              variant="contained"
              onClick={() =>
                showErrorMessage('Error', {
                  theme: 'colored',
                  position: 'bottom-left',
                  autoClose: false
                })
              }
            />

            <Button
              sx={{ m: 1 }}
              btnText="Bottom right warning toaster"
              variant="contained"
              onClick={() =>
                showWarningMessage('warning', {
                  theme: 'dark',
                  position: 'bottom-right'
                })
              }
            />
          </>
        }
      />
      <ToastContainer />
    </>
  );
};

export default Toaster;
