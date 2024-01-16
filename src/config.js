// import AuthServiceHandler from "./AuthServiceHandler";
// import StateServiceHandler from "./StateServiceHandler";

export const config = {
  appConfig: [
    {
      id: 1,
      name: "mfe-app-r",
      url: "http://localhost:3001",
      loadRemoteStyle: false,
      path: import("mfeAppR/MFEAppR"),
      route: "/",
      activeWhen: (location) => location.pathname.startsWith("/"),
    },
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
