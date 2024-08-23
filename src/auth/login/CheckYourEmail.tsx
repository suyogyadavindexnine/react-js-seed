import {
  Box,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Card } from 'src/shared/components/index';
import BackgroundImage from 'src/assets/images/pageBg.png';
import Group from 'src/assets/images/group.svg';
import { useTranslation } from 'react-i18next';

const CheckEmail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation('checkEmail');

  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Container className="loginWrapper h-100 flex-basic-center">
        <Container className="containerCenter" maxWidth="md">
          <Card
            className="card-size"
            sx={{
              bgcolor: theme.colors.alpha.white
            }}
          >
            <Grid container spacing={2}>
              <Grid
                className="flex-basic-center grid-size"
                item
                xs={12}
                md={6}
                sm={6}
                lg={6}
              >
                <Box>
                  <img src={Group} alt="Person" className="image-size" />
                </Box>
              </Grid>

              <Grid className="" item xs={12} sm={6} md={6} lg={6}>
                <CardContent sx={{ p: 5 }}>
                  <CssBaseline />

                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography
                      variant="h2"
                      color={theme.colors.primary.main}
                      sx={{ mb: 1 }}
                      align="left"
                      title="heading"
                    >
                      {t('Check your email', { ns: 'checkEmail' })}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{ mt: 8 }}
                      align="left"
                      title="subHeading"
                    >
                      {t('Email has been sent to your email *****@**.com', {
                        ns: 'checkEmail'
                      })}
                    </Typography>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => navigate('/')}
                    btnText={t('Back to Login', { ns: 'checkEmail' })}
                    sx={{ bgcolor: theme.colors.primary, mt: 12 }}
                  ></Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default CheckEmail;
