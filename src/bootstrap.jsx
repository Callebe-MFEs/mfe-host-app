import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// lazy load approach
// using env variables on compilation time (webpack)
// or using external remote plugin (webpack) (window.mfeAppRUrl configured in index.js)
// import("mfeAppR/MFEAppR").then((mfeAppR) => {
//   when remotes are configured in webpack, mfeAppR is an object with keys pointing to the remote modules
//   const MFEAppR = mfeAppR.default;
//   createRoot(document.getElementById("root")).render(
//     <>
//       <App />
//       <MFEAppR />
//     </>
//   );
// });

// using Dynamic Remote container
// remote fetched in index.js
// window.mfeAppR.get("./MFEAppR").then((mfeAppR) => {
//   // when remotes are dynamically fetched, mfeAppR is a factory function that returns the exported remote modules object
//   const MFEAppR = mfeAppR().default;
//   createRoot(document.getElementById("react")).render(
//     <>
//       <App />
//       <MFEAppR />
//     </>
//   );
// });

//
// import MFEAppR from "mfeAppR/MFEAppR";

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <MFEAppR />
//   </>
// );
