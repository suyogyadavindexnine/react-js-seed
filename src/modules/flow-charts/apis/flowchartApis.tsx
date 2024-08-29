import { DEPARTMENTS } from 'src/shared/constants/constants';
import { Config, apiGet } from 'src/shared/utils/api-request';

export const getFlowchartDataAPI = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('flowChart/flowchart.json', config);

  return res.data;
};

export const getDepartments = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('flowChart/departments.json', config);

  return res.data;
};

export const getEmployeeFlowchartDataAPI = async (departmentKey: string) => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  let departmentName = '';
  console.log(departmentKey);
  switch (departmentKey) {
    case DEPARTMENTS.MANAGEMENT:
      departmentName = DEPARTMENTS.MANAGEMENT;
      break;
    case DEPARTMENTS.OPERATIONS:
      departmentName = DEPARTMENTS.OPERATIONS;
      break;
    case DEPARTMENTS.DESIGN:
      departmentName = DEPARTMENTS.DESIGN;
      break;
    case DEPARTMENTS.QA:
      departmentName = DEPARTMENTS.QA;
      break;
    default:
      departmentName = DEPARTMENTS.ENGINEERING;
      break;
  }
  const res = await apiGet(`flowChart/${departmentName}.json`, config);

  return res.data;
};
