import { registerApplication, start } from "single-spa";
import { importRemote } from "./import-remote";

registerApplication({
  name: "mfe-app-r",
  app: () => {
    console.log("loading MFE R");
    return importRemote(
      "http://localhost:3001/remoteEntry.js",
      "mfeAppR",
      "./MFEAppR"
    );
  },
  activeWhen: (location) => location.pathname.startsWith("/"),
});

registerApplication({
  name: "mfe-app-a",
  app: () => {
    console.log("loading MFE A");
    return importRemote(
      "http://localhost:3002/remoteEntry.js",
      "mfeAppA",
      "./MFEAppA"
    );
  },
  activeWhen: (location) => location.pathname.startsWith("/mfe-app-a"),
});

start();
