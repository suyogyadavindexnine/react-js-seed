import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import {
  Commonstructure,
  Cardstructure
} from '../../../shared/components/index';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function Badges() {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <>
      <Commonstructure
        titlename="Badges - Components"
        heading="Badges"
        subHeading="Badge generates a small badge to the top-right of its child(ren)"
        documentlink="https://material-ui.com/components/badges/"
      />

      <Cardstructure
        cardheader="Shapes"
        component={
          <>
            <Stack spacing={3} direction="row">
              <Badge color="secondary" badgeContent=" ">
                {rectangle}
              </Badge>
              <Badge color="secondary" badgeContent=" " variant="dot">
                {rectangle}
              </Badge>
              <Badge color="secondary" overlap="circular" badgeContent=" ">
                {circle}
              </Badge>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                variant="dot"
              >
                {circle}
              </Badge>
            </Stack>
          </>
        }
      />
      <Cardstructure
        cardheader="Badges Visibility"
        component={
          <>
            <Box
              sx={{
                color: 'action.active',
                display: 'flex',
                flexDirection: 'column',
                '& > *': {
                  marginBottom: 2
                },
                '& .MuiBadge-root': {
                  marginRight: 4
                }
              }}
            >
              <div>
                <Badge color="secondary" badgeContent={count}>
                  <MailIcon />
                </Badge>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => {
                      setCount(Math.max(count - 1, 0));
                    }}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    aria-label="increase"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
              <div>
                <Badge color="secondary" variant="dot" invisible={invisible}>
                  <MailIcon />
                </Badge>
                <FormControlLabel
                  sx={{ color: 'text.primary' }}
                  control={
                    <Switch
                      checked={!invisible}
                      onChange={handleBadgeVisibility}
                    />
                  }
                  label="Show Badge"
                />
              </div>
            </Box>
          </>
        }
      />
      <Cardstructure
        cardheader="Colors"
        component={
          <>
            <Stack spacing={2} direction="row">
              <Badge badgeContent={4} color="secondary">
                <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={4} color="success">
                <MailIcon color="action" />
              </Badge>
            </Stack>
          </>
        }
      />
    </>
  );
}

export default Badges;
