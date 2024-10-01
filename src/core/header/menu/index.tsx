import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import * as ROUTES from 'src/shared/constants/routes';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const { pathname } = useLocation();
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState('asdads');

  useEffect(() => {
    updatePageTitle(pathname);
  }, [pathname]);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const updatePageTitle = (pathName: string) => {
    switch (pathName) {
      case ROUTES.DASHBOARD:
        setTitle('Dashboard');
        break;
      case ROUTES.EMPLOYEE_TABLE:
        setTitle('Employee');
        break;
      default:
        setTitle('');
        break;
    }
  };

  return (
    <>
      {/* <PageHeader heading={title} /> */}
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            component={NavLink}
            to="/components/buttons"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Buttons"
            />
          </ListItemButton>
          <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            component={NavLink}
            to="/components/forms"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Forms"
            />
          </ListItemButton>
          <ListItemButton
            classes={{ root: 'MuiListItem-indicators' }}
            ref={ref}
            onClick={handleOpen}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  Others
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItemButton>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/buttons">
          Buttons
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/checkbox">
          Checkbox
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/circularprogress"
        >
          Circularprogress
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/datepicker"
        >
          Datepicker
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/filebutton"
        >
          Filebutton
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/radiobutton"
        >
          Radiobutton
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/textfield">
          Textfield
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/select">
          Select
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/slider">
          Slider
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/timepicker"
        >
          Timepicker
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/typography"
        >
          Typography
        </MenuItem>
        <MenuItem
          sx={{ px: 3 }}
          component={NavLink}
          to="/components/currencyfield"
        >
          Currency
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/toaster">
          Toaster
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
