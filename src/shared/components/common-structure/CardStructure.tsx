import { Card, CardHeader, Grid, Divider, Container, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export const Cardstructure = (props) => {
  return (
    <>
      <Box>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12}>
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
