import INSTAGRAM_PATH from 'src/assets/icons/SocialMediaIcons/instagram.svg';
import FACEBOOK_PATH from 'src/assets/icons/SocialMediaIcons/facebook.svg';
import LINKEDIN_PATH from 'src/assets/icons/SocialMediaIcons/linkedin.svg';
import TWITTER_PATH from 'src/assets/icons/SocialMediaIcons/twitter.svg';

export const SERVER_API_URL = import.meta.env.VITE_APP_SERVER_API_URL;

export const USERPOOL_ID = import.meta.env.VITE_APP_USERPOOL_ID;

export const USERPOOL_WEBCLIENT_ID = import.meta.env.VITE_APP_USERPOOL_WEBCLIENT_ID;

export const HEADER_AUTHORIZATION = 'a64bccc5-1648-46ae-ad78-b0f890f1d6c1';

export const AWS_REGION = 'us-west-2';
export const AWS_CONFIG = {
  aws_appsync_graphqlEndpoint:
    import.meta.env.VITE_APP_AWS_APPSYNC_GRAPHQLENDPOINT,

  aws_appsync_region: import.meta.env.VITE_APP_AWS_APPSYNC_REGION,

  aws_appsync_authenticationType: import.meta.env.VITE_APP_AWS_AUTHENTICATIONTYPE,

  aws_appsync_apiKey: import.meta.env.VITE_APP_AWS_APPSYNC_APIKEY
};
export const DEVSTAGE_USERPOOL_ID = 'us-west-2_R4zfKO1hy';
export const QASTAGE_USERPOOL_ID = 'us-west-2_R4zfKO1hy';
export const CLINICALUSER_STAGE_USERPOOL_ID = 'us-west-2_VU5TDSRwJ';

export const DEVSTAGE_USERPOOL_WEBCLIENT_ID = '34jp7c8060jmgqu9bnhjptrotc';

export const QASTAGE_USERPOOL_WEBCLIENT_ID = '34jp7c8060jmgqu9bnhjptrotc';

export const CLINICALUSER__USERPOOL_WEBCLIENT_ID = '34jp7c8060jmgqu9bnhjptrotc';

export const CRYPTO = import('src/modules/dashboards/DashboardV2');
export const DASHBOARD = import('src/modules/dashboardComponent');
export const USERPROFILE = import('src/modules/applications/users');

export const BUTTONS = import('src/modules/components/Buttons');
export const MODALS = import('src/modules/components/Modals');
export const ACCORDIONS = import('src/modules/components/Accordions');
export const TABS = import('src/modules/components/Tabs');
export const BADGES = import('src/modules/components/Badges');
export const TOOLTIP = import('src/modules/components/Tooltips');
export const AVATARS = import('src/modules/components/Avatars');
export const CARDS = import('src/modules/components/Cards');
export const FORMS = import('src/modules/components/Forms');
export const CHECKBOX = import('src/modules/components/Checkbox');
export const FILEBUTTON = import('src/modules/components/Filebutton');
export const RADIOBUTTON = import('src/modules/components/Radio');
export const TEXTFIELD = import('src/modules/components/Textfield');
export const SELECT = import('src/modules/components/Select');
export const SLIDER = import('src/modules/components/Slider');
export const STEPPER = import('src/modules/components/Stepper');
export const TIMEPICKER = import('src/modules/components/Timepicker');
export const TYPOGRAPHY = import('src/modules/components/Typography');
export const CURRENCYFIELD = import('src/modules/components/Currencyfield');
export const TOASTER = import('src/modules/components/toaster');
export const CIRCULARPROGRESS = import(
  'src/modules/components/Circularprogress'
);
export const DEMO = import('src/modules/demos/components/Demo');
export const CYBER_SECURITY_DEMO = import('src/modules/demos/components/CyberSecurityDemo');
export const IOT_DEMO = import('src/modules/demos/components/IotDemo');
export const CYBER_INCIDENT_DEMO = import('src/modules/demos/components/CyberIncident');
export const NETWORK_THREAT_DEMO = import('src/modules/demos/components/NetworkThreat');
export const CYBER_THREAT_DEMO = import('src/modules/demos/components/CyberThreat');
export const SNAP_RECRUIT_DEMO = import('src/modules/demos/components/SnapRecruit');
export const FINTECH_DEMO = import('src/modules/demos/components/FintechDemo');
export const SNAP_ASSESS_DEMO = import('src/modules/demos/components/SnapAssess');

export const DATEPICKER = import('src/modules/components/Datepicker');
export const STATUS404 = import('src/core/status/status-404');
export const STATUS500 = import('src/core/status/status-500');
export const STATUSCOMINGSOON = import('src/core/status/coming-soon');
export const STATUSMAINTENANCE = import('src/core/status/maintenance');
export const DEMOCARD = import('src/demoComponent/index');

export const LOGIN = import('src/auth/login/Login');
export const TRANSACTIONS = import(
  'src/modules/Transactions/ApplicationsTransactions'
);
export const ERROR_PAGE = import('src/modules/ErrorPage/ErrorPage');

export const CUSTOMFORMWRAPPER = import(
  'src/modules/CustomFormWrapper/CustomFormWrapper'
);

