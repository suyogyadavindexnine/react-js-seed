import { Meta, StoryObj } from "@storybook/react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Card } from "./Card";
import "./card.stories.scss";

import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export default {
  title: "Seed/Card",
  component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  args: {
    raised: true,
    children: (
      <>
        <Card sx={{ width: 345 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Pixel (px) and rem are both units of measurement used in CSS.
              Pixel is an absolute unit of measurement while rem is a relative
              unit of measurement.
            </Typography>
            <Typography variant="h5" component="div">
              {"measurement while rem is a relative"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </>
    ),
  },
};

export const MediaCard: Story = {
  args: {
    raised: true,
    children: (
      <>
        <Card sx={{ width: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </>
    ),
  },
};
export const CardWithAction: Story = {
  args: {
    raised: true,
    children: (
      <>
        <Card sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 140 }}
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </>
    ),
  },
};

export const CardHorizontal: Story = {
  args: {
    raised: true,
    children: (
      <>
        <Card sx={{ display: "flex", width: 337 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {/* {true ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
                <SkipNextIcon />
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                <SkipPreviousIcon />
                {/* {true ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://mui.com//static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </>
    ),
  },
};
