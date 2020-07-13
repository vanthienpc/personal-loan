import environment, { Environment } from './base';

const baseApi = 'https://json-server.vanthienpc.now.sh';
const env = environment(baseApi);

const productionEnv: Environment = {
  ...env,
};

export default productionEnv;
