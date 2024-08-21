import { Grid } from '@mui/material';
import CompanySkills from './CompanySkills';
import CustomerProjects from './CustomerProjects';
import TotalEmployees from './TotalEmployees';
import Graph from './Graph';
import RegionWiseCustomer from './RegionWiseCustomer';
import CustomerSatisfaction from './CustomerSatisfaction';

const CompanyData = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TotalEmployees />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <CompanySkills />
        </Grid>
      </Grid>
      <Grid
        sx={{ my: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Graph />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <CustomerSatisfaction />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <RegionWiseCustomer />
        </Grid>
      </Grid>
      <Grid
        sx={{ my: 1 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CustomerProjects />
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyData;
