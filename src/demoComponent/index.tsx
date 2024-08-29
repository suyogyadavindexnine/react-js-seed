import React from 'react';
import Cards from 'src/modules/components/Cards/index';
import { Card, CardHeader, Grid, Divider, Box } from '@mui/material';
//import Buttons from 'src/modules/components/Buttons';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

const DemoCard = () => {
  return (
    <>
      <Cards /> {/*here we can use common component card */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        {/* here we are using grid for responsiveness as you can see we are using break points like xs for small screen,lg for large screen etc.*/}
        <Grid item lg={6} md={6} xs={12}>
          <h1>content 1</h1>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <h1>content 2</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default DemoCard;
