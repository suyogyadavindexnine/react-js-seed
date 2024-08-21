import { useRef, useState } from 'react';
import { Avatar, Box, Button, Hidden, Popover } from '@mui/material';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useAuth } from 'src/providers/AuthguardContext';
import { Typography } from '../../../shared/components/index';

const HeaderUserbox = () => {
  const user = {
    name: 'John Smith',
    avatar: '/static/images/avatars/1.jpg',
    jobtitle: 'Project Manager'
  };

  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const { logout } = useAuth();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const userLogout = () => {
    logout();
  };

  return (
    <>
      <Button color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} />
        <Hidden mdDown>
          <Box className="UserBoxText">
            <Typography className="UserBoxLabel" variant="body1">
              {user.name}
            </Typography>
            <Typography className="UserBoxDescription" variant="body2">
              {user.jobtitle}
            </Typography>
          </Box>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </Button>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box className="m-width-Userbox MenuUserBox">
          <Avatar variant="rounded" alt={user.name} src={user.avatar} />
          <Box className="UserBoxText">
            <Typography className="UserBoxLabel" variant="body1">
              {user.name}
            </Typography>
            <Typography className="UserBoxDescription" variant="body2">
              {user.jobtitle}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={userLogout}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderUserbox;
