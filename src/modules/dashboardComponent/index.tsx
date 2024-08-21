import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import { PageTitleWrapper } from '../../shared/components/index';
import { Container, Grid } from '@mui/material';
import Footer from 'src/core/footer';
import GroupMembers from './components/GroupMembers';
import { getDashboardUserDetails } from './services/dashboard.service';
import UserDetails from './components/UserDetails';

function Dashboard() {
  const dispatch = useDispatch<any>();
  const [userData, setData] = useState({});

  const dashboardProfileData = useSelector(
    (state: any) => state.dashboardProfileData
  );

  useEffect(() => {
    dispatch(getDashboardUserDetails());
  }, []);

  useEffect(() => {
    console.log('dashboardProfileData', dashboardProfileData.userDetails);
    let userData = dashboardProfileData;
    console.log('userData', userData);
    setData(userData.userDetails && userData.userDetails);
  }, [dashboardProfileData.userDetails, userData]);
  // const { dashboardData, loadingDashboardData } = useSelector(
  //   (state: any) => state?.dashboardData
  // );
  // console.log('dashboardData', dashboardData);

  // useEffect(() => {
  //   dispatch(getDashboardData());
  // }, []);

  // useEffect(() => {
  //   console.log(dashboardData);
  //   let dashBoardDetails = dashboardData;
  //   setAccountData(dashBoardDetails);
  // }, [dashboardData]);

  return (
    <>
      <Helmet>
        <title>Indexnine React TS Starter</title>
      </Helmet>
      <PageTitleWrapper>
        {/* <PageHeader user={dashboardData?.user} /> */}

        <Grid item xs={12} md={8}>
          <GroupMembers feeds={dashboardProfileData} />
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <UserDetails userInfo={dashboardProfileData} />
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <Wallets
              walletDetails={dashboardData.walletDetails}
              handleButtonClick={() => null}
            />
          </Grid> */}
          {/* <Grid item lg={4} xs={12}>
            <AccountSecurity securityDetails={dashboardData.accountSecurity} />
          </Grid> */}
          {/* <Grid item xs={12}>
            <WatchList
              watchListDetails={dashboardData.watchList}
              Watchlistlabel={dashboardData.Watchlistlabel}
            />
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
