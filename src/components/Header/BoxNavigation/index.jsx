import React from 'react'
import {BoxNavigationStyle} from './style'
import { Link } from "react-router-dom";

export default function BoxNavigation() {
  return (
    <BoxNavigationStyle>
    <Link to="/todos">Todos</Link>
    <Link to="/users">Usuários</Link>
  </BoxNavigationStyle>
  )
}
