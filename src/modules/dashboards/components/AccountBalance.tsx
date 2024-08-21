import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import {
  Text,
  Button,
  Card,
  Typography
} from '../../../shared/components/index';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
  background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
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

const AccountBalance = ({ accountDetails, handleButtonClick }) => {
  const theme = useTheme();
  const { i18n, t } = useTranslation(['english']);

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%'
        }
      }
    },
    colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]]
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.white[70],
          opacity: 0.5
        }
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.white[50],
        opacity: 0.5
      }
    },
    fill: {
      opacity: 1
    },
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100]
      },
      show: false
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    }
  };

  // const chartSeries = [20, 10, 40, 30];

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3
              }}
              variant="h4"
            >
              {t('dashboard.account_balance.account_balance')}
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                ${accountDetails?.acBalance}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                {accountDetails?.currencyValue} {accountDetails?.currencyUnit}
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">
                    + ${accountDetails?.currentValue}
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    {t('dashboard.account_balance.this_month')}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button
                  btnText={t('dashboard.account_balance.send')}
                  fullWidth
                  variant="outlined"
                ></Button>
              </Grid>
              <Grid sm item>
                <Button
                  btnText={t('dashboard.account_balance.receive')}
                  fullWidth
                  variant="contained"
                ></Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: 'relative'
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' }
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box py={4} pr={4} flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {accountDetails?.chartSeries ? (
                  <Chart
                    height={250}
                    options={chartOptions}
                    series={accountDetails?.chartSeries || []}
                    type="donut"
                  />
                ) : null}
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List
                  disablePadding
                  sx={{
                    width: '100%'
                  }}
                >
                  {accountDetails?.currency.map((item) => (
                    <ListItem disableGutters key={item.unit}>
                      <ListItemAvatarWrapper>
                        <img alt={item.unit} src={item.currencyLogo} />
                      </ListItemAvatarWrapper>
                      <ListItemText
                        primary={item.unit}
                        primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                        secondary={item.currency}
                        secondaryTypographyProps={{
                          variant: 'subtitle2',
                          noWrap: true
                        }}
                      />
                      <Box>
                        <Typography align="right" variant="h4" noWrap>
                          {item.marketShare}%
                        </Typography>
                        <Text color={item.valueRate > 0 ? 'success' : 'error'}>
                          {item.valueRate}%
                        </Text>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AccountBalance;
