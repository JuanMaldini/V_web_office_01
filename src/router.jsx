import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import OfficePlayer from "./OfficePlayer";
const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/vp-officeconfigurator" element={<OfficePlayer />} />
    </Routes>
  </Router>
);
export default AppRouter;