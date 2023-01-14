import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

function Portal() {
  return (
    <div>
      <Topbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Portal;
