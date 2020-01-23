var routerHistory;

const initRouter = (history) => {
  routerHistory = history;
};

const push = (path, state) => {
  routerHistory.push(path, state)
}

const replace = (path, state) => {
  routerHistory.replace(path, state)
}

const go = (n) => {
  routerHistory.go(n)
}

const goBack = () => {
  routerHistory.goBack()
}

const goForward = () => {
  routerHistory.goForward()
}

const block = (prompt) => {
  routerHistory.block(prompt)
}

const listen = (listener) => {
  routerHistory.listen(listener)
}
const createHref = (location) => {
  routerHistory.createHref(location)
}
const location = () => {
  return routerHistory.location;
}

const action = () => {
  return routerHistory.action;
}

const length = () => {
  return routerHistory.length
}

export default {
  initRouter,
  push,
  replace,
  go,
  goBack,
  goForward,
  block,
  listen,
  action,
  createHref,
  location,
  length
}
