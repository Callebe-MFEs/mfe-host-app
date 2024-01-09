// if using External Remotes Plugins, define the url of the remoteEntry.js file before loading it
// window.mfeAppRUrl = "http://localhost:3001";

const fetchRemoteEntry = async (url, name) => {
  const script = document.createElement("script");
  script.src = url;
  script.type = "text/javascript";
  script.async = true;

  const promise = new Promise((resolve) => {
    script.onload = () => {
      resolve(window[name]);
    };
  });

  document.head.appendChild(script);

  return promise;
};

// Dynamic Remote Containers
(async () => {
  const mfeAppR = await fetchRemoteEntry(
    "http://localhost:3001/remoteEntry.js",
    "mfeAppR"
  );

  await __webpack_init_sharing__("default");

  await mfeAppR.init(__webpack_share_scopes__.default);
})().then(() => {
  import("./bootstrap");
});
