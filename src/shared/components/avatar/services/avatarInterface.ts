import React from 'react';
import { SvgIconProps, AvatarProps as MuiAvatarProps } from '@mui/material';

export interface AvatarProps extends MuiAvatarProps {
  size?: string;
  icon?: React.ReactElement<SvgIconProps>;
  src?: string;
}
