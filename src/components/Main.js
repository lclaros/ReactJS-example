require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Name from './my/namespaced/components/NameComponent';
import HeaderContainer from './my/namespaced/components/HeaderContainerComponent';
import BodyContainer from './my/namespaced/components/BodyContainerComponent';
import FootContainer from './my/namespaced/components/FootContainerComponent';

class AppComponent extends React.Component {
  render() {
    return (
	      	<div className="index">
	        <HeaderContainer />
    		<BodyContainer />
    		<FootContainer />
	      	</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
