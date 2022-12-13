import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../../dashboard/dashboard";

function DashboardRouter() {
  return (
    <div>
      <Route path="/Dashboard" element={<Dashboard />} />
    </div>
  );
}

export default DashboardRouter;
