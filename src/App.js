import React from "react";

import Navbar from "./commons/Navbar";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import SelectMovie from "./components/SelectMovie";
import AuthContext from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>

          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<SelectMovie />}></Route>
        </Routes>
      </AuthContext>
    </>
  );
};

export default App;
