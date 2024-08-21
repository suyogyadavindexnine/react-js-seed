import React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from 'src/shared/components/typography/Typography';
import EventCard from './EventCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LinkIcon from '@mui/icons-material/Link';
import CampaignIcon from '@mui/icons-material/Campaign';
import { EventData } from '../models/DashboardDetails';
import AlertCard from './AlertCard';

const AlertsData = () => {
  // Constants
  const announcementsData: EventData[] = [
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'The first weekly coding kata is tomorrow!',
      extraContent: '5 min ago'
    },
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'Team Indexnine wishes Happy Birthday to Aditi Saxena',
      extraContent: '5 min ago'
    },
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'The appraisal calls will start from tomorrow',
      extraContent: '1 hr ago'
    },
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'The presentation on Storybook is scheduled on Wednesday',
      extraContent: '1 hr ago'
    },
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'Pay slips are updated on Keka',
      extraContent: '2 weeks ago'
    },
    {
      eventIcon: <CampaignIcon color="primary" fontSize="small" />,
      eventTitle: 'Please check your tax declarations on Keka',
      extraContent: '2 weeks ago'
    }
  ];

  const upcomingEvents: EventData[] = [
    {
      eventIcon: <CalendarTodayIcon color="primary" fontSize="small" />,
      eventTitle: 'Get ready for Mango Madness!! Wednesday, 10th May, 2023.'
    },
    {
      eventIcon: <CalendarTodayIcon color="primary" fontSize="small" />,
      eventTitle: 'Box Cricket 2023" Finals Award Ceremony - Day 3'
    }
  ];

  const quickLinkData: EventData[] = [
    {
      eventIcon: <LinkIcon color="primary" fontSize="small" />,
      eventTitle: 'Link for the employee feedback',
      quickLink: 'https://forms.gle/ytZqzZr8hcKzNcLt7'
    },
    {
      eventIcon: <LinkIcon color="primary" fontSize="small" />,
      eventTitle: 'Access our portal',
      quickLink: 'https://portal.indexnine.com/en/home'
    }
  ];

  const alertData = [
    {
      id: '1',
      title: 'Design Kata',
      description:
        'Brainstorm, collaborate and come up with different ideas to design the best solutions',
      icon: <CalendarMonthOutlinedIcon />,
      time: 'Today June 12, 2022 12:30pm-1pm'
    }
  ];

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AlertCard alertData={alertData} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid sx={{ my: 2 }} item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box className="flex-basic-start">
            <Box className="rightSectionTitle">
              <Typography variant="h5">Announcements</Typography>
            </Box>
            <Box className="upcomingEvents"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <EventCard eventData={announcementsData} showStepper={true} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid sx={{ my: 2 }} item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box className="flex-basic-start">
            <Box className="rightSectionTitle">
              <Typography variant="h5">Upcoming Events</Typography>
            </Box>
            <Box className="upcomingEvents"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <EventCard eventData={upcomingEvents} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
      >
        <Grid sx={{ my: 2 }} item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box className="flex-basic-start">
            <Box className="rightSectionTitle">
              <Typography variant="h5">Quick Links</Typography>
            </Box>
            <Box className="upcomingEvents"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <EventCard eventData={quickLinkData} />
        </Grid>
      </Grid>
    </>
  );
};

export default AlertsData;
