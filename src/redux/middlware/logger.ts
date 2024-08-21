const Logger = (state) => (next) => (action) => {
  console.log("Action: ", action);
  next();
  console.log("Current State: ", state.getState());
  const result = next(action);

  return result;
};
