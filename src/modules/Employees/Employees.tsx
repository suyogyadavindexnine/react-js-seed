import { Helmet } from 'react-helmet-async';
import EmployeeDetails from './components/EmployeeDetailsData';
import { PageTitleWrapper, PageHeader } from '../../shared/components/index';
import { Grid, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployeeData } from './services/employee.service';
import { AppDispatch, RootState } from 'src/store/configure-store';

const Employees = () => {
  //constants
  const dispatch = useDispatch<AppDispatch>();
  const [employees, setEmployees] = useState([]);
  const { employeeData } = useSelector(
    (state: RootState) => state.employeeData
  );

  //useEffect
  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);

  useEffect(() => {
    let employees = employeeData;
    setEmployees(employees);
  }, [employeeData]);

  return (
    <>
      <Helmet>
        <title>Indexnine Employees - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          heading="Employees"
          // subHeading={`John Smith, these are your recent transactions`}
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
            <EmployeeDetails
              employeeDetails={employees}
              handleButtonClick={() => null}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Employees;
