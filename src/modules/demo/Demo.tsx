import React from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import myImage from '../../assets/images/demoImages/demo1.png';
import { PageTitleWrapper, PageHeader } from 'src/shared/components/index';
import { makeStyles } from '@mui/styles';

const Demo = () => {
  const classes = useStyles();
  return (
    <>
      <Card className="demo-container">
        <Box className="image-wrapper">
          <img src={myImage} className="demo-image" alt="Demo visual" />
        </Box>
        <Box className="text-overlay-container">
          <Box className="text-overlay">
            <Typography
              variant="h2"
              className={`${classes.p15} title`}
              gutterBottom
            >
              Discover Amazing Features
            </Typography>
            <Box className={classes.descSection}>
              <Typography variant="body2" className={`${classes.description} description`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis expedita incidunt voluptatum suscipit tenetur, cum iste
                animi architecto doloremque quos totam optio atque maiores
                doloribus fuga magni veritatis aliquam ullam libero harum autem
                ipsa accusantium est! Exercitationem expedita quaerat eos velit
                nisi autem ducimus eius. Mollitia in ut exercitationem nam
                commodi sequi architecto aliquam esse ipsa, quia aliquid veniam
                aperiam magni voluptate voluptatibus quaerat cupiditate dolore
                cumque, enim hic! Voluptate iste provident ad exercitationem
                quidem perferendis, at tempore tenetur maxime.
              </Typography>
              <Box className={classes.descBox}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis expedita incidunt voluptatum suscipit te
              </Box>
            </Box>
            <Box className={classes.p15}>
              <Button
                href={'http://demo1.indexnine.com/#/dashboard'}
                target="_blank"
                variant="contained"
                color="primary"
                className="launch-button font-weight-semibold text-medium"
              >
                Discover →
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

const useStyles = makeStyles({
  descSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  description: {
    flex: 2,
    padding: '15px'
  },
  descBox: {
    flex: 1,
    border: '1px solid #1f1f1f',
    padding: '15px',
    borderRadius: '5px',
    background: '#57575742'
  },
  p15: {
    padding: 15
  }
});

export default Demo;
