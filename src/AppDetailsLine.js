import React from 'react';

const style = {
  detailKey:{

  },
  value:{
  overflowWrap:'break-word'
  }
};

const AppDetailsLine = ({detailKey, value}) => {
  return (
    <p>
      <b style={style.detailKey}>
        {detailKey}
      </b>
      <br/>
      <span style={style.value}>
        {value}
      </span>
    </p>
  );
}

AppDetailsLine.propTypes = {
}

export default AppDetailsLine;