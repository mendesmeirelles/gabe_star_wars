import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import { title, githubURL } from './constants';

const titleStyle = {
  textAlign:'center',
  backgroundColor:'black'
}

class AppTitleBar extends Component {

  handleClickLeftIcon(){
    window.location.href = githubURL
  }

  render() {
    return (
      <AppBar
        title={title}
        style={titleStyle}
        onTitleTouchTap={this.props.onClickOnTitle}
        iconClassNameLeft='fa fa-github'
        onLeftIconButtonTouchTap={this.handleClickLeftIcon}
      />
    )
  }
};

export default AppTitleBar;