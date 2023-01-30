import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import SelectMovie from "./components/SelectMovie";
import AuthContext from "./context/AuthContext";
import NotFound from "./components/NotFound";

import DarkVariantExample from "./components/Carousel";

import "././global.css";

const App = () => {
  return (
    <>
      <AuthContext>
        <Routes>
          <Route path="/" element={<DarkVariantExample />}></Route>

          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<SelectMovie />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext>
    </>
  );
};

export default App;
