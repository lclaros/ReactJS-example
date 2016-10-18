/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import BodyContainerComponent from 'components/my/namespaced/components/BodyContainerComponent.js';

describe('BodyContainerComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(BodyContainerComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('bodycontainer-component');
  });
});
