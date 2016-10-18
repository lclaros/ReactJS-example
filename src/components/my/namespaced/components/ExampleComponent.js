'use strict';

import React from 'react';

require('styles/my/namespaced/components/Example.css');

let ExampleComponent = (props) => (
  <div className="example-component">
    Please edit src/components/my/namespaced/components//ExampleComponent.js to update this component!
  </div>
);

ExampleComponent.displayName = 'MyNamespacedComponentsExampleComponent';

// Uncomment properties you need
// ExampleComponent.propTypes = {};
// ExampleComponent.defaultProps = {};

export default ExampleComponent;
