import { useContext } from 'react';
import {
  Box,
  Stack,
  Divider,
  IconButton,
  Tooltip,
  useTheme
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/providers/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import HeaderButtons from './buttons/HeaderButtons';
import HeaderUserbox from './user-box/HeaderUserbox';
import LangSelect from './buttons/select-language/LangSelect';

const Header = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  return (
    <Box
      className={
        theme.palette.mode === 'dark'
          ? 'HeaderWrapperDarkTheme HeaderWrapper'
          : 'HeaderWrapperLightTheme HeaderWrapper'
      }
      display="flex"
      alignItems="center"
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      ></Stack>
      <Box display="flex" alignItems="center">
        <LangSelect />
        <HeaderButtons />
        <HeaderUserbox />
        <Box
          component="span"
          sx={{
            ml: 2
          }}
          className="userbox"
        >
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
