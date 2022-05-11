import React from "react";
import UsersCard from "../UsersCard";
import { UsersGridStyle } from "./style";
export default function UsersGrid({usersData}) {
  return (
    <UsersGridStyle>
      {usersData.map((data) => (
        <UsersCard
          key={data.id}
          name={data.name}
          website={data.website}
          email={data.email}
          phone={data.phone}
          street={data.address.street}
          city={data.address.city}
        />
      ))}
    </UsersGridStyle>
  );
}
