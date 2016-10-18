'use strict';

import React from 'react';

require('styles/my/namespaced/components/HeaderContainer.css');
require('styles/App.css');

class HeaderContainerComponent extends React.Component {
  render() {
    return (
      <div className="headercontainer-component">
      <div className="notice">Header of the application!</div>
      </div>
    );
  }
}

HeaderContainerComponent.displayName = 'MyNamespacedComponentsHeaderContainerComponent';

// Uncomment properties you need
// HeaderContainerComponent.propTypes = {};
// HeaderContainerComponent.defaultProps = {};

export default HeaderContainerComponent;
