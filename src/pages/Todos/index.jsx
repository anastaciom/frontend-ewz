import React, { useEffect, useState } from "react";
import TodoGrid from "../../components/TodoGrid";
import { DashboardTodosStyle } from "./style";
import api from "../../services/api";
import Loading from "../../components/Loading";

export default function TodosPage() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api.get("todos").then(({ data }) => {
      const reduceData = data.slice(0, 15);
      setApiData(reduceData);
    });
  }, []);

  return (
    <>
      {apiData.length === 0 ? (
        <Loading loading={apiData.length === 0}/>
      ) : (
        <DashboardTodosStyle>
          <h1>Todos os todos</h1>
          <TodoGrid apiData={apiData} />
        </DashboardTodosStyle>
      )}
    </>
  );
}
