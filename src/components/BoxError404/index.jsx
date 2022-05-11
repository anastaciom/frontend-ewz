import React from 'react'
import {Link} from 'react-router-dom';
import Error404 from "../../assets/gifs/404.gif";
import {BoxError404Style} from './style'
export default function BoxError404() {
  return (
    <BoxError404Style>
    <img src={Error404} alt="Gif do número 404" />
    <h1>Oppss...Acho que erramos o caminho. <Link to={'/todos'}>Volte por aqui!</Link></h1>
    </BoxError404Style>
  )
}
