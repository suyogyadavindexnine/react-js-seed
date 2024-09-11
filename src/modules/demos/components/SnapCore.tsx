import React from 'react';
import { Card } from 'src/shared/components';
import { Grid, CardContent, Typography, Chip, Box } from '@mui/material';
import { PageTitleWrapper, PageTitle } from 'src/shared/components/index';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const SnapCoreData = [
  {
    id: 1,
    title: `snap.<b>backend-seed</b>`,
    description: "<b>API Service, Multi-tenancy, SSO, RBAC, logging, telemetry</b> and other core backend best-practice implementations.",
    status: "Ready",
  },
  {
    id: 2,
    title: "snap.<b>frontend-seed</b>",
    description: "Front end starter admin template with best practice <b>themed implementation, style guide, out of the box widgets.</b> ",
    status: "Ready",
  },
  {
    id: 3,
    title: "snap.<b>notify</b>",
    description: "Notifications service: Email, SMS, WhatsApp, Push notifications.",
    status: "Ready",
  },
  {
    id: 4,
    title: "snap.<b>observe</b>",
    description: "Visualizations for telemetry from snap.backend-seed.",
    status: "In Progress",
  },
  {
    id: 5,
    title: "snap.<b>deploy</b>",
    description: "Regulation compliant terraform deployment for clouds.",
    status: "Ready",
  },
  {
    id: 6,
    title: "snap.<b>alerts</b>",
    description: "<b>Real-time data stream analytics</b> Utilize existing data from databases or other sources and build analytics solutions, dashboards and real-time alerting and notifications.",
    status: "In Progress",
  },
  {
    id: 7,
    title: "snap.<b>brain</b>",
    description: "snap.<b>brain</b> democratizes AI model tuning and customization by providing an intuitive self-service solution to build AI assistants, chatbots, analytics solutions and APIs.",
    status: "In Progress",
  },
  // {
  //   id: 8,
  //   title: "snap.<b>core</b>",
  //   description: "snap.<b>core</b> is a core set of cloud agnostic libraries and services that are required for any SaaS product. Our customers can leverage these to accelerate outcomes for their products.",
  //   status: "In Progress",
  // }
];

const SnapCore = () => {
  const getStatusColor = (status) => {
    return status === 'In Progress' ? 'warning' : 'success'; // Choose colors for different statuses
  };
  const getStatusIcon = (status) => {
    return status === 'In Progress' ? <HourglassEmptyIcon /> : <CheckCircleIcon />;
  };

  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading="snap.core"
          subHeading="snap.core is a core set of cloud agnostic libraries and services that are required for any SaaS product. Our customers can leverage these to accelerate outcomes for their products."
          showDocumentationText={false} 
          showButton={false}
        />
      </PageTitleWrapper>

      <Grid container spacing={3} padding={2} paddingTop={0} justifyContent="flex-start">
        {SnapCoreData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ minHeight: '170px', position: 'relative' }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Typography variant="body2" fontSize={17} paddingBottom={2} dangerouslySetInnerHTML={{ __html: item.title }} />
                  <Chip 
                    label={item.status} 
                    color={getStatusColor(item.status)} 
                    icon={getStatusIcon(item.status)} 
                    size="small" 
                    sx={{ position: 'absolute', top: 10, right: 12 }}
                  />
                </Box>
                <Typography variant="body2" fontSize={14} dangerouslySetInnerHTML={{ __html: item.description }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SnapCore;
