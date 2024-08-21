import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../side-bar/Sidebar';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        className={
          theme.palette.mode === 'dark'
            ? 'layoutbox MuiPageTitlewrapperDark '
            : 'layoutbox MuiPageTitlewrapperLight '
        }
      >
        <Header />
        <Sidebar />
        <Box
          className="layout"
          sx={{
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`
            }
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
