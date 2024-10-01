import { EmployeeDetails } from "../models";
import EmployeeDetailsTable from "./EmployeeDetailsTable";
import EmployeeDetailsCard from "./EmployeeDetailsCard";
import { FC, MouseEvent, useState } from "react";
import { Box } from "@mui/material";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import TableRowsTwoToneIcon from "@mui/icons-material/TableRowsTwoTone";
import { Card, ButtonToggle } from "../../../shared/components/index";
import { PageHeader, PageTitleWrapper } from "src/shared/components";

interface EmployeeDetailsProps {
  className?: string;
  employeeDetails: EmployeeDetails[];
  handleButtonClick(): void;
}

const EmployeeDetailsData: FC<EmployeeDetailsProps> = ({
  employeeDetails,
  handleButtonClick,
}) => {
  const [tabs, setTab] = useState<string | null>("Employees_Table");

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
      {/* <Box
        display="flex"
        alignItems="center"
        justifyContent="end"
        sx={{
          pb: 2
        }}
      >
        <ButtonToggle
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
          exclusive
          onChange={handleViewOrientation}
        />
      </Box> */}
      {/* {tabs === 'Employees_Card' && (
        <EmployeeDetailsCard
          employeeDetails={employeeDetails}
          handleButtonClick={handleButtonClick}
        />
      )}
      {tabs === 'Employees_Table' && (
        <Card>
          <EmployeeDetailsTable
            employeeDetails={employeeDetails}
            handleButtonClick={handleButtonClick}
          />
        </Card>
      )} */}
    </>
  );
};

export default EmployeeDetailsData;
