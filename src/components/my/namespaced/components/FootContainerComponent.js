'use strict';

import React from 'react';

require('styles/my/namespaced/components/FootContainer.css');

class FootContainerComponent extends React.Component {
  render() {
    return (
      <div className="footcontainer-component" >
        This is the foot component
      </div>
    );
  }
}

FootContainerComponent.displayName = 'MyNamespacedComponentsFootContainerComponent';

// Uncomment properties you need
// FootContainerComponent.propTypes = {};
// FootContainerComponent.defaultProps = {};

export default FootContainerComponent;
