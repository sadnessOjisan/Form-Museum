import ENVS from "./env";
const REACT_APP_ENV = process.env.REACT_APP_ENV;
let host: string;

switch (REACT_APP_ENV) {
  case ENVS.local:
    host = "http://localhost:3010";
    break;
  case ENVS.dev:
    host = "https://aaaaaaaaaa";
    break;
  case ENVS.stg:
    host = "https://bbbbbbbbbbb";
    break;
  case ENVS.prd:
    host = "https://cccccccccc";
    break;
  default:
    host = "aaaaaaaaaa";
}

export { host };
