import { useEffect, useState } from 'react';
import { Box, Avatar, Grid } from '@mui/material';
import { Card, Button, Typography } from '../../../shared/components/index';
import warningIndicatorIcon from '../../../assets/icons/HealthScore/WarningIndicator.svg';
import greenIndicatorIcon from '../../../assets/icons/HealthScore/GreenIndicator.svg';
import redIndicatorIcon from '../../../assets/icons/HealthScore/RedIndicator.svg';
// const feeds = [
//   {
//     name: 'Munroe Dacks',
//     id: 'munroe_dacks',
//     healthscore: 9.6,
//     avatar: '/static/images/avatars/1.jpg'
//   },
//   {
//     name: 'Gunilla Canario',
//     id: 'gunilla_canario',
//     healthscore: 7,
//     avatar: '/static/images/avatars/2.jpg'
//   }
// ];
function GroupMemmbers({ feeds }) {
  console.log('feeds', feeds);

  return (
    <>
      <Grid container direction="row">
        {feeds.userDetails.length &&
          feeds.userDetails.map((_feed) => (
            <Grid key={_feed.name} pl={2}>
              <Card sx={{ hight: 20, width: 300 }}>
                <Grid>
                  <Box p={3} display="flex" alignItems="flex-start">
                    <Avatar src={_feed.avatar} />
                    <Box pl={2}>
                      {/* <Typography gutterBottom variant="subtitle2">
                    {_feed.company}
                  </Typography> */}
                      <Typography variant="h4" gutterBottom>
                        {_feed.name}
                      </Typography>
                      <Typography variant="h5">
                        {_feed.healthscore ? (
                          <Box display="flex" alignItems="flex-start">
                            <Box className="float-left">
                              {_feed.data_point_type &&
                                _feed.data_point_type === 'critical' ? (
                                <img src={redIndicatorIcon} alt='redIndicatorIcon' />
                              ) : _feed.data_point_type &&
                                _feed.data_point_type === 'average' ? (
                                <img src={warningIndicatorIcon} alt='warningIndicatorIcon' />
                              ) : (
                                <img src={greenIndicatorIcon} alt='greenIndicatorIcon' />
                              )}
                            </Box>
                            <Box style={{ paddingLeft: 3 }}>
                              {_feed.data_point_type &&
                                _feed.data_point_type === 'critical'
                                ? ' Improve Health Score'
                                : _feed.data_point_type &&
                                  _feed.data_point_type === 'average'
                                  ? ' All Good'
                                  : null}
                            </Box>
                          </Box>
                        ) : null}
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
                    <Box pl={2}>
                      <Button
                        color={_feed.healthscore > 8 ? 'success' : 'warning'}
                        variant="outlined"
                      >
                        <span
                          className="custom-text-display-5 line-height-1 pr-2"
                          style={{ letterSpacing: 1 }}
                        >
                          {_feed.healthscore}
                        </span>
                        {_feed.healthscore > 8 ? (
                          <span className="custom-text-display-2 line-height-1">
                            &#9650;
                          </span>
                        ) : (
                          <span className="custom-text-display-2 line-height-1">
                            &#9660;
                          </span>
                        )}
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default GroupMemmbers;
