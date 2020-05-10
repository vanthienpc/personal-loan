import environment, { Environment } from './base';

const baseApi = 'http://localhost:3001';
const env = environment(baseApi);

const developmentEnv: Environment = {
  ...env,
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
};

export default developmentEnv;
