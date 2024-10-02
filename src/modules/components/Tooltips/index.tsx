import {
  Container,
  Grid2 as Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Footer from 'src/core/footer';
import { Commonstructure } from '../../../shared/components/index';

function Tooltips() {
  return (
    <>
      <Commonstructure
        titlename="Tooltips - Components"
        heading="Tooltips"
        subHeading="Tooltips Component with different types of properties"
        documentlink="https://mui.com/material-ui/react-button/"
      />

      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid size={{ xs: 12 }}>
            <Card>
              <CardHeader title="Positioning" />
              <Divider />
              <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: 500 }}>
                  <Grid container justifyContent="center">
                    <Grid >
                      <Tooltip arrow title="Add" placement="top-start">
                        <Button>top-start</Button>
                      </Tooltip>
                      <Tooltip arrow title="Add" placement="top">
                        <Button>top</Button>
                      </Tooltip>
                      <Tooltip arrow title="Add" placement="top-end">
                        <Button>top-end</Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid size={{ xs:6 }} >
                      <Tooltip arrow title="Add" placement="left-start">
                        <Button>left-start</Button>
                      </Tooltip>
                      <br />
                      <Tooltip arrow title="Add" placement="left">
                        <Button>left</Button>
                      </Tooltip>
                      <br />
                      <Tooltip arrow title="Add" placement="left-end">
                        <Button>left-end</Button>
                      </Tooltip>
                    </Grid>
                    <Grid
                      size={{ xs:6 }}
                      container
                      alignItems="flex-end"
                      direction="column"
                    >
                      <Grid>
                        <Tooltip arrow title="Add" placement="right-start">
                          <Button>right-start</Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip arrow title="Add" placement="right">
                          <Button>right</Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip arrow title="Add" placement="right-end">
                          <Button>right-end</Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Grid>
                      <Tooltip arrow title="Add" placement="bottom-start">
                        <Button>bottom-start</Button>
                      </Tooltip>
                      <Tooltip arrow title="Add" placement="bottom">
                        <Button>bottom</Button>
                      </Tooltip>
                      <Tooltip arrow title="Add" placement="bottom-end">
                        <Button>bottom-end</Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Tooltips;
