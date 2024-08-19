import { Container } from '@mui/material';
import logo from '../../../assets/images/indexnine.jpg';

export const Logo = () => {
  return (
    <>
      <Container>
        <img height={'35px'} className="logoIMG" src={logo} alt="Logo" />
      </Container>
    </>
  );
};
