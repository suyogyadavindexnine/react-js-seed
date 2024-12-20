import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import { SidebarMenus } from "src/shared/components/index";
import * as ROUTES from "src/shared/constants/routes";

const SidebarMenu = () => {
  return (
    <>
      <SidebarMenus
        menuname={""}
        option={[
          {
            pathname: ROUTES.TENANT,
            subpathname: '',
            icon: <TableChartTwoToneIcon />,
            submenuname: "Tenant Management",
          },
          {
            pathname: ROUTES.USER,
            subpathname: '',
            icon: <TableChartTwoToneIcon />,
            submenuname: "User Management",
          },
          {
            pathname: ROUTES.ROLE,
            subpathname: '',
            icon: <TableChartTwoToneIcon />,
            submenuname: "Role Management",
          },
        ]}
      />
    </>
  );
};

export default SidebarMenu;
