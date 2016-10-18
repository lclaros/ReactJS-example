'use strict';

import React from 'react';

require('styles/my/namespaced/components/Product.css');

let ProductComponent = (props) => (
  <div className="product-component">
    Please edit src/components/my/namespaced/components//ProductComponent.js to update this component!
  </div>
);

ProductComponent.displayName = 'MyNamespacedComponentsProductComponent';

// Uncomment properties you need
// ProductComponent.propTypes = {};
// ProductComponent.defaultProps = {};

export default ProductComponent;
