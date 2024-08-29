import { Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const Buttons = () => {
  return (
    <>
      <Commonstructure
        titlename="Button-Components"
        heading="Buttons"
        subHeading="Button Components with different types of properties"
        documentlink="https://mui.com/material-ui/react-button/"
      />

      <Cardstructure
        cardheader="Contained Buttons"
        component={
          <>
            <Button
              id="#Primary"
              sx={{ m: 1 }}
              btnText="Primary"
              variant="contained"
            />
            <Button
              sx={{ m: 1 }}
              btnText="Secondary"
              color="secondary"
              variant="contained"
            />
            <Button
              sx={{ m: 1 }}
              btnText="Disabled"
              disabled={true}
              variant="contained"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Text Buttons"
        component={
          <>
            <Button sx={{ m: 1 }} btnText="Primary" variant="text" />
            <Button
              sx={{ m: 1 }}
              btnText="Secondary"
              color="secondary"
              variant="text"
            />
            <Button
              sx={{ m: 1 }}
              btnText="Disabled"
              disabled={true}
              variant="text"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Outlined Buttons"
        component={
          <>
            <Button sx={{ m: 1 }} btnText="Primary" variant="outlined" />
            <Button
              sx={{ m: 1 }}
              btnText="Secondary"
              color="secondary"
              variant="outlined"
            />
            <Button
              sx={{ m: 1 }}
              btnText="Disabled"
              disabled={true}
              variant="outlined"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Sizes"
        component={
          <>
            <Button
              sx={{ m: 1 }}
              btnText="small"
              size="small"
              variant="contained"
            />

            <Button
              sx={{ m: 1 }}
              size="medium"
              btnText="medium"
              variant="contained"
            />
            <Button
              sx={{ m: 1 }}
              size="large"
              btnText="large"
              variant="contained"
            />
            <Divider />
            <Button
              sx={{ m: 1 }}
              btnText="small"
              size="small"
              variant="outlined"
            />

            <Button
              sx={{ m: 1 }}
              btnText="medium"
              size="medium"
              variant="outlined"
            />
            <Button
              // startIcon={<DeleteIcon />}
              sx={{ m: 1 }}
              size="large"
              btnText="large"
              variant="outlined"
            />
          </>
        }
      />
      <Cardstructure
        cardheader="Sizes"
        component={
          <>
            <Button
              sx={{ m: 1 }}
              icon={<DeleteIcon />}
              btnText="Delete"
              size="medium"
              variant="contained"
            />
            <IconButton aria-label="delete" sx={{ margin: 1 }}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" sx={{ margin: 1 }}>
              <DeleteIcon fontSize="large" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default Buttons;
