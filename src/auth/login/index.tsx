import { useState } from 'react';
import { useAuth } from 'src/auth/auth-guard';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import Googlelogo from '../../assets/images/Googlelogo.jpg';
import Microsoftlogo from '../../assets/images/Microsoftlogo.jpg';
const LoginWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;

`
);

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const submitLoginDetails = () => {
    localStorage.setItem('accessToken', 'tokendasdasda#aasdas131233');
    login('tokendasdasda#aasdas131233');
    if (email && password) {
      const data: any = { email, password };
      localStorage.setItem('userDeatils', data);
      navigate('dashboards');
      localStorage.setItem('logged', JSON.stringify(true));
    } else {
      alert('not valid');
    }
    setEmail('');
    setPassword('');
  };
  return (
    <LoginWrapper>
      <Container maxWidth="md" sx={{ marginTop: '80px' }}>
        <Card>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            direction="row"
            alignItems="center"
            style={{ minHeight: '80vh' }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4} //mr={8}
            >
              <CardContent>
                <Box
                  sx={{
                    padding: '10px',
                    alignContent: 'center'
                  }}
                >
                  <img
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      padding: 0,
                      margin: 0
                    }}
                    src="https://indexnine.com/wp-content/uploads/2019/06/indexnine.com_.gif"
                  />
                </Box>
                <CssBaseline />
                <Typography component="h1" variant="h5" align="center">
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
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submitLoginDetails}
                >
                  Sign In
                </Button>

                <Link href="#" variant="body2">
                  Forgot password?
                </Link>

                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </CardContent>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              item
              xs={12}
              md={4}
              sm={4}
              lg={4}
              textAlign="center"
              // ml={8}
              sx={{ '& button': { m: 1 } }}
            >
              <CardContent>
                <Button
                  variant="outlined"
                  style={{
                    maxWidth: '95px',
                    maxHeight: '40px',
                    minWidth: '95px',
                    minHeight: '40px'
                  }}
                >
                  {/* <GoogleIcon /> */}
                  <img
                    height={25}
                    width={25}
                    style={{ paddingRight: 5 }}
                    src={Googlelogo}
                  />
                  Google
                </Button>
                <br />
                <Typography component="h1" variant="h5" align="center">
                  Or
                </Typography>
                <Button
                  variant="outlined"
                  style={{
                    maxWidth: '95px',
                    maxHeight: '40px',
                    minWidth: '95px',
                    minHeight: '40px'
                  }}
                >
                  <img
                    height={25}
                    width={25}
                    style={{ paddingRight: 5 }}
                    src={Microsoftlogo}
                  />
                  Microsoft
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </LoginWrapper>
  );
}

export default Login;
