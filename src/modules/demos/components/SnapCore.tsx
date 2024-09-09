import React from 'react';
import { Card } from 'src/shared/components';
import { Grid, CardContent, Typography } from '@mui/material';

const SnapCoreData = [
    {
      id: 1,
      title: "Task Management",
      description: "Manage and track daily tasks efficiently.",
    },
    {
      id: 2,
      title: "Project Planning",
      description: "Plan and schedule projects with milestones and timelines.",
    },
    {
      id: 3,
      title: "Time Tracking",
      description: "Track time spent on various tasks and projects.",
    },
    {
      id: 4,
      title: "Team Collaboration",
      description: "Collaborate with team members and share updates in real-time.",
    },
    {
      id: 5,
      title: "Resource Allocation",
      description: "Allocate resources to different projects and manage availability.",
    },
    {
      id: 6,
      title: "Reporting",
      description: "Generate detailed reports on project progress and performance.",
    },
    {
      id: 7,
      title: "Budget Management",
      description: "Monitor project budgets and track expenses.",
    },
    {
      id: 8,
      title: "Notifications",
      description: "Get notified about important updates and deadlines.",
    },
    {
      id: 9,
      title: "Custom Dashboards",
      description: "Create customizable dashboards to visualize project data.",
    }
  ];

const SnapCore = () => {
    return (
        <>
          <Grid container spacing={3} padding={4} justifyContent="center">
            {
              SnapCoreData.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card sx={{ minHeight: '200px' }}> 
                      <CardContent>
                        <Typography variant="h4" component="h4" paddingBottom={2}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })
            }
          </Grid>
        </>
      );
}

export default SnapCore;
