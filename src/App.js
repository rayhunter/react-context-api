import React from "react";
import "./styles.css";
import GlobalStateProvider from "./store/GlobalStateProvider";
import { Nav, DownloadImage, LoginNotification } from "./components";

export default function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <Nav />
        <h1>Hello Raymond</h1>
        <DownloadImage />
        <LoginNotification />
      </div>
    </GlobalStateProvider>
  );
}
