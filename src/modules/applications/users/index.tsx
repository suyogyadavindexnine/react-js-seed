import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/core/footer';
import { Grid2 as Grid, Container, Box } from '@mui/material';
import ProfileCover from './components/ProfileCover';
import RecentActivity from './components/RecentActivity';
import Feed from './components/Feed';
import PopularTags from './components/PopularTags';
import MyCards from './components/MyCards';
import Addresses from './components/Addresses';
import { getUserDetails } from './services/profile.service';

function ManagementUserProfile() {
  const dispatch = useDispatch<any>();
  const [userData, setData] = useState({});
  const profileData = useSelector((state: any) => state.profileData);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  useEffect(() => {
    console.log(profileData);
    const userData = profileData;
    setData(userData);
  }, [profileData]);

  return (
    <>
      <Helmet>
        <title>John Smith Details - Management</title>
      </Helmet>
      <Box sx={{ mx: 4, my: 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <ProfileCover
              user={profileData?.userDetails}
              handleFollowBtn={() => null}
            />
          </Grid>
          <Grid  size={{ xs: 12, md: 4 }}>
            <RecentActivity activity={profileData?.recentActivity} />
          </Grid>
          <Grid  size={{ xs: 12, md: 8 }} >
            <Feed
              feeds={profileData?.followersFeed}
              handleFollowBtn={() => {}}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PopularTags
              tags={profileData?.popularTags}
              groups={profileData?.groups}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} >
            <MyCards cards={profileData?.cards} handleFollowBtn={() => {}} />
          </Grid>
          <Grid  size={{ xs: 12, md: 5 }}>
            <Addresses
              deliveryAddresses={profileData?.deliveryAddresses}
              shippingAddress={profileData?.shippingAddress}
              handleFollowBtn={() => {}}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
