import { Card, CardHeader, Grid, Divider, Container } from '@mui/material';
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
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12}>
            <Card sx={{ m: 1 }}>
              <CardHeader title="React Flow Chart" />
              <Divider />
              <CardContent>
                <OverviewFlow />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FlowCharts;
