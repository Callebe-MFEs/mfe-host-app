import "./index.css";

// import("./single-spa-only");
import { importRemote } from "./import-remote";

window.MFEs = [
  {
    id: 1,
    name: "mfe-app-r",
    url: "http://localhost:3001",
    loadRemoteStyle: false,
    path: importRemote(
      "http://localhost:3001/remoteEntry.js",
      "mfeAppR",
      "./MFEAppR"
    ),
    route: "/",
    activeWhen: (location) => location.pathname === "/",
  },
  {
    id: 2,
    name: "mfe-app-a",
    url: "http://localhost:3002",
    loadRemoteStyle: false,
    path: importRemote(
      "http://localhost:3002/remoteEntry.js",
      "mfeAppA",
      "./MFEAppA"
    ),
    route: "/mfe-app-a",
    activeWhen: (location) => location.pathname.startsWith("/mfe-app-a"),
  },
  // {
  //   id: 3,
  //   name: "mfe-app-a",
  //   url: "http://localhost:3003",
  //   loadRemoteStyle: false,
  //   path: import("mfeAppV/MFEAppV"),
  //   route: "/mfe-app-v",
  //   activeWhen: (location) => location.pathname.startsWith("/mfe-app-v"),
  // },
];

window.setTimeout(async () => {
  // lazy loading the SDK causes the config.js file to have access to the window.MFEs variable;
  const { registerAndStartApplications } = await import(
    "@accelerators/psca-mfe-sdk-core"
  );
  registerAndStartApplications();
}, 1000);
