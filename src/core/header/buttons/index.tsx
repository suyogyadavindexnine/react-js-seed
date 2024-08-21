import { Box } from '@mui/material';
import HeaderSearch from './search';
import HeaderNotifications from './notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }} display="flex">
      <HeaderSearch />
        <HeaderNotifications />
    </Box>
  );
}

export default HeaderButtons;
