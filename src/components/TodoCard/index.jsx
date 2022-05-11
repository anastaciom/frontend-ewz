import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {TodosCardStyle} from './style'
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
    <TodosCardStyle isCompleted={isCompleted}>
      <span/>
      <p><strong>Título:</strong> {title}</p>
      <p><strong>Responsável:</strong> {userName}</p>
    </TodosCardStyle>
  );
}
