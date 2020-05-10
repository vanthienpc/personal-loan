import environment, { Environment } from './base';

const baseApi = 'http://localhost:3001';
const env = environment(baseApi);

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;
