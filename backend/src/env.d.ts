declare namespace NodeJS {
  export interface ProcessEnv {
    API_PORT: string;
    MONGO_HOST: string;
    MONGO_PORT: string;
    MONGO_INITDB_ROOT_USERNAME: string;
    MONGO_INITDB_ROOT_PASSWORD: string;
    MONGO_USER: string;
    MONGO_PASS: string;
    MONGO_DBNAME: string;
  }
}
