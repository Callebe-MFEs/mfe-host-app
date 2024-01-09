import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// lazy load approach
// using env variables on compilation time (webpack)
// or using external remote plugin (webpack) (window.mfeAppRUrl configured in index.js)
// import("mfeAppR/MFEAppR").then((mfeAppR) => {
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
window.mfeAppR.get("./MFEAppR").then((mfeAppR) => {
  const MFEAppR = mfeAppR().default;
  console.log(MFEAppR);
  createRoot(document.getElementById("react")).render(
    <>
      <App />
      <MFEAppR />
    </>
  );
});

//
// import MFEAppR from "mfeAppR/MFEAppR";

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <MFEAppR />
//   </>
// );
