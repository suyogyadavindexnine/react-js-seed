import { useState } from "react";
import {
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

import BrightnessLowTwoToneIcon from "@mui/icons-material/BrightnessLowTwoTone";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import BallotTwoToneIcon from "@mui/icons-material/BallotTwoTone";
import BeachAccessTwoToneIcon from "@mui/icons-material/BeachAccessTwoTone";
import EmojiEventsTwoToneIcon from "@mui/icons-material/EmojiEventsTwoTone";
import FilterVintageTwoToneIcon from "@mui/icons-material/FilterVintageTwoTone";
import HowToVoteTwoToneIcon from "@mui/icons-material/HowToVoteTwoTone";
import LocalPharmacyTwoToneIcon from "@mui/icons-material/LocalPharmacyTwoTone";
import RedeemTwoToneIcon from "@mui/icons-material/RedeemTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import TrafficTwoToneIcon from "@mui/icons-material/TrafficTwoTone";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import PaidIcon from "@mui/icons-material/Paid";
import RttIcon from "@mui/icons-material/Rtt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TuneIcon from "@mui/icons-material/Tune";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SyncIcon from "@mui/icons-material/Sync";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TitleIcon from "@mui/icons-material/Title";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ChromeReaderModeTwoToneIcon from "@mui/icons-material/ChromeReaderModeTwoTone";
import WorkspacePremiumTwoToneIcon from "@mui/icons-material/WorkspacePremiumTwoTone";
import CameraFrontTwoToneIcon from "@mui/icons-material/CameraFrontTwoTone";
import { useTranslation } from "react-i18next";
import FeedIcon from "@mui/icons-material/Feed";
import TimelineIcon from "@mui/icons-material/Timeline";
import AppsIcon from "@mui/icons-material/Apps";
import PublicIcon from "@mui/icons-material/Public";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.sidebar.textColor[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.sidebar.background};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.black[70]};
          background-color: ${theme.colors.alpha.black};
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(["color"])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.sidebar.textColor[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.06)};
            color: ${theme.sidebar.textColor[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.sidebar.textColor[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.sidebar.background[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  "transform",
                  "opacity",
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { t } = useTranslation(["english"]);
  const [managementNav, setManagementNav] = useState(false);
  const [accountsNav, setAccountsNav] = useState(false);
  const [componentsNav, setComponentsNav] = useState(false);
  const [othersNav, setOthersNav] = useState(false);
  const [dashboardNav, setDashboardNav] = useState(true);
  const [demoNav, setDemoNav] = useState(false);

  const onChildNavClick = (e, callback, value) => {
    closeAll();
    callback(value);
    e.stopPropagation();
  };
  const closeAll = () => {
    setManagementNav(false);
    setAccountsNav(false);
    setComponentsNav(false);
    setOthersNav(false);
    setDashboardNav(false);
    setDemoNav(false);
  };

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText> {t("Dashboards")}</ListItemText>
              {dashboardNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setDashboardNav(!dashboardNav)}
        >
          <Collapse in={dashboardNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/dashboards"
                    startIcon={<BrightnessLowTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setDashboardNav, true)}
                  >
                    {t("sidebar-menu.crypto")}
                  </Button>
                </ListItem>
                {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  to="/dashboards/dashboard"
                  startIcon={<BrightnessLowTwoToneIcon />}
                >
                  {t('sidebar-menu.dashboard')}
                </Button>
              </ListItem> */}
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText>Demos</ListItemText>
              {demoNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setDemoNav(!demoNav)}
        >
          <Collapse in={demoNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/demo"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Demo
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/cyberSecurityDemo"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Cyber Security Demo
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/iotDashboard"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Iot Dashboard
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/cyberIncident"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Cyber Incident
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/networkThreat"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Network threat identification and remediation
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/cyberThreat"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Cyber threat dashboard
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/snapRecruit"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    (snap.recruit) Recruitment Automation
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/fintech"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    Data in Motion: Fintech demo
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/demo/snapAssess"
                    startIcon={<OpenInNewIcon />}
                    onClick={(e) => onChildNavClick(e, setDemoNav, true)}
                  >
                    (snap.assess) AI based assessments
                  </Button>
                </ListItem>
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText>Management</ListItemText>
              {managementNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setManagementNav(!managementNav)}
        >
          <Collapse in={managementNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/employees"
                    startIcon={<TableChartTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.employee")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/management/custom-form"
                    startIcon={<FeedIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.custom_form")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/management/flow-chart"
                    startIcon={<TimelineIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.flow_chart")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/management/indexnine-flow-chart"
                    startIcon={<AppsIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.indexnine_flow_chart")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/choropleth-map"
                    startIcon={<PublicIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.choropleth_map")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/chat-bot"
                    startIcon={<QuestionAnswerIcon />}
                    onClick={(e) => onChildNavClick(e, setManagementNav, true)}
                  >
                    {t("sidebar-menu.chat_bot")}
                  </Button>
                </ListItem>
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText>Accounts</ListItemText>
              {accountsNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setAccountsNav(!accountsNav)}
        >
          <Collapse in={accountsNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/management/profile/details"
                    startIcon={<AccountCircleTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setAccountsNav, true)}
                  >
                    {t("sidebar-menu.user_prof")}
                  </Button>
                </ListItem>
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText>Components</ListItemText>
              {componentsNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setComponentsNav(!componentsNav)}
        >
          <Collapse in={componentsNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/buttons"
                    startIcon={<BallotTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.btns")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/modals"
                    startIcon={<BeachAccessTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.modals")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/accordions"
                    startIcon={<EmojiEventsTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.accordions")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/tabs"
                    startIcon={<FilterVintageTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.tabs")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/badges"
                    startIcon={<HowToVoteTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.badges")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/tooltips"
                    startIcon={<LocalPharmacyTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.tooltips")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/avatars"
                    startIcon={<RedeemTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    Avatars
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/cards"
                    startIcon={<SettingsTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.cards")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/forms"
                    startIcon={<TrafficTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.forms")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/checkbox"
                    startIcon={<CheckBoxTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.checkbox")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/circularprogress"
                    startIcon={<SyncIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.circularprog")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/datepicker"
                    startIcon={<CalendarMonthIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.datepicker")}
                  </Button>
                </ListItem>

                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/filebutton"
                    startIcon={<UploadFileIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.filebutton")}
                  </Button>
                </ListItem>

                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/upload"
                    startIcon={<UploadFileIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.upload")}
                  </Button>
                </ListItem>

                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/radiobutton"
                    startIcon={<RadioButtonCheckedIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.radiobutton")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/textfield"
                    startIcon={<TitleIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.textfield")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/select"
                    startIcon={<DoneOutlineIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.select")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/slider"
                    startIcon={<TuneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.slider")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/stepper"
                    startIcon={<CheckBoxTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.stepper")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/timepicker"
                    startIcon={<AccessTimeIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.timepicker")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/typography"
                    startIcon={<RttIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.typography")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/currencyfield"
                    startIcon={<PaidIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.currency")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/toaster"
                    startIcon={<ContactSupportIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.toaster")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/text-editor"
                    startIcon={<TitleIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.text_editor")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/tree-view-menu"
                    startIcon={<AccountTreeIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.tree_view_menu")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/components/file-manager"
                    startIcon={<CreateNewFolderIcon />}
                    onClick={(e) => onChildNavClick(e, setComponentsNav, true)}
                  >
                    {t("sidebar-menu.file_manager")}
                  </Button>
                </ListItem>
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
        <List
          component="div"
          subheader={
            <ListItemButton>
              <ListItemText>Extra Pages</ListItemText>
              {othersNav ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          }
          onClick={() => setOthersNav(!othersNav)}
        >
          <Collapse in={othersNav} timeout="auto" unmountOnExit>
            <SubMenuWrapper>
              <List component="div">
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/status/404"
                    startIcon={<CheckBoxTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setOthersNav, true)}
                  >
                    {t("sidebar-menu.error_404")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/status/500"
                    startIcon={<CameraFrontTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setOthersNav, true)}
                  >
                    {t("sidebar-menu.error_500")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/status/coming-soon"
                    startIcon={<ChromeReaderModeTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setOthersNav, true)}
                  >
                    {t("sidebar-menu.coming_soon")}
                  </Button>
                </ListItem>
                <ListItem component="div">
                  <Button
                    disableRipple
                    component={RouterLink}
                    to="/status/maintenance"
                    startIcon={<WorkspacePremiumTwoToneIcon />}
                    onClick={(e) => onChildNavClick(e, setOthersNav, true)}
                  >
                    Maintenance
                  </Button>
                </ListItem>
              </List>
            </SubMenuWrapper>
          </Collapse>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
