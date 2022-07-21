import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://cdn.vox-cdn.com/thumbor/EoacRCnpK9DYJB7AHGjDfDJXNus=/0x0:1024x1024/920x613/filters:focal(431x431:593x593):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71156056/DALL_E_a_photo_of_an_astronaut_riding_a_horse_3.0.png",
      name: "Wink",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
