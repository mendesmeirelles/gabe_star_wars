import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';

import AppMenuCategories from './AppMenuCategories';
import { getData } from './DataFetching';
import Loading from './Loading';

const style = {
  maxWidth: '100%',
};

let categoriesName = [];


class AppMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories : null
    }
  }

 
  componentWillMount() {
    getData('')
      .then(data => {
        this.setState({categories: data});

      });
  }

  render() {
    if (this.state.categories){
      categoriesName = Object.keys(this.state.categories) 
      return (
        <div style={this.props.containersStyle}>
          <Paper rounded={this.props.rounded} zDepth={this.props.zDepth}>
            <Menu style={style}>
              <AppMenuCategories
                categories={categoriesName}
                onSelectCategorie={this.props.onSelectCategorie}/>
            </Menu>
          </Paper>
        </div>
      );
    }

    return (
      <Loading
        containersStyle={this.props.containersStyle}
        rounded={this.props.rounded}
        zDepth={this.props.zDepth} />
    )
  }
}

AppMenu.propTypes = {
  containersStyle: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired,
  onSelectCategorie: React.PropTypes.func.isRequired
}

export default AppMenu;
