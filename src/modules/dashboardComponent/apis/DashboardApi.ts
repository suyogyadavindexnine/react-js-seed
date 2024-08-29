import { Config, apiGet } from 'src/shared/common-functions/api-request';

export const getDashboardUserDetailsAPI = async () => {
  const config = {} as Config;
  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('dashboard/dashboard.json', config);
  return res.data;
};
