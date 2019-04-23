// @flow
import { AxiosError } from "axios";
import { host } from "../const/url";
import ENVS from "../const/env";
import { ITracker } from "../typedef/Tracker";

const REACT_APP_ENV = process.env.REACT_APP_ENV;

export const getUrl = (path: string) => {
  return `${host}/${path}`;
};

export const assert = (message: string) => {
  switch (REACT_APP_ENV) {
    case ENVS.local:
    case ENVS.dev:
      throw new Error(message);
    case ENVS.stg:
    case ENVS.prd:
      console.error(message);
      break;
    default:
      console.error(message);
  }
};

export const genAxiosErrorObject = (): AxiosError => {
  return { name: "", message: "", config: {} };
};
