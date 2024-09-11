import { useTranslation } from 'react-i18next';
import {
  Grid2 as Grid,
  Box,
  CardContent,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled
} from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Button, Card, Typography } from '../../../shared/components/index';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
  background: ${theme.colors.alpha.black[10]};
  color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
  border: ${theme.colors.primary.main} dashed 1px;
  height: 100%;
  color: ${theme.colors.primary.main};
  transition: ${theme.transitions.create(['all'])};
        
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
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

function Wallets({ walletDetails, handleButtonClick }) {
  console.log(walletDetails);
  const { i18n, t } = useTranslation('english');

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">{t('dashboard.wallets.wallets')}</Typography>
        <Button
          size="small"
          variant="outlined"
          btnText={t('dashboard.wallets.add_new_wallet')}
          startIcon={<AddTwoToneIcon fontSize="small" />}
        />
      </Box>
      <Grid container spacing={3}>
        {walletDetails?.map((item) => (
          <Grid size = {{ xs: 12,sm: 6 ,md: 3 }}  key={item.currency}>
            <Card
              sx={{
                px: 1
              }}
            >
              <CardContent>
                <AvatarWrapper>
                  <img alt="BTC" src={item.currencyLogo} />
                </AvatarWrapper>
                <Typography variant="h5" noWrap>
                  {item.currency}
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  {item.unit}
                </Typography>
                <Box
                  sx={{
                    pt: 3
                  }}
                >
                  <Typography variant="h3" gutterBottom noWrap>
                    ${item.usdBalance}
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    {item.currencyBalance} {item.unit}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid size = {{ xs: 12,sm: 6 ,md: 3 }}>
          <Tooltip arrow title="Click to add a new wallet">
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1
                }}
              >
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
    </>
  );
}

export default Wallets;
