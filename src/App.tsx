import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import router from './router/router';
import SettingsIcon from '@mui/icons-material/Settings';
import './scss/commonStyle.scss';
import {
  Box,
  CssBaseline,
  Divider,
  Fab,
  FormControl,
  IconButton,
  ListItemText,
  Menu,
  ThemeProvider
} from '@mui/material';
import { StylesProvider } from '@mui/styles';
import { Provider } from 'react-redux';
import { themeCreator } from '../src/core/theme/base';
import { store } from '../src/store/configure-store';
import { AuthProvider } from './providers/AuthguardContext';
import { Select } from './shared/components/index';
import ChatBotBtnIcon from './assets/icons/common-icons/chat-bot-btn-icon.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBotWidget from './modules/chat-bot/ChatBotWidget';

const App = () => {
  //constants
  const content = useRoutes(router);
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';
  const themeOptions = [
    {
      id: 'PureLightTheme',
      name: 'PureLightTheme'
    },

    {
      id: 'NebulaFighterTheme',
      name: 'NebulaFighterTheme'
    }
  ];

  //State
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openChatBot, setOpenChatBot] = useState(false);

  //Methods
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTheme = event.target.value;
    localStorage.setItem('appTheme', currentTheme);
    _setThemeName(currentTheme);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChatBotBtnClick = () => {
    setOpenChatBot(!openChatBot);
  };

  //HTML elements constants
  const configsButton = (
    <Box className="configsButton">
      <IconButton onClick={handleClick} sx={{ color: 'black' }}>
        <SettingsIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="setting-menu"
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <ListItemText sx={{ padding: '15px' }}>Global Settings</ListItemText>
        <Divider />
        {/* This code is commented beacuse in future if we want to change the theme on switch button */}
        {/* <MenuItem>
          Light / Dark
          <ListItemIcon>
            <Switch checked={themeChange} onChange={handleSwitchChange} />
          </ListItemIcon>
        </MenuItem> */}
        <FormControl sx={{ m: 2, minWidth: 120 }} size="small">
          <Select
            options={themeOptions}
            itemText="id"
            itemValue="name"
            onChange={(e) => handleSwitchChange(e)}
            label="select theme"
            value={themeName}
          />
        </FormControl>
      </Menu>
    </Box>
  );

  const chatBotBtn = (
    <Box className="chatBotButton">
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => handleChatBotBtnClick()}
      >
        <img src={ChatBotBtnIcon} height={40} width={40} alt="ChatBotBtnIcon" />
      </Fab>

      {openChatBot && (
        <Box className="chat-bot-container">
          <Box className="chat-bot-header flex-basic-space-between">
            <Box className="flex-basic-start">
              <Box className="chat-bot-icon-container flex-basic-center">
                <img
                  src={ChatBotBtnIcon}
                  height={33}
                  width={33}
                  alt="ChatBotBtnIcon"
                />
              </Box>
              <Box sx={{ ml: 2 }} className="chat-bot-heading">
                ChatBot
              </Box>
            </Box>
            <Box className="chat-bot-close-btn-container flex-basic-center">
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
          <Box className="chat-bot-body-container">
            <ChatBotWidget isBot={true} />
          </Box>
        </Box>
      )}
    </Box>
  );

  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline />
                {content}
                {configsButton}
                {chatBotBtn}
              </LocalizationProvider>
            </ThemeProvider>
          </StylesProvider>
        </AuthProvider>
      </Provider>
    </>
  );
};
export default App;
