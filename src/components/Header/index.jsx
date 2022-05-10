import React from "react";
import { HeaderStyle, BoxTitleStyle, BoxNavigationStyle } from "./style";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderStyle>
      <BoxTitleStyle>
        <h1>TodosTest</h1>
      </BoxTitleStyle>

      <BoxNavigationStyle>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Usuários</Link>
      </BoxNavigationStyle>
    </HeaderStyle>
  );
}
