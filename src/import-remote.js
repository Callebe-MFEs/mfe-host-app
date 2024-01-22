const fetchRemoteEntry = async (url, scope) => {
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  script.async = true;

  const promise = new Promise((resolve) => {
    script.onload = () => {
      resolve(window[scope]);
    };
  });

  document.head.appendChild(script);

  return promise;
};

let promise = undefined;
const initSharingScope = async () => {
  if (!promise) {
    promise = __webpack_init_sharing__("default");
  }

  await promise;
};

export const importRemote = async (url, scope, module) => {
  let container = window[scope];
  if (!container) {
    container = await fetchRemoteEntry(url, scope);
    await initSharingScope();
    await container.init(__webpack_share_scopes__.default);
  }
  let factory = await container.get(module);
  return factory();
};
