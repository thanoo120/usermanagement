import React from "react";
import DashBoard from "./components/DashBoard";
import UserDetail from "./components/UserDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/userdetail" element={<UserDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;