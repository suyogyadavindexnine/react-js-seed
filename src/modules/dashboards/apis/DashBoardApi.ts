import { Config, apiGet } from 'src/shared/common-functions/api-request';

export const getDashboardDataAPI = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('dashboard/crypto.json', config);
  return res.data;
};

export const getEmpDetails = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('dashboard/employees.json', config);
  return res.data;
};

export const getDashboardDetails = async (isDataRefresh: boolean) => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet(
    isDataRefresh ? 'dashboard/dashboard2.json' : 'dashboard/dashboard.json',
    config
  );
  return res.data;
};
