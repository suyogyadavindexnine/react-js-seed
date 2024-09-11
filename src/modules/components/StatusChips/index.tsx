import React from 'react';
import StatusChip from '../../../shared/components/StatusChips/StatusChips';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';

const ChipExamples: React.FC = () => {
  return (
    <Box p={4}>
      {/* Basic Status Chips */}
      <Box mb={4}>
        <h2>Basic Status Chips</h2>
        <StatusChip status="Ready" />
        <StatusChip status="In Progress" />
        <StatusChip status="Failed" />
      </Box>

      {/* Custom Color Chips */}
      <Box mb={4}>
        <h2>Custom Color Chips</h2>
        <StatusChip status="Ready" customColor="success" />
        <StatusChip status="In Progress" customColor="warning" />
        <StatusChip status="Failed" customColor="error" />
      </Box>

      {/* Custom Icon Chips */}
      <Box mb={4}>
        <h2>Custom Icon Chips</h2>
        <StatusChip status="Ready" customIcon={<CheckCircleIcon />} />
        <StatusChip status="In Progress" customIcon={<HourglassEmptyIcon />} />
        <StatusChip status="Failed" customIcon={<ErrorIcon />} />
      </Box>

      {/* Custom Size Chips */}
      <Box mb={4}>
        <h2>Custom Size Chips</h2>
        <StatusChip status="Ready" size="small" />
        <StatusChip status="In Progress" size="medium" />
        <StatusChip status="Failed" size="small" />
      </Box>

      {/* Custom Position Chips */}
      <Box mb={4}>
        <h2>Custom Position Chips</h2>
        <StatusChip 
          status="Ready" 
          sx={{ position: 'relative', top: 'auto', right: 'auto', margin: '10px' }} 
        />
        <StatusChip 
          status="In Progress" 
          sx={{ position: 'relative', top: 'auto', right: 'auto', margin: '10px' }} 
        />
        <StatusChip 
          status="Failed" 
          sx={{ position: 'relative', top: 'auto', right: 'auto', margin: '10px' }} 
        />
      </Box>

      {/* Custom Status with Fallback */}
      <Box mb={4}>
        <h2>Custom Status with Fallback</h2>
        <StatusChip status="Custom Status" customColor="default" />
        <StatusChip status="Another Custom Status" customColor="default" />
      </Box>
    </Box>
  );
};

export default ChipExamples;
