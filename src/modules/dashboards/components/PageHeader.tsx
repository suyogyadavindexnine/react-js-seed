import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { User } from '../models/DashboardDetails';

const PageHeader = ({ user }: User) => {
  const theme = useTheme();
  const { i18n, t } = useTranslation('english');

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user?.name}
          src={user?.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {t('dashboard.header.welcome')}, {user?.name}!
        </Typography>
        <Typography variant="subtitle2">
          {t('dashboard.header.message')}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
