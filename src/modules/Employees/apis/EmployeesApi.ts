import { Config, apiGet } from 'src/shared/utils/api-request';

export const getEmployeeDataAPI = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('employee/employees.json', config);
  return res.data;
};
