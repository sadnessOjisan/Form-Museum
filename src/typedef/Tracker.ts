export interface ITracker {
  url: string
  page: string
  eventName: string
  eventType: string
  target?: string
  property?: Record<string, Record<string, any>>
}

export interface ILog {
  version: string
  pk: string // uuid
  tk: string // 一個前のuuid
  userId: string
  url: string
  page: string // pagename
  eventName: string // select-user
  eventType: string // click, load,...
  target?: string // test-data-id
  property?: object // object
  timeStamp: string // ISO
  userAgent: string
  sessionID: string
}
