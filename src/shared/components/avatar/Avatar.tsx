import {
  Avatar as MuiAvatar,
  AvatarProps as MuiAvatarProps
} from '@mui/material';

import { AvatarProps } from './services/avatarInterface';
export const Avatar = ({ ...props }: AvatarProps) => {
  return (
    <>
      <MuiAvatar {...props} />
    </>
  );
};
