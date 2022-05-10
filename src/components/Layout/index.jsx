import React from "react";
import Header from "../Header";
import { LayoutStyle } from "./style";

export default function Layout({children}) {
  return (
    <LayoutStyle>
      <Header />
      {children}
    </LayoutStyle>
  );
}
