import React, { Component } from "react";
import Aux from "../../hoc/auxHOC";
import Burger from "../../components/Buger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}
export default BurgerBuilder;
