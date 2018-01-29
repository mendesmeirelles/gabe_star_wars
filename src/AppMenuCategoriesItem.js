import React from 'react';

import MenuItem from 'material-ui/MenuItem';

const style = {
};

const AppMenuCategoriesItem = ({categorie, onSelectCategorie}) => {
  return (
    <MenuItem
      style={style}
      primaryText={categorie}
      onClick={onSelectCategorie}
      />
  );
}

AppMenuCategoriesItem.propTypes = {
  categorie: React.PropTypes.string.isRequired,
  onSelectCategorie: React.PropTypes.func.isRequired
}

export default AppMenuCategoriesItem;