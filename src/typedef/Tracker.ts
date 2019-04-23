export interface ITracker {
  url: string;
  page: string;
  eventType: string;
  target: string;
  property?: Object; // object
}

export interface ILog {
  pk: string; // uuid
  tk: string; // 一個前のuuid
  userId: string;
  url: string;
  page: string; // pagename
  eventType: string; // click, load,...
  target: string; // test-data-id
  property: string; // object
  timeStamp: string; // ISO
}
