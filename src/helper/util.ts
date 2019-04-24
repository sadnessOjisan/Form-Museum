// @flow
import { AxiosError } from "axios";
import { host } from "../const/url";
import ENVS from "../const/env";
import { ITracker } from "../typedef/Tracker";
import { path } from "../const/page";
import { EVENT_TYPE } from "../const/event";

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

interface IOpiton {
  page?: string;
  eventName: string;
  eventType: string;
  target?: string;
  property?: Object; // object
}

export const genLog = (option: IOpiton): ITracker => {
  const { page } = option;
  const url = window.location.pathname;
  console.log("path: ", path);
  const pageName = path[url];
  if (!(pageName || page)) {
    return {
      ...option,
      url,
      page: "不明"
    };
  } else if (page) {
    return {
      ...option,
      url,
      page
    };
  } else {
    return {
      ...option,
      url,
      page: pageName
    };
  }
};

export const genLoadLog = (eventName: string): ITracker => {
  return genLog({ eventName: eventName, eventType: EVENT_TYPE.load });
};
