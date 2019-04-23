const trackerMiddleware = store => next => action => {
  console.log("tracker action: ", action);
  next(action);
  // 後の state
};

export default trackerMiddleware;
