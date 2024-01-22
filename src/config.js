// import AuthServiceHandler from "./AuthServiceHandler";
// import StateServiceHandler from "./StateServiceHandler";

import { importRemote } from "./import-remote";

export const config = {
  appConfig: [
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
  ],
  apiEndpoint: "/",
  layoutConfig: {
    layout: "cnh-root-layout-default-vertical",
  },
  // authServiceHandler: new AuthServiceHandler(),
  // stateServiceHandler: new StateServiceHandler(
  //   process.env.REACT_APP_API_BASE_URL
  // ),
  // authConfig: {
  //   clientId: "e6p7st5pUaqfZWshFgFvbNHwgvxw58BW",
  //   domain: "stg.identity.cnhind.com",
  //   authorizationParams: {
  //     audience: "https://euevoapipv010.azure-api.net/dmp",
  //     redirectUri: window.location.origin,
  //     connection: "STG-ADFS-CONN",
  //   },
  // },
};
