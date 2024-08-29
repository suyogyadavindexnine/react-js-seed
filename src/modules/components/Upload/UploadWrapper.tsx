import React from 'react';
import { Helmet } from 'react-helmet-async';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Box, Container, Grid } from '@mui/material';

import {
  PageTitleWrapper,
  Card,
  PageHeader
} from 'src/shared/components/index';
import Upload from './components/Upload';

const UploadWrapper = () => {
  const onClick = () => {
    window.open('https://github.com/react-dropzone/react-dropzone', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Indexnine Upload Component</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          heading="Upload Component"
          subHeading={`Customized Upload Component`}
          buttonText="Go To Documentation"
          btnVariant={'contained'}
          icon={<AddTwoToneIcon fontSize="small" />}
          btnClick={onClick}
        />
      </PageTitleWrapper>

      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card sx={{ p: 5 }}>
              <Upload isMultipleUpload={false} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ p: 5 }}>
              <Upload isMultipleUpload={true} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UploadWrapper;