export const FLOWCHART = import('src/modules/flow-charts/FlowCharts');

export const FLOWCHART_DETAIL = import(
  'src/modules/flow-charts/components/NodeDetailWrapper'
);

export const CUSTOM_FLOW_CHART = import(
  'src/modules/flow-charts/CustomFlowChart'
);

export const DEPARTMENT_DETAIL = import(
  'src/modules/flow-charts/components/EmployeeDataWrappper'
);

export const EMPLOYEE_DETAIL = import(
  'src/modules/flow-charts/components/EmployeeDetailWrapper'
);

export const EMPLOYEES = import('src/modules/Employees/Employees');

export const UPLOAD = import('src/modules/components/Upload/UploadWrapper');

export const TREEVIEW = import('src/modules/components/tree-view/index');

export const FILE_MANAGER = import('src/modules/components/file-manager/Index');

export const CHOROPLETH_MAP = import(
  'src/modules/choropleth-map/ChoroplethWidget'
);
export const TEXTEDITOR = import(
  'src/modules/components/text-editor-wrapper/TextEditorWrapper'
);

export const CHATBOT = import('src/modules/chat-bot-wrapper/ChatBotWrapper');

export const COMPLETED = 'completed';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARNING = 'warning';
export enum statusLable {
  COMPLETED = 'completed',
  PENDING = 'pending',
  FAILED = 'failed'
}

export const REGEX = {
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NUMBER_DECIMAL:
    /^(?:\d{1,2}(?:\.\d{1,2})?|100(?:\.0{1,2})?|0(?:\.\d{1,2})?)$/,
  NUMBER_INTEGER: /^(?:\d*[1-9]\d*|)$/,
  TEXT_ONLY: /^[a-zA-Z ]*$/,
  PASSWORD:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$/,
  // JSON: /^[\],:{}\s]*$|^"(.|\\[\\"/bfnrt])*"$|^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?(?:[eE][+-]?\d+)?$/
  JSON: /^[\],:{}\s]*$|^"(.|\\[\\"/bfnrt])*"$/
};

export const MEGABYTE_CONVERTER = 1000000;

export const FIELD_TYPE = {
  TEXT: 'text',
  RADIO: 'radio',
  EMAIL: 'email',
  SWITCH: 'switch',
  SELECT: 'select',
  REGEX: 'regex',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  TEXTAREA: 'textarea',
  NUMBER_ONLY: 'number_only',
  INTEGER_ONLY: 'integer_only',
  MULTI_SELECT: 'multi-select',
  AUTOCOMPLETE: 'autocomplete',
  CHECKBOX_GROUP: 'checkbox_group'
};

export const DEPARTMENTS = {
  MANAGEMENT: 'management',
  OPERATIONS: 'operations',
  DESIGN: 'design',
  ENGINEERING: 'engineering',
  QA: 'qa'
};

export const DEPARTMENT_LABELS = {
  MANAGEMENT: 'Management',
  OPERATIONS: 'Operations',
  DESIGN: 'Design',
  ENGINEERING: 'Engineering',
  QA: 'Quality Analyst'
};

export const INDEXNINE_SOCIAL_MEDIA = [
  {
    path: INSTAGRAM_PATH,
    followers: '500',
    url: 'https://www.instagram.com/indexninehq/?hl=en'
  },
  {
    path: FACEBOOK_PATH,
    followers: '350',
    url: 'https://www.facebook.com/indexnine/'
  },
  {
    path: LINKEDIN_PATH,
    followers: '600',
    url: 'https://www.linkedin.com/company/indexnine-technologies/mycompany/'
  },
  {
    path: TWITTER_PATH,
    followers: '550',
    url: 'https://twitter.com/indexnine'
  }
];

export const AUTH_CONFIG = {
  LOGIN_TYPE_GOOGLE: 'goog',
  LOGIN_TYPE_MICROSOFT: 'msft',
  LOGIN_TYPE_BASIC_AUTH: 'basic-auth',
  LOGIN_TYPE_ADMIN: `admin`,
  LOGIN_TYPE_USER: `user`,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
};

export const MESSAGE = 'message';
export const STATUS_404 = '404';

export const I18N = {
  DEFAULT: 'lang',
  ADMIN_USER: 'adminusermanagement',
  ORGANIZATION: 'organization',
  USER_MANAGEMENT: 'usermanagement',
  ALL: 'all',
  SIDE_BAR_MENU: 'sidebarmenu',
  LOGIN: 'Login'
};

export const ROLES = {
  SUPER_ADMIN: 'platform-admin',
  ADMIN_OPERATOR: 'platform-coordinator',
  COMPANY_TECH: 'company-tech',
  TENANT_OPERATOR: 'company-tag',
  TENANT_ADMIN: 'company-admin',
  USER: 'user',
  INTERVIEWER: 'interviewer'
};

export const INVALID_OTP = 'Invalid OTP';

export const DEMO_EMAILS = {
  PLATFORM_ADMIN: 'platform.admin@indexnine.com',
  COMPANY_ADMIN: 'company.admin@indexnine.com',
  USER: 'user@indexnine.com'
};

export const TABLE_PAGESIZE = [10, 25, 50, 100];