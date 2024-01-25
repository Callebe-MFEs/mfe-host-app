import React from "react";
import singleSpaReact from "single-spa-react";
import ReactDom from "react-dom/client";

export default function App() {
  return (
    <>
      <h1>Host App - Home</h1>
    </>
  );
}

const headerLifecycle = singleSpaReact({
  React,
  ReactDOMClient: ReactDom,
  rootComponent: App,
  renderType: "createRoot",
});

export const bootstrap = headerLifecycle.bootstrap;
export const mount = headerLifecycle.mount;
export const unmount = headerLifecycle.unmount;
