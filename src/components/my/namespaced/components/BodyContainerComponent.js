'use strict';

import React from 'react';

require('styles/my/namespaced/components/BodyContainer.css');
let yeomanImage = require('../../../../images/yeoman.png');

class BodyContainerComponent extends React.Component {
  render() {
    return (
      <div className="bodycontainer-component">
      	<img src={yeomanImage} alt="Yeoman Generator" />
        Body Of the component
      </div>
    );
  }
}

BodyContainerComponent.displayName = 'MyNamespacedComponentsBodyContainerComponent';

// Uncomment properties you need
// BodyContainerComponent.propTypes = {};
// BodyContainerComponent.defaultProps = {};

export default BodyContainerComponent;
