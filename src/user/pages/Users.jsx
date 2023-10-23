import React from "react";

import UserList from "../components/UserList";

const SEED_USERS = [
  {
    id: "u1",
    name: "John Doe",
    image:
      "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    places: 3,
  },
];

const Users = () => {
  return <UserList items={SEED_USERS} />;
};

export default Users;
