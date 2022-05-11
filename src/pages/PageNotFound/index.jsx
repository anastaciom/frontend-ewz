import React from "react";
import BoxError404 from "../../components/BoxError404";
import { PageNotFoundStyle } from "./style";
export default function PageNotFound() {
  return (
    <PageNotFoundStyle>
      <BoxError404 />
    </PageNotFoundStyle>
  );
}
