import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import { SidebarMenus } from 'src/shared/components/index';
import * as ROUTES from 'src/shared/constants/routes';

const SidebarMenu = () => {
  return (
    <>
      <SidebarMenus
        menuname={'Dashboards'}
        option={[
          {
            pathname: ROUTES.DASHBOARD,
            subpathname: ROUTES.TRANSACTIONS,
            icon: <TableChartTwoToneIcon />,
            submenuname: 'transac_list'
          }
        ]}
      />
    </>
  );
};

export default SidebarMenu;
