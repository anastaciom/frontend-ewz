import React, { useState, useEffect } from "react";
import api from "../../services/api";
import UsersCard from "../UsersCard";
import { UsersGridStyle } from "./style";
export default function UsersGrid() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    api.get("users").then(({ data }) => {
      setUsersData(data);
    });
  }, []);

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
