import Controller from './controller.js';

function getRouteInfo() {
  const hash = location.hash ? location.hash.slice(1) : '';
  const [name, id] = hash.split('/');

  return { name, params: { id } }
}

function handleHash() {
  const { name } = getRouteInfo();

  if (name) {
    const routeName = name + 'Route';
    Controller[routeName]();
  }
}

export default {
  init() {
    addEventListener('hashchange', handleHash);
    handleHash();
  }
}
