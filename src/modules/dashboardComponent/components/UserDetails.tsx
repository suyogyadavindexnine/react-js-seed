import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { Card, Typography } from '../../../shared/components/index';
import { useEffect, useState } from 'react';

const UserDetails = (userInfo) => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();

  const chartOptions: ApexOptions = {
    chart: {
      type: 'radialBar',
      height: 350,
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    colors: ['#003300'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#87D4F9'],
        stops: [0, 100]
      }
    },
    labels: ['Health Score'],
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          size: '77%'
        },

        track: {
          background: '#e7e7e7',
          strokeWidth: '87%',
          margin: 2, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: 1,
            fontSize: '15px',
            fontWeight: 600,
            formatter: function (val) {
              return val / 10 + '';
            }
          }
        }
      }
    }
  };

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6} lg={4}>
          <Box p={4}>
            <Grid>
              <Box p={3} display="flex" alignItems="flex-start">
                <Avatar
                  sx={{ width: 60, height: 60 }}
                  src={
                    userInfo.userInfo.userDetails.length &&
                    userInfo.userInfo.userDetails[0].avatar
                  }
                />
                <Box pl={4}>
                  {/* <Typography gutterBottom variant="subtitle2">
                    {_feed.company}
                  </Typography> */}
                  <Typography variant="h4" gutterBottom>
                    {userInfo.userInfo.userDetails.length &&
                      userInfo.userInfo.userDetails[0].name}
                  </Typography>
                  <Typography variant="h5" pt={1}>
                    <Box display="flex" alignItems="flex-start">
                      <Box className="float-left">
                        {userInfo.userInfo.userDetails.length &&
                          userInfo.userInfo.userDetails[0].weight}
                      </Box>
                      <Box style={{ paddingLeft: 15 }}>Weight</Box>
                    </Box>
                  </Typography>
                  <Typography variant="h5">
                    <Box display="flex" alignItems="flex-start">
                      <Box className="float-left">
                        {userInfo.userInfo.userDetails.length &&
                          userInfo.userInfo.userDetails[0].bml}
                      </Box>
                      <Box style={{ paddingLeft: 30 }}>BML</Box>
                    </Box>
                  </Typography>
                  {/* <Button
                    btnText="Follow"
                    variant="outlined"
                    size="small"
                    startIcon={<AddTwoToneIcon />}
                    onClick={() => handleFollowBtn('clicked!')}
                  /> */}
                </Box>
                {/* <Box>Hi</Box> */}
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={6}
          lg={4}
        >
          <Box display="flex" alignItems="flex-start">
           {userInfo ? (<Chart
              height={180}
              options={chartOptions}
              series={[
                (userInfo?.userInfo?.userDetails?.length &&
                  userInfo?.userInfo?.userDetails[0]?.healthscore / 10) * 100
              ]}
              type="radialBar"
            />) : null}
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={6}
          lg={4}
        >
          <Typography variant="h4">
            {userInfo.userInfo.userDetails.length &&
            userInfo.userInfo.userDetails[0].data_point_type === 'critical'
              ? ' Need to Improve Health Score'
              : userInfo.userInfo.userDetails.length &&
                userInfo.userInfo.userDetails[0].data_point_type === 'average'
              ? ' Health Score Looks Good'
              : null}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserDetails;
