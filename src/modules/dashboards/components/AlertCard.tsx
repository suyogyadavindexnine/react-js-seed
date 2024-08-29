import React from 'react';
import { Box, CardHeader } from '@mui/material';

import { Card, Typography } from '../../../shared/components/index';
import { AlertCardProps, AlertDataType } from '../models/DashboardDetails';

const AlertCard = ({ alertData }: AlertCardProps) => {
  return (
    <>
      {alertData?.map((item: AlertDataType) => (
        <Card key={item?.id}>
          <CardHeader title={item?.title} />
          <Box sx={{ px: 2, pb: 2 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2">{item?.description}</Typography>
            </Box>
            <Box className="flex-basic-start">
              <Box>{item?.icon}</Box>
              <Box>{item?.time}</Box>
            </Box>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default AlertCard;
