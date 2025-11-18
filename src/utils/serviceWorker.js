const noop = async () => false;

const serviceWorkerManager = {
  isSupported: typeof navigator !== 'undefined' && 'serviceWorker' in navigator,
  init: () => ({}),
  register: noop,
  unregister: noop,
  unregisterAll: noop,
  clearImageCache: noop,
  getCacheStats: async () => ({ size: 0, maxSize: 0 }),
  sendConfigToWorker: noop,
};

export default serviceWorkerManager;
