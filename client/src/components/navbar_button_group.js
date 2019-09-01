// @flow
import React, {Component} from 'react';
import NavbarButton from './navbar_button.js'
import './css/navbar_button.css';

type State = {}
type Props = {
  menu: Array < {
    name: string
  } >
}

class NavbarButtonGroup extends Component<State, Props> {
  clickAction() {
    console.log("Hello World");
  }

  render() {
    var style = {
      width: "100%",
    }

    const buttons = this.props.menu.map((menuItem: {name: string})=> {
      return (<td key={menuItem.name}><NavbarButton
        label={menuItem.name}
        height={"20px"}
        width={"auto"}
        background="black"
        click={this.clickAction}
      /></td>);
    });

    return (
      <table style={style}>
        <tbody>
          <tr>
            {buttons}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default NavbarButtonGroup;
