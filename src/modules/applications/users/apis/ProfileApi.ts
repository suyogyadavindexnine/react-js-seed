import { Config, apiGet } from 'src/shared/common-functions/api-request';

export const getUserDetailsAPI = async () => {
  const config = {} as Config;
  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('profile/user.json', config);
  return res.data;
};
