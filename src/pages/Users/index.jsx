import React from "react";
import UsersGrid from "../../components/UsersGrid";
import { DashboardUsersStyle} from "./style";
export default function UsersPage() {

  return (
    <DashboardUsersStyle>
      <h1>Usuários</h1>
      <UsersGrid/>
    </DashboardUsersStyle>
  );
}
