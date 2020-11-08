declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      AUTH_DOMAIN: string;
      AUTH_CLIENT_ID: string;
      AUTH_REDIRECT_URI: string;
    }
  }
}

export {};
