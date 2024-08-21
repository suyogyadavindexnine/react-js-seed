import { Box, Avatar, Grid, alpha, useTheme, styled } from '@mui/material';
import {
  Label,
  Text,
  Typography,
  Card
} from '../../../shared/components/index';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
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

function WatchListColumn({ Watchlistlabel, watchListDetails }) {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      zoom: {
        enabled: false
      }
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#5569ff'],
    dataLabels: {
      enabled: false
    },
    theme: {
      mode: 'light'
    },
    stroke: {
      show: true,
      colors: ['#5569ff'],
      width: 3
    },
    legend: {
      show: false
    },
    labels: Watchlistlabel && Watchlistlabel,
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false,
      tickAmount: 5
    },
    tooltip: {
      x: {
        show: true
      },
      y: {
        title: {
          formatter: function () {
            return 'Price: $';
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  const chart1Data = [
    {
      name: 'Bitcoin Price',
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  ];
  const chart2Data = [
    {
      name: 'Ethereum Price',
      data: [13, 16, 14, 16, 8, 11, 20]
    }
  ];
  const chart3Data = [
    {
      name: 'Cardano Price',
      data: [51.85, 41.77, 22.09, 42.0, 71.9, 51.84, 31.84]
    }
  ];

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      {watchListDetails?.map((item) => (
        <Grid item md={4} xs={12} key={item.unit}>
          <Card
            sx={{
              overflow: 'visible'
            }}
          >
            <Box
              sx={{
                p: 3
              }}
            >
              <Box display="flex" alignItems="center">
                <AvatarWrapper>
                  <img alt="BTC" src={item.currencyLogo} />
                </AvatarWrapper>
                <Box>
                  <Typography variant="h4" noWrap>
                    {item.currency}
                  </Typography>
                  <Typography variant="subtitle1" noWrap>
                    {item.unit}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  pt: 3
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    pr: 1,
                    mb: 1
                  }}
                >
                  ${item.toUsd}
                </Typography>
                <Text color={item.valueRate > 0 ? 'success' : 'error'}>
                  <b>{item.valueRate}%</b>
                </Text>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                <Label color="success">+${item.dailyRate}</Label>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    pl: 1
                  }}
                >
                  last 24h
                </Typography>
              </Box>
            </Box>
            <Chart
              options={chartOptions}
              series={item?.chartData}
              type="area"
              height={200}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default WatchListColumn;
