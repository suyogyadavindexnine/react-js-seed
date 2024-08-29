import { Box, CardHeader, Divider, Grid } from '@mui/material';
import { ArrowForwardTwoTone } from '@mui/icons-material';
import { Typography, Card, Button } from '../../../../shared/components/index';

function Addresses({ deliveryAddresses, shippingAddress, handleFollowBtn }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader
            title="Delivery Addresses"
            subheader={deliveryAddresses.saved + ' saved addresses'}
          />
          <Divider />
          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              Favourite
            </Typography>
            <Box sx={{ minHeight: { xs: 0, md: 242 } }} p={2}>
              <Typography variant="h5">
                {deliveryAddresses.addressLine1}
              </Typography>
              <Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                {deliveryAddresses.addressNumber}
              </Typography>
              <Typography variant="subtitle1">
                {deliveryAddresses.street}
              </Typography>
            </Box>
            <Button
              btnText="Manage"
              fullWidth
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
              onClick={() => handleFollowBtn('clicked!')}
            />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardHeader
            title="Shipping Addresses"
            subheader={shippingAddress.saved + ' saved addresses'}
          />
          <Divider />
          <Box p={2}>
            <Typography variant="caption" fontWeight="bold">
              Favourite
            </Typography>
            <Box sx={{ minHeight: { xs: 0, md: 242 } }} p={2}>
              <Typography variant="h5">
                {shippingAddress.addressLine1}
              </Typography>
              <Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                {shippingAddress.addressNumber}
              </Typography>
              <Typography variant="subtitle1">
                {shippingAddress.street}
              </Typography>
            </Box>
            <Button
              fullWidth
              btnText="Manage"
              variant="outlined"
              endIcon={<ArrowForwardTwoTone />}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Addresses;
