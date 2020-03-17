import React, { Component } from "react";

import Aux from "../auxHOC/auxHOC";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggleHandler = prevState => {
    this.setState({ showSideDraw: !prevState.showSideDraw });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDraw}
          closed={this.sideDrawerClosedHandler}
        />
        <div>SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
