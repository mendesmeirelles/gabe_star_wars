import React from 'react';

import Paper from 'material-ui/Paper';

const Loading = ({containersStyle, rounded, zDepth}) => {
  return (
    <div style={containersStyle}>
      <Paper rounded={rounded} zDepth={zDepth}>
        <p>Loading...</p>
      </Paper>
    </div>
  )
}

Loading.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
}

export default Loading;
