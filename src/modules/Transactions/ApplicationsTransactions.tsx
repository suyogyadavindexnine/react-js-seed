import { Helmet } from 'react-helmet-async';
import RecentOrders from './components/RecentOrders';
import { PageTitleWrapper, PageHeader } from '../../shared/components/index';
import { Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionData } from './services/transaction.service';
import { AppDispatch, RootState } from 'src/store/configure-store';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const ApplicationsTransactions = () => {
  //constants
  const dispatch = useDispatch<AppDispatch>();
  const [cryptoOrders, setCryptoOrders] = useState([]);
  const { transactionData } = useSelector(
    (state: RootState) => state.transactionData
  );
  const { userData } = useSelector((state: RootState) => state.userData);

  //useEffect
  useEffect(() => {
    dispatch(getTransactionData());
  }, []);

  useEffect(() => {
    let cryptoOrders = transactionData;
    setCryptoOrders(cryptoOrders);
  }, [transactionData]);

  //methods
  const onBtnClick = () => {
    console.log('btnClick done !!!!!');
  };

  return (
    <>
      <Helmet>
        <title>Indexnine Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          heading="Transactions"
          subHeading={`John Smith, these are your recent transactions`}
          buttonText="Create Transactions"
          btnVariant={'contained'}
          icon={<AddTwoToneIcon fontSize="small" />}
          btnClick={onBtnClick}
        />
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
    </>
  );
};

export default ApplicationsTransactions;
