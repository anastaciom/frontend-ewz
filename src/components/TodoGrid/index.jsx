import React, { useEffect, useState } from "react";
import TodoCard from "../../components/TodoCard";
import api from "../../services/api";
import { GridAreaStyle } from "./style";

export default function TodoGrid() {
    
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api.get("todos").then(({ data }) => {
      const reduceData = data.slice(0, 15);
      setApiData(reduceData);
    });
  }, []);

  return (
    <GridAreaStyle>
      {apiData.map((data) => (
        <TodoCard
          key={data.id}
          isCompleted={data.completed}
          title={data.title}
          userID={data.userId}
        />
      ))}
    </GridAreaStyle>
  );
}
