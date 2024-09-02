import React from "react";
import { Box, Typography, Card, Button, useMediaQuery, useTheme } from "@mui/material";
import myImage from "../../../assets/images/demoImages/demo1.png";
import { PageTitleWrapper, PageHeader } from "src/shared/components/index";
import { makeStyles } from "@mui/styles";

interface Demo1Props {
  image: any;
  heading: string;
  demoDesc: any;
  idxRole?: any;
  demoLink: string;
}

const DemoComponent = ({
  image,
  heading,
  demoDesc,
  idxRole,
  demoLink,
}: Demo1Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Card className="demo-container">
        <Box className="image-wrapper">
          <img src={image} className="demo-image" alt="Demo visual" />
        </Box>
        <Box className={!isLg ? 'text-overlay-container overflow-y' : 'text-overlay-container'}>
          <Box className="text-overlay">
            <Typography
              variant="h2"
              className={`${classes.p15} title`}
              gutterBottom
            >
              {heading}
            </Typography>
            <Box className={isLg ? classes.descSection : 'overflow-y'}>
              <Typography
                variant="body2"
                className={`${classes.description} description`}
              >
                {demoDesc}
              </Typography>
              {idxRole && <Box className={classes.descBox}>{idxRole}</Box>}
            </Box>
            <Box className={classes.p15}>
              <Button
                href={demoLink}
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
    display: "flex",
    flexDirection: "row",
  },
  description: {
    flex: 2,
    padding: "15px",
  },
  descBox: {
    flex: 1,
    border: "1px solid #000",
    padding: "15px",
    borderRadius: "5px",
    background: "#000000ad",
  },
  p15: {
    padding: 15,
  },
});

export default DemoComponent;
