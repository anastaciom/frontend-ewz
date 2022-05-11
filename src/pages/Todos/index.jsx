import React from "react";
import TodoGrid from "../../components/TodoGrid";
import { DashboardTodosStyle} from "./style";

export default function TodosPage() {

  return (
    <DashboardTodosStyle>
      <h1>Todos os todos</h1>
     <TodoGrid/>
    </DashboardTodosStyle>
  );
}
