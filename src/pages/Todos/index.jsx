import React, { useEffect, useState } from "react";
import TodosCard from "../../components/TodosCard";
import api from "../../services/api";

export default function TodosPage() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api
      .get("todos")
      .then(({ data }) => {
        const reduceData = data.slice(0, 15);
        setApiData(reduceData);
      })
  }, []);

  return (
    <div>
      {apiData.map((data) => (
        <TodosCard
          key={data.id}
          isCompleted={data.completed}
          title={data.title}
          userID={data.userId}
        />
      ))}
    </div>
  );
}
