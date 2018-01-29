import React, { Component } from 'react';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import { categorieDisplayedProperty } from './constants'


class AppTableEntrie extends Component {
    render() {
      let propertyToDisplay = categorieDisplayedProperty[this.props.currentCategorie]
      return (
        <TableRow onClick={() => this.props.onSelectItem(this.props.entrie)}>
          <TableRowColumn>{this.props.entrie[propertyToDisplay]}</TableRowColumn>
        </TableRow>)
    }
}

export default AppTableEntrie;