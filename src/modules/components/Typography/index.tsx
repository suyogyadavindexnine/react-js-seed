import {
  Typography,
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const CommonTypography = () => {
  return (
    <>
      <Commonstructure
        titlename="Typography"
        heading="Typography"
        subHeading="Typography Component with different types of properties"
        documentlink="https://mui.com/material-ui/api/typography/"
      />
      <Cardstructure
        cardheader="Typography with variant body1 and h3"
        component={
          <>
            <Typography variant="h5" align="center">
              center text
            </Typography>
            <Typography variant="h5" align="left">
              left text
            </Typography>
          </>
        }
      />
      <Cardstructure
        cardheader="Typography with text align"
        component={
          <>
            <Typography variant="body1">sample text</Typography>
            <Typography variant="h3">sample text</Typography>
          </>
        }
      />
    </>
  );
};

export default CommonTypography;
