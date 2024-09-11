import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ErrorIcon from '@mui/icons-material/Error';

interface StatusChipProps extends ChipProps {
  status: 'Ready' | 'In Progress' | 'Failed' | string; 
  customColor?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'success';
  customIcon?: React.ReactNode;
  size?: 'small' | 'medium';
  sx?: object;
}

const StatusChip: React.FC<StatusChipProps> = ({
  status,
  customColor,
  customIcon,
  size = 'small',
  sx = { position: 'relative', top: 10, right: 12 },
  ...rest
}) => {
  const defaultStatusConfig = {
    Ready: {
      color: 'success' as ChipProps['color'],
      icon: <CheckCircleIcon />,
    },
    'In Progress': {
      color: 'warning' as ChipProps['color'],
      icon: <HourglassEmptyIcon />,
    },
    Failed: {
      color: 'error' as ChipProps['color'],
      icon: <ErrorIcon />,
    },

    default: {
      color: 'default' as ChipProps['color'],
      icon: null,
    },
  };


  const config = defaultStatusConfig[status as keyof typeof defaultStatusConfig] || defaultStatusConfig.default;

  const chipColor = customColor || config.color;
  const chipIcon = customIcon || config.icon;

  return (
    <Chip 
      label={status}
      color={chipColor}
      icon={chipIcon}
      size={size}
      sx={sx}
      {...rest}
    />
  );
};

export default StatusChip;
