'use strict';

import React from 'react';

require('styles/my/namespaced/components/ProductRegister.css');

class ProductRegisterComponent extends React.Component {
  render() {
    return (
      <div className="productregister-component">
        Please edit src/components/my/namespaced/components//ProductRegisterComponent.js to update this component!
      </div>
    );
  }
}

ProductRegisterComponent.displayName = 'MyNamespacedComponentsProductRegisterComponent';

// Uncomment properties you need
// ProductRegisterComponent.propTypes = {};
// ProductRegisterComponent.defaultProps = {};

export default ProductRegisterComponent;
