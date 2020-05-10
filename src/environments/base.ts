export default function baseEnv(baseApi: string) {
  return {
    api: {
      loan: `${baseApi}/loan`,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}

export type Environment = ReturnType<typeof baseEnv>;
