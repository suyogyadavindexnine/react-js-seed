import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import RecentOrders from './components/RecentOrders';
import { PageTitleWrapper } from '../../../shared/components/index';
import { Grid, Container } from '@mui/material';
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
    let cryptoOrders = transactionData;
    setCryptoOrders(cryptoOrders);
  }, [transactionData]);

  return (
    <>
      <Helmet>
        <title>Indexnine Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders
              cryptoOrders={cryptoOrders}
              handleButtonClick={() => null}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsTransactions;
