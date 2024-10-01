import { Card, CardHeader, Grid2 as Grid, Divider, Container, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Helmet } from 'react-helmet-async';
import OverviewFlow from './components/OverviewFlow';
import { PageTitleWrapper, PageTitle } from 'src/shared/components/index';

const FlowCharts = () => {
  return (
    <>
      <Helmet>
        <title>Indexnine FlowChart - Components</title>
      </Helmet>{' '}
      <PageTitleWrapper>
        <PageTitle
          heading="Flow Chart"
          subHeading="React Flow Chart Component."
          docs="https://reactflow.dev/docs/introduction/"
        />
      </PageTitleWrapper>
      {/* Added button component from previous seed to current seed  */}
      <Box>
        <Grid container direction="row" justifyContent="space-between">
          <Grid size={{ xs: 12}}>
            <Card sx={{ m: 1 }}>
              <CardHeader title="React Flow Chart" />
              <Divider />
              <CardContent>
                <OverviewFlow />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FlowCharts;
