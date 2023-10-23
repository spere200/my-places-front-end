import React from "react";
import { Routes, Route } from "react-router-dom";

import { Users } from "./user";
import { NewPlace, UserPlaces } from "./places";
import { MainNavigation } from "./shared/components/Navigation";

const App = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
