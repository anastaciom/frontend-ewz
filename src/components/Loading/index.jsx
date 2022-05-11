import React from 'react'
import BarLoader from "react-spinners/BarLoader";
import {LoadingStyle} from './style';
export default function Loading({loading}) {
  return (
    <LoadingStyle>
          <BarLoader color={"#fff"} size={200} loading={loading} />
          <h1>Carregando...</h1>
        </LoadingStyle>
  )
}
