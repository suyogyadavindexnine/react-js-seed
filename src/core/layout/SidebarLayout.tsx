import { FC, ReactNode, useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../side-bar/Sidebar';
import { SidebarContext } from 'src/providers/SidebarContext';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

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
              ml: `? ${theme.sidebar.width}`
            },
            [theme.breakpoints.up('md')]: {
              ml: `${sidebarToggle ? theme.sidebar.width : '0'}`
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
