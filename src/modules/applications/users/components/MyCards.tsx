import { ChangeEvent, useState } from 'react';
import {
  Box,
  Grid,
  FormControlLabel,
  CardHeader,
  Divider,
  lighten,
  CardActionArea,
  CardContent,
  Tooltip,
  IconButton,
  Avatar,
  styled
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  Radio,
  Typography,
  Card,
  Button
} from '../../../../shared/components/index';

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardLogo = styled('img')(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`
);

const IconButtonError = styled(IconButton)(
  ({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${lighten(theme.colors.error.lighter, 0.4)};
     }
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);

function MyCards({ cards, handleFollowBtn }) {
  const data = {
    savedCards: 7
  };

  const [selectedValue, setSelectedValue] = useState('Visa');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = () => {};

  return (
    <Card>
      <CardHeader subheader={data.savedCards + ' saved cards'} title="Cards" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          {cards?.map((card) => (
            <Grid item xs={12} sm={6} key={card.alt}>
              <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
                <Box display="flex" alignItems="center">
                  <CardLogo src={card.logo} alt={card.alt} />
                  <Box>
                    <Typography variant="h3" fontWeight="normal">
                      •••• {card.lastDigits}
                    </Typography>
                    <Typography variant="subtitle2" display="inline">
                      Expires:
                      <Typography color="text.primary" display="inline">
                        {card.expires}
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  pt={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    value={card.alt}
                    control={
                      <Radio
                        checked={selectedValue === card.alt}
                        onChange={handleChange}
                        value={card.alt}
                        color="primary"
                        name="primary-card"
                      />
                    }
                    label="Primary"
                  />
                  <Tooltip arrow title="Remove this card">
                    <IconButtonError
                      onClick={() => handleFollowBtn('clicked!')}
                    >
                      <DeleteTwoToneIcon fontSize="small" />
                    </IconButtonError>
                  </Tooltip>
                </Box>
              </CardCc>
            </Grid>
          ))}
          <Grid item xs={12} sm={6}>
            <Tooltip arrow title="Click to add a new card">
              <CardAddAction>
                <CardActionArea sx={{ px: 1 }}>
                  <CardContent>
                    <AvatarAddWrapper>
                      <Button startIcon={<AddTwoToneIcon fontSize="large" />} />
                    </AvatarAddWrapper>
                  </CardContent>
                </CardActionArea>
              </CardAddAction>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
