import "./index.css";

// import("./single-spa-only");
import { importRemote } from "./import-remote";

(async () => {
  // loading mfes configuration from config.json file.
  // it could come from an API call as well.
  // the config.json file can be build in the server side reading from env variables.
  const response = await fetch("/config.json");
  const config = await response.json();
  window.MFEs = config.appConfig.map((app) => ({
    id: app.id,
    name: app.name,
    url: app.url,
    loadRemoteStyle: app.loadRemoteStyle,
    path: importRemote(
      app.remoteEntry.url,
      app.remoteEntry.scope,
      app.remoteEntry.module,
      app.remoteEntry.type
    ),
    route: app.route,
    activeWhen: (location) =>
      new RegExp(app.activeWhen).test(location.pathname),
  }));

  // lazy loading the SDK causes the config.js file to have access to the window.MFEs variable;
  const { registerAndStartApplications } = await import(
    "@accelerators/psca-mfe-sdk-core"
  );
  registerAndStartApplications();
})();
