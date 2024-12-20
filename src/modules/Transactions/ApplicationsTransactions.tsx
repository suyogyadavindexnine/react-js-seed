import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { PageHeader, PageTitleWrapper } from "src/shared/components/index";
import { AppDispatch, RootState } from "src/store/configure-store";
import RecentOrders from "./components/RecentOrders";
import { getTransactionData } from "./services/transaction.service";

const ApplicationsTransactions = () => {
  //constants
  const dispatch = useDispatch<AppDispatch>();
  const [cryptoOrders, setCryptoOrders] = useState([]);
  const { transactionData } = useSelector(
    (state: RootState) => state.transactionData,
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
    console.log("btnClick done !!!!!");
  };

  return (
    <>
      <Helmet>
        <title>Indexnine Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          heading="Transactions"
          subHeading={`${userData?.name} these are your recent transactions`}
          icon={<AddTwoToneIcon fontSize="small" />}
        >
          <>
            <Typography variant="h3" component="h3" gutterBottom>
              Transactions
            </Typography>
            <Typography variant="subtitle2">
              {userData?.name} these are your recent transactions
            </Typography>
          </>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
            onClick={onBtnClick}
          >
            Create Transactions
          </Button>
        </PageHeader>
      </PageTitleWrapper>

      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid xs={12}>
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
