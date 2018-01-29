import React, { Component } from 'react';

import AppMenuCategoriesItem from './AppMenuCategoriesItem';

class AppMenuCategories extends Component {
  render() {
    const menuCategories = this.props.categories.map((categorie, index) =>
      <AppMenuCategoriesItem
      key={index}
      categorie={categorie}
      onSelectCategorie={this.props.onSelectCategorie}/>
    );

    return (
      <div>{menuCategories}</div>
    )
  }
}

AppMenuCategories.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onSelectCategorie: React.PropTypes.func.isRequired
}

export default AppMenuCategories;
//TODO fix divider


