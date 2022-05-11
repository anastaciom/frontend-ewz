import React from "react";
import BoxNavigation from "./BoxNavigation";
import BoxTitle from "./BoxTitle";
import { HeaderStyle} from "./style";

export default function Header() {
  return (
    <HeaderStyle>
      <BoxTitle/>
      <BoxNavigation/>
    </HeaderStyle>
  );
}
