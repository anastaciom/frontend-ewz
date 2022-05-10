import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { LayoutStyle } from "./style";

export default function Layout() {
  return (
    <LayoutStyle>
      <Header />
      <Outlet />
    </LayoutStyle>
  );
}
