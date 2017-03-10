import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import GALLERY_TEST from '../js/testData';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Testing Gallery component', function() {
  it('should return a <div> w / className=gallery', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Gallery images={GALLERY_TEST} />);
    const result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
    console.log(result.props);
  })
})
