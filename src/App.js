import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLandingPage from "./components/MainLandingPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" caseSensitive={false} element={ <MainLandingPage /> }/>
      <Route path="/login" caseSensitive={false} element={ <LoginPage /> }/>
    </Routes>
   </Router>
  );
}

export default App;
