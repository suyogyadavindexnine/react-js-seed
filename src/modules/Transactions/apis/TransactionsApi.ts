import { Config, apiGet } from 'src/shared/utils/api-request';

export const getTransactionDataAPI = async () => {
  const config = {} as Config;

  config.custom = {
    setLoading: () => {}
  };
  const res = await apiGet('management/transaction.json', config);
  return res.data;
};
