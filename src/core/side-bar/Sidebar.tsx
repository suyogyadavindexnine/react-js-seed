import { useContext } from 'react';
import { Scrollbar, Logo } from 'src/shared/components/index';
import { SidebarContext } from 'src/providers/SidebarContext';
import { Box, Drawer, Divider, useTheme, useMediaQuery } from '@mui/material';

import SidebarMenu from './sidebar-menu/SidebarMenu';

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const closeSidebar = () => toggleSidebar();
  const classes = isLg ? 'large SidebarWrapper ' : 'small SidebarWrapper';
  const wrapperclass =
    theme.palette.mode === 'dark'
      ? 'sidebarwrapperDark'
      : 'sidebarwrapperLight';
  const finalclass = `${classes} ${wrapperclass}`;
  return (
    <>
      <Box className={finalclass}>
        <Scrollbar>
          <Box mt={3}>
            <Box mx={2} className="w-20">
              <Logo />
            </Box>
          </Box>
          <Divider
            className="sidebarDividerbg"
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2)
            }}
          />
          <SidebarMenu />
        </Scrollbar>
      </Box>
      <Drawer
        className="sidebarDrawer"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <Box
          className={
            theme.palette.mode === 'dark'
              ? 'SidebarWrapperDarkTheme SidebarWrapper'
              : 'SidebarWrapperlightTheme SidebarWrapper'
          }
        >
          <Scrollbar>
            <Box mt={3}>
              <Box mx={2} className="w-20">
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2)
              }}
              className="sidebarDividerbg"
            />
            <SidebarMenu />
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
