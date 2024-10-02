import { Card, CardHeader, Grid2 as Grid, Divider, Container, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export const Cardstructure = (props) => {
  return (
    <>
      <Box>
        <Grid container direction="row" justifyContent="space-between">
        <Grid size={{ xs: 12 }}>
            <Card sx={{ m: 1 }}>
              <CardHeader title={props.cardheader} />
              <Divider />
              <CardContent>{props.component}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cardstructure;
