import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ListSubheader, Box, List, Button, ListItem } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/providers/SidebarContext';

interface sidebarmenuprops {
  menuname: string;
  option: sidebarprop[];
}

export interface sidebarprop {
  pathname: string;
  subpathname: string;
  icon: JSX.Element;
  submenuname: string;
}
export const SidebarMenus = ({ menuname, option }: sidebarmenuprops) => {
  const { closeSidebar } = useContext(SidebarContext);
  const { i18n, t } = useTranslation('sidebarmenu');
  return (
    <>
      <Box className="MenuWrapper ">
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              {t(menuname)}
            </ListSubheader>
          }
        >
          <Box className="SubMenuWrapper">
            <List component="div">
              {option.map((item) => {
                return (
                  <ListItem component="div" key={item.subpathname}>
                    <Button
                      disableRipple
                      component={RouterLink}
                      onClick={closeSidebar}
                      to={`/${item.pathname}/${item.subpathname}`}
                      startIcon={item.icon}
                    >
                      {t(item.submenuname)}
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </List>
      </Box>
    </>
  );
};
