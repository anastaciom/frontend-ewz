import React, { useState, useEffect } from "react";
import api from "../../services/api";
import UsersGrid from "../../components/UsersGrid";
import { DashboardUsersStyle } from "./style";
import Loading from "../../components/Loading";
export default function UsersPage() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    api.get("users").then(({ data }) => {
      setUsersData(data);
    });
  }, []);

  return (
    <>
      {usersData.length === 0 ? (
        <Loading loading={usersData.length === 0} />
      ) : (
        <DashboardUsersStyle>
          <h1>Usuários</h1>
          <UsersGrid usersData={usersData} />
        </DashboardUsersStyle>
      )}
    </>
  );
}
