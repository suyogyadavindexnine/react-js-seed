import React, { useEffect } from 'react';
import { Grid, Container, Box } from '@mui/material';

import { PageTitle, PageTitleWrapper } from '../../shared/components';

const ChoroplethWidget = () => {
  // Use Effects
  /**
  This Use Effect is used to access the JS and the CSS file which then renders the Choropleth Map
 */
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './docs/index.js';
    script.async = true;
    const link = document.createElement('link');
    link.href = './docs/index.css';
    link.rel = 'stylesheet';
    document.body.appendChild(script);
    document.body.appendChild(link);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(link);
    };
  }, []);

  return (
    <>
      <PageTitleWrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <PageTitle
            heading={'Choropleth Map'}
            docs={'https://leafletjs.com/examples/choropleth/'}
          />
        </div>
      </PageTitleWrapper>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ mb: 10 }}>
            <div className="choropleth_widget" data-subreddit="javascript" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ChoroplethWidget;
