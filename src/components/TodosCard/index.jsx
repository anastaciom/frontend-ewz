import React, { useEffect, useState } from "react";
import api from "../../services/api";
export default function TodosCard({ title, isCompleted, userID }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    api
      .get(`users/${userID}`)
      .then(({ data }) => {
        setUserName(data.name);
      })
  }, [userID]);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{isCompleted}</h2>
      <h3>{userName}</h3>
    </div>
  );
}
