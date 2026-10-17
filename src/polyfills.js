// react-native-swiper uses setImmediate, which browsers do not provide.
// Keep the existing implementation on platforms that already support it.
if (typeof globalThis.setImmediate === 'undefined') {
  globalThis.setImmediate = (callback, ...args) =>
    globalThis.setTimeout(callback, 0, ...args);

  globalThis.clearImmediate = (id) => globalThis.clearTimeout(id);
}
