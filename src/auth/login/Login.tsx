import {
  Box,
  Card,
  Container,
  Divider,
  FormControl,
  Grid2 as Grid
} from '@mui/material';
// import Grid from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Helmet } from 'react-helmet-async';
import logo from 'src/assets/images/indexnine-logo.svg';
import IllustrationLogin from 'src/assets/images/IllustrationLogin.svg';
import {
  AUTH_CONFIG,
} from 'src/shared/constants/constants';
import { styled } from '@mui/material/styles';
import * as ROUTES from '../../shared/constants/routes';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/providers/AuthguardContext';
import LoginByUserNamePassword from './LoginByUserNamePassword';
import OTPWithLogin from '../OTPWithLogin';
import { loginData } from './models/login';
import { userVerifyWithOTP } from './apis/login';
import {
  showErrorMessage,
  showSuccessMessage
} from 'src/shared/components/toaster/Toast';



const Login = () => {
  // Constants
  const navigate = useNavigate();
  const { t } = useTranslation(['english']);


  //state variables
  const [loginType, setLoginType] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOnEmailScreen, setIsOnEmailScreen] = useState<boolean>(true);

  //methods
  const MainContent = styled(Box)(
    ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
  );

  useEffect(() => {
    if (window.location.pathname === ROUTES.ADMIN_LOGIN) {
      setLoginType(AUTH_CONFIG.LOGIN_TYPE_ADMIN);
    } else {
      setLoginType(AUTH_CONFIG.LOGIN_TYPE_USER);
    }
  }, [window.location.pathname]);

  const checkLastLoginAndRedirect = (
    lastActive: string,
    route: string
  ): void => {
    if (lastActive) {
      navigate(`${route}`);
    } else {
      navigate(`${ROUTES.DASHBOARD}`);
    }
  };

  // Google Login SSO
  const responseonSuccessGoogle = (response: any) => {
    if (response) {

    }
  };

  const responseonFailureGoogle = (response: any) => {
  };

  //isOnOtpScreen
  const isOnOtpScreen = (val) => {
    getOtpOnEmail(val);
  };

  const getOtpOnEmail = async (value) => {
    try {
      const payload: loginData = {
        loginType: loginType,
        email: value.email
      };

      const respData = await userVerifyWithOTP(payload);
      if (respData?.message && respData?.status) {
        showSuccessMessage(respData?.message, {
          position: 'top-right'
        });
        setIsOnEmailScreen(false);
      }
    } catch (error) {
      showErrorMessage(error.response.data.message, {
        position: 'top-right'
      });
    }
  };

  // HTML
  return (
    <>
      <Helmet>
        <title> {t('login.title')}</title>
      </Helmet>
      <MainContent className="loginWrapper">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid size={{xs:12, lg:6}} className="flex-basic-center">
              <Box>
                <img
                  className="img-fluid illustrationLoginImage"
                  alt="IllustrationLogin"
                  src={IllustrationLogin}
                ></img>
              </Box>
            </Grid>
            <Grid size={{xs:12,lg:6}}>
              <Card sx={{ px: 5, py: 4 }}>
                <Box>
                  <Box sx={{ mb: 4 }}>
                    <img className="tekcheckLogo" src={logo} />
                  </Box>
                  {isOnEmailScreen ? (
                    <>
                      <Box>
                        <Box
                          className="text-h4 welcomeText font-weight-semibold"
                          sx={{ mb: 4 }}
                        >
                          {t('login.welcomeText')}
                        </Box>
                      </Box>
                      <LoginByUserNamePassword
                        getOtpOnEmail={isOnOtpScreen}
                        setIsOnEmailScreen={setIsOnEmailScreen}
                        loginType={loginType}
                      />
                      <Divider sx={{ my: 5 }}>{t('login.orText')}</Divider>
                      <Box className="w-100">
                        <FormControl
                          className="w-100"
                          variant="outlined"
                          fullWidth
                        >
                          <Box
                            textAlign="center"
                            display={'flex'}
                            justifyContent={'center'}
                            className="w-100"
                          >
                            <GoogleOAuthProvider
                              clientId={AUTH_CONFIG.GOOGLE_CLIENT_ID}
                            >
                              <GoogleLogin
                                onSuccess={(response) => {
                                  responseonSuccessGoogle(response);
                                }}
                                onError={() => {
                                  responseonFailureGoogle(null);
                                }}
                                useOneTap={false}
                              />
                            </GoogleOAuthProvider>
                          </Box>
                        </FormControl>
                      </Box>
                    </>
                  ) : (
                    <>
                      <OTPWithLogin resendOtp={isOnOtpScreen} />
                    </>
                  )}
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MainContent>
    </>
  );
};

export default Login;
