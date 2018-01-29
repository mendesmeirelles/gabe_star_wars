import React from 'react';

import {TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import {HardwareKeyboardArrowLeft, HardwareKeyboardArrowRight} from 'material-ui/svg-icons'

const arrowsStyle = {
}

const TableRowColumnStyle = {
  display:'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  paddingLeft: '0.6em',
  paddingRight: '0.6em'
}

const AppTableNavigation = ({onClickNext, onClickPrevious, next, previous}) => {
  return (
    <TableRowColumn style={TableRowColumnStyle}>
      <IconButton style={arrowsStyle}
                  onClick={onClickPrevious}>
        {previous !== '' && <HardwareKeyboardArrowLeft />}
      </IconButton>
      <IconButton style={arrowsStyle}
                  onClick={onClickNext}>
        {next !== '' && <HardwareKeyboardArrowRight />}
      </IconButton>
    </TableRowColumn>
  );
}

export default AppTableNavigation;