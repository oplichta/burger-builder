import React from 'react';
import Aud from '../../hoc/Aud';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
  <Aud>
    <Toolbar />
    <div>SideDrawer</div>
    <main className="Content">{props.children}</main>
  </Aud>
);

export default Layout;
