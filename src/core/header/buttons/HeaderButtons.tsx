import { Box } from '@mui/material';
import HeaderSearch from './search/HeaderSearch';
import HeaderNotifications from './notifications/HeaderNotifications';

const HeaderButtons = () => {
  return (
    <Box sx={{ mr: 1 }} display="flex">
      <HeaderSearch />
      <HeaderNotifications />
    </Box>
  );
};

export default HeaderButtons;
