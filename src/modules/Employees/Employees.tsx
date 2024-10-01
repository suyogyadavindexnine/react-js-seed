import { Helmet } from 'react-helmet-async';
import EmployeeDetails from './components/EmployeeDetailsData';
import {
  PageTitleWrapper,
  PageHeader,
  Card
} from '../../shared/components/index';
import { Grid2 as Grid, Container, Box } from '@mui/material';
import { MouseEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployeeData } from './services/employee.service';
import { AppDispatch, RootState } from 'src/store/configure-store';
import { ButtonToggle } from '../../shared/components/index';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import EmployeeDetailsCard from './components/EmployeeDetailsCard';
import EmployeeDetailsTable from './components/EmployeeDetailsTable';

const Employees = () => {
  //constants
  const dispatch = useDispatch<AppDispatch>();
  const [employees, setEmployees] = useState([]);
  const [tabs, setTab] = useState<string | null>('Employees_Table');

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

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue !== null) {
      setTab(newValue);
    }
  };

  return (
    <>
      <Helmet>
        <title>Indexnine Employees - Applications</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader
          heading="Employees"
          subHeading="Indexnine employees details"
          icon={
            <ButtonToggle
              className="customBtnToggle"
              sx={{ background: 'transparent' }}
              buttons={[
                {
                  content: <GridViewSharpIcon />,
                  value: 'Employees_Card'
                },
                {
                  content: <TableRowsTwoToneIcon />,
                  value: 'Employees_Table'
                }
              ]}
              value={tabs}
              onChange={handleViewOrientation}
            />
          }
        />
      </PageTitleWrapper>

      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid size={{xs: 12}}>
            {tabs === 'Employees_Card' && (
              <EmployeeDetailsCard
                employeeDetails={employees}
                handleButtonClick={() => null}
              />
            )}
            {tabs === 'Employees_Table' && (
              <Card>
                <EmployeeDetailsTable
                  employeeDetails={employees}
                  handleButtonClick={() => null}
                />
              </Card>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Employees;
