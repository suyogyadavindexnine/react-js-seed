import { useContext } from 'react';
import { Scrollbar, Logo } from '../../shared/components/index';
import { SidebarContext } from 'src/providers/SidebarContext';
import { Box, Drawer, Divider, useTheme, useMediaQuery } from '@mui/material';
import SidebarMenu from './sidebar-menu/SidebarMenu';
import Tooltip from '@mui/material/Tooltip';
import { INDEXNINE_SOCIAL_MEDIA } from '../../shared/constants/constants';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation(['english']);

  return (
    <>
      <Box className="main">
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
          <Box className="social-section">
            <Box sx={{ p: 1 }} className="flex-basic-center">
              {INDEXNINE_SOCIAL_MEDIA.map((item, index) => (
                <Box sx={{ p: 1 }} key={index}>
                  <Tooltip
                    title={`${item.followers}  ${t('sidebar.followers')}`}
                    arrow
                  >
                    <img
                      src={item.path}
                      onClick={() => window.open(item.url, '_blank')}
                    />
                  </Tooltip>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
