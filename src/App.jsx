import React from "react";
import { Routes, Route } from "react-router-dom";

import { UserList, UserItem } from "./user";
import { NewPlace } from "./places";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
  );
};

export default App;
