import React from "react";

import { SidebarContainer } from "./styles";

function Sidebar({ activeCart }) {
  return (
    <SidebarContainer isActive={activeCart}>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
    </SidebarContainer>
  );
}

export default Sidebar;
