import React, { useState, useEffect } from "react";
import api from "../../services/api";
export default function UsersPage() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    api.get("users").then(({ data }) => {
      setUsersData(data);
    });
  }, []);
  return (
    <div>
      {usersData.map((data) => (
        <div key={data.id}>{data.username}</div>
      ))}
    </div>
  );
}
