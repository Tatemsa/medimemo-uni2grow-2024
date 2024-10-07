import React from "react";
// import { FabButton } from "../fabButton/FabButton";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="container">
      <div className="panel">
        <div className="sub-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
