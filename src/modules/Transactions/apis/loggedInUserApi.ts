import { Config, apiGet } from 'src/shared/utils/api-request';

export const getLoggedInUserAPI = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('management/loggedInUser.json', config);
  return res.data;
};
