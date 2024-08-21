import {
  Box,
  CardContent,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/providers/AuthguardContext';
import {
  Button,
  CheckBox,
  TextField,
  Typography,
  Card,
  showWarningMessage,
  Logo
} from '../../shared/components/index';
import Googlelogo from '../../assets/images/Googlelogo.png';
import Microsoftlogo from '../../assets/images/Microsoftlogo.png';
import * as ROUTES from '../../shared/constants/routes';

const Login = () => {
  // Constants
  const navigate = useNavigate();
  const { login } = useAuth();

  // State Values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');

  // Methods
  const submitLoginDetails = () => {
    localStorage.setItem('accessToken', 'tokendasdasda#aasdas131233');
    localStorage.setItem('userRoles', JSON.stringify([]));
    login('tokendasdasda#aasdas131233');
    if (email && password) {
      navigate(ROUTES.DASHBOARD);
      localStorage.setItem('logged', JSON.stringify(true));
    } else {
      showWarningMessage('not valid', {
        theme: 'dark',
        position: 'bottom-right'
      });
    }
    setEmail('');
    setPassword('');
  };

  // HTML
  return (
    <Container className="loginWrapper h-100 flex-basic-center">
      <Container className="containerCenter" maxWidth="md">
        <Card>
          <Grid container spacing={2} className="">
            <Grid
              className="flex-basic-center loginBox"
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <CardContent sx={{ p: 5 }}>
                <Box sx={{ mb: 3 }} className="flex-basic-center">
                  <Logo />
                </Box>
                <CssBaseline />
                <Typography
                  className="loginTextStyle"
                  variant="h5"
                  align="center"
                >
                  Sign In
                </Typography>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<CheckBox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitLoginDetails}
                  btnText=" Sign In"
                ></Button>

                <Box className="flex-basic-space-between">
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>

                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Box>
              </CardContent>
            </Grid>
            <Grid
              className="loginWithGoogle flex-basic-center"
              item
              xs={12}
              md={6}
              sm={6}
              lg={6}
            >
              <Box sx={{ p: 10 }} className="flex-column-center w-100">
                <Box className="w-100">
                  <Button
                    variant="outlined"
                    sx={{ px: 2 }}
                    className="w-100"
                    startIcon={
                      <Box className="flex-basic-center">
                        <img src={Googlelogo} />
                        <Box sx={{ pl: 1 }}> Google</Box>
                      </Box>
                    }
                  ></Button>
                </Box>
                <Box sx={{ my: 2 }}>
                  <Typography variant="h5" align="center">
                    Or
                  </Typography>
                </Box>
                <Box className="w-100">
                  <Button
                    className="w-100"
                    variant="outlined"
                    startIcon={
                      <Box className="flex-basic-center">
                        <img src={Microsoftlogo} />
                        <Box sx={{ pl: 1 }}>Microsoft</Box>
                      </Box>
                    }
                  ></Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Container>
  );
};

export default Login;
