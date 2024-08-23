import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SidebarLayout from 'src/core/layout/SidebarLayout';
import BaseLayout from 'src/core';

import { GuardedRoute } from './guarded-routes';
import {
  ACCORDIONS,
  AVATARS,
  BADGES,
  BUTTONS,
  CARDS,
  CRYPTO,
  FORMS,
  LOGIN,
  MODALS,
  STATUS404,
  TABS,
  TOOLTIP,
  TRANSACTIONS,
  USERPROFILE,
  STATUS500,
  STATUSCOMINGSOON,
  STATUSMAINTENANCE,
  DEMOCARD,
  CHECKBOX,
  CIRCULARPROGRESS,
  DATEPICKER,
  FILEBUTTON,
  RADIOBUTTON,
  TEXTFIELD,
  SELECT,
  SLIDER,
  STEPPER,
  TIMEPICKER,
  TYPOGRAPHY,
  CURRENCYFIELD,
  TOASTER,
  DASHBOARD,
  CUSTOMFORMWRAPPER,
  ERROR_PAGE,
  UPLOAD,
  FLOWCHART,
  FLOWCHART_DETAIL,
  CUSTOM_FLOW_CHART,
  DEPARTMENT_DETAIL,
  EMPLOYEE_DETAIL,
  CHOROPLETH_MAP,
  EMPLOYEES,
  TEXTEDITOR,
  CHATBOT,
  TREEVIEW,
  FILE_MANAGER,
  DEMO1
} from './../shared/constants/constants';
import { SuspenseLoader } from '../shared/components/index';
import * as ROUTES from 'src/shared/constants/routes';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Login = Loader(lazy(() => LOGIN));

// Dashboards

const Crypto = Loader(lazy(() => CRYPTO));
const Dashboard = Loader(lazy(() => DASHBOARD));
const Transactions = Loader(lazy(() => TRANSACTIONS));
const UserProfile = Loader(lazy(() => USERPROFILE));

// Components

const Buttons = Loader(lazy(() => BUTTONS));
const Modals = Loader(lazy(() => MODALS));
const Accordions = Loader(lazy(() => ACCORDIONS));
const Tabs = Loader(lazy(() => TABS));
const Badges = Loader(lazy(() => BADGES));
const Tooltips = Loader(lazy(() => TOOLTIP));
const Avatars = Loader(lazy(() => AVATARS));
const Cards = Loader(lazy(() => CARDS));
const Forms = Loader(lazy(() => FORMS));
const Checkbox = Loader(lazy(() => CHECKBOX));
const Circularprogress = Loader(lazy(() => CIRCULARPROGRESS));
const Datepicker = Loader(lazy(() => DATEPICKER));
const Filebutton = Loader(lazy(() => FILEBUTTON));
const Radiobutton = Loader(lazy(() => RADIOBUTTON));
const Textfield = Loader(lazy(() => TEXTFIELD));
const Select = Loader(lazy(() => SELECT));
const Slider = Loader(lazy(() => SLIDER));
const Stepper = Loader(lazy(() => STEPPER));
const Timepicker = Loader(lazy(() => TIMEPICKER));
const Typography = Loader(lazy(() => TYPOGRAPHY));
const Currencyfield = Loader(lazy(() => CURRENCYFIELD));
const Toaster = Loader(lazy(() => TOASTER));
const Upload = Loader(lazy(() => UPLOAD));
const TextEditor = Loader(lazy(() => TEXTEDITOR));
const Demo1 = Loader(lazy(() => DEMO1))
// Status

const Status404 = Loader(lazy(() => STATUS404));
const Status500 = Loader(lazy(() => STATUS500));
const StatusComingSoon = Loader(lazy(() => STATUSCOMINGSOON));
const StatusMaintenance = Loader(lazy(() => STATUSMAINTENANCE));
const DemoCard = Loader(lazy(() => DEMOCARD));
const CustomFormWrapper = Loader(lazy(() => CUSTOMFORMWRAPPER));
const FlowCharts = Loader(lazy(() => FLOWCHART));
const FlowChartDetail = Loader(lazy(() => FLOWCHART_DETAIL));

const CustomFlowChart = Loader(lazy(() => CUSTOM_FLOW_CHART));
const DepartmentDetail = Loader(lazy(() => DEPARTMENT_DETAIL));
const EmployeeDetail = Loader(lazy(() => EMPLOYEE_DETAIL));
const Employees = Loader(lazy(() => EMPLOYEES));

const ChoroplethMap = Loader(lazy(() => CHOROPLETH_MAP));

const ChatBot = Loader(lazy(() => CHATBOT));

const TreeViewMenu = Loader(lazy(() => TREEVIEW));

const FileManager = Loader(lazy(() => FILE_MANAGER));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: 'admin',
        element: <Login />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: ROUTES.DASHBOARD,
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <GuardedRoute component={Crypto} />
      },
      {
        path: 'Dashboard',
        element: <GuardedRoute component={Dashboard} />
      },

      {
        path: 'democard',
        element: <GuardedRoute component={DemoCard} />
      },
    ]
  },
  {
    path: ROUTES.DEMO,
    element: <SidebarLayout />,
    children: [
      {
        path: 'demo1',
        element: <GuardedRoute component={Demo1} />
      }
    ]
  },
  {
    path: 'choropleth-map',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <GuardedRoute component={ChoroplethMap} />
      }
    ]
  },
  {
    path: 'chat-bot',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <GuardedRoute component={ChatBot} />
      }
    ]
  },
  {
    path: 'employees',
    element: <SidebarLayout />,
    children: [
      // {
      //   path: '',
      //   element: <Navigate to="employees" replace />
      // },
      {
        path: '',
        element: <Employees />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'custom-form',
        element: <GuardedRoute component={CustomFormWrapper} />
      },
      {
        path: 'flow-chart',
        children: [
          {
            path: '',
            element: <GuardedRoute component={FlowCharts} />
          },
          {
            path: 'details',
            element: <GuardedRoute component={FlowChartDetail} />
          }
        ]
      },
      {
        path: 'indexnine-flow-chart',
        children: [
          {
            path: '',
            element: <GuardedRoute component={CustomFlowChart} />
          },
          {
            path: 'department-detail',
            children: [
              {
                path: '',
                element: <GuardedRoute component={DepartmentDetail} />
              },
              {
                path: 'employee-detail',
                element: <GuardedRoute component={EmployeeDetail} />
              }
            ]
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      },
      {
        path: 'checkbox',
        element: <Checkbox />
      },
      {
        path: 'circularprogress',
        element: <Circularprogress />
      },
      {
        path: 'datepicker',
        element: <Datepicker />
      },
      {
        path: 'filebutton',
        element: <Filebutton />
      },
      {
        path: 'upload',
        element: <Upload />
      },
      {
        path: 'radiobutton',
        element: <Radiobutton />
      },
      {
        path: 'textfield',
        element: <Textfield />
      },
      {
        path: 'select',
        element: <Select />
      },
      {
        path: 'slider',
        element: <Slider />
      },
      {
        path: 'stepper',
        element: <Stepper />
      },
      {
        path: 'timepicker',
        element: <Timepicker />
      },
      {
        path: 'typography',
        element: <Typography />
      },
      {
        path: 'currencyfield',
        element: <Currencyfield />
      },
      {
        path: 'toaster',
        element: <Toaster />
      },
      {
        path: 'text-editor',
        element: <TextEditor />
      },
      {
        path: 'tree-view-menu',
        element: <TreeViewMenu />
      },
      {
        path: 'file-manager',
        element: <FileManager />
      }
    ]
  }
];

export default routes;
