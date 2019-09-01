// @flow
import React, {Component} from 'react';
import NavbarButtonGroup from './navbar_button_group.js'
import './css/navbar.css';

type State = {
  width: string
}

type Props = {
  cols: Array<number>,
  data: Array<any>
}

class GridRow extends Component<State, Props> {

  getSum() {
    return this.props.cols.reduce((total,num)=> {
      return total + num;
    });
  }

  getTableCols() {
    if(this.props.cols.length != this.props.data.length || this.getSum()!=12) {
      return <td colSpan={12}></td>
    } else {
      var cols = [];
      for(var i=0;i<cols.length;i++) {
        cols.append(
          <td colSpan={this.props.cols[i]}>
            {this.props.data[i]}
          </td>
        );
      }
      return cols;
    }
  }

  render() {
    const style = {
      width: this.state.width
    }
    return (
      <table>
        <tbody>
          <tr>
            {this.getTableCols()}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default GridRow;
