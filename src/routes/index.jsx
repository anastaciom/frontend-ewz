import React from "react";
import Layout from "../components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "../pages/Todos";
import Users from "../pages/Users";
import PageNotFound from "../pages/PageNotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Layout />}>
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
