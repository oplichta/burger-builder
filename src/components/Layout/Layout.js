import React from 'react';
import Aud from '../../hoc/Aud';
import './Layout.css';

const Layout = (props) => (
  <Aud>
    <div> Toolbar, SideDrawer, BackDrop</div>
    <main className="Content">{props.children}</main>
  </Aud>
);

export default Layout;
