import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import RecentOrders from './components/RecentOrders';
import { PageTitleWrapper } from '../../../shared/components/index';
import { Grid2 as Grid, Container, Box } from '@mui/material';
import Footer from 'src/core/footer';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionData } from './services/transaction.service';

function ApplicationsTransactions() {
  const dispatch = useDispatch<any>();
  const [cryptoOrders, setCryptoOrders] = useState([]);
  const { transactionData, loadingtransactionData } = useSelector(
    (state: any) => state.transactionData
  );

  useEffect(() => {
    dispatch(getTransactionData());
  }, []);

  useEffect(() => {
    const cryptoOrders = transactionData;
    setCryptoOrders(cryptoOrders);
  }, [transactionData]);

  return (<>
    <Helmet>
      <title>Indexnine Transactions - Applications</title>
    </Helmet>
    <PageTitleWrapper>
      <PageHeader />
    </PageTitleWrapper>
    <Box>
      <Grid
        container
        direction="row"
        spacing={3}
        sx={{
          justifyContent: "center",
          alignItems: "stretch"
        }}>
        <Grid size={{ xs: 12 }}>
          <RecentOrders
            cryptoOrders={cryptoOrders}
            handleButtonClick={() => null}
          />
        </Grid>
      </Grid>
    </Box>
    <Footer />
  </>);
}

export default ApplicationsTransactions;
