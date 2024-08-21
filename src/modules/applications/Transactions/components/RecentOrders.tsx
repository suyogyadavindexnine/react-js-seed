import { CryptoOrderType } from 'src/modules/applications/Transactions/models/CryptoOrder';
import RecentOrdersTable from './RecentOrdersTable';
import RecentOrdersCard from './RecentOrderCard';
import { FC, MouseEvent, useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import { Card } from '../../../../shared/components/index';

interface RecentOrdersProps {
  className?: string;
  cryptoOrders: CryptoOrderType[];
  handleButtonClick: any;
}

const RecentOrders: FC<RecentOrdersProps> = ({
  cryptoOrders,
  handleButtonClick
}) => {
  const [tabs, setTab] = useState<string | null>('Recent_Orders_Table');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="end"
        sx={{
          pb: 2
        }}
      >
        <ToggleButtonGroup
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="Recent_Orders_Card">
            <GridViewSharpIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="Recent_Orders_Table">
            <TableRowsTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {tabs === 'Recent_Orders_Card' && (
        <RecentOrdersCard
          cryptoOrders={cryptoOrders}
          handleButtonClick={handleButtonClick}
        />
      )}
      {tabs === 'Recent_Orders_Table' && (
        <Card>
          {' '}
          <RecentOrdersTable
            cryptoOrders={cryptoOrders}
            handleButtonClick={handleButtonClick}
          />
        </Card>
      )}
    </>
  );
};

export default RecentOrders;
