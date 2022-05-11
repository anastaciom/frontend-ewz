import React from "react";
import TodoCard from "../../components/TodoCard";
import { GridAreaStyle } from "./style";
export default function TodoGrid({apiData}) {
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
