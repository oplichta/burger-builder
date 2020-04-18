import React from 'react';
import Aud from '../../hoc/Aud';

const Layout = (props) => (
  <Aud>
    <div> Toolbar, SideDrawer, BackDrop</div>
    <main>{props.children}</main>
  </Aud>
);

export default Layout;
