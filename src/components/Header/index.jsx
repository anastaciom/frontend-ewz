import React from "react";
import { HeaderStyle, BoxTitleStyle, BoxNavigationStyle } from "./style";

export default function Header() {
  return (
    <HeaderStyle>
      <BoxTitleStyle>
        <h1>TodosTest</h1>
      </BoxTitleStyle>

      <BoxNavigationStyle>
        <a href="http://">Todos</a>
        <a href="http://">Usuários</a>
      </BoxNavigationStyle>
    </HeaderStyle>
  );
}
