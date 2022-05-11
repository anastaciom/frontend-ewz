import React from "react";
import Error404 from "../../assets/gifs/404.gif";
import { PageNotFoundStyle } from "./style";
import {Link} from 'react-router-dom'
export default function PageNotFound() {
  return (
    <PageNotFoundStyle>
      <div>
      <img src={Error404} alt="Gif do número 404" />
      <h1>Oppss...Acho que erramos o caminho. <Link to={'/todos'}>Volte por aqui!</Link></h1>
      </div>
    </PageNotFoundStyle>
  );
}
