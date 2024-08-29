import { Typography, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Button } from '../../../../shared/components/index';

function PageHeader() {
  const user = {
    name: 'John Smith',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          John Smith, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
        <Button
          btnText="  Create transaction"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
