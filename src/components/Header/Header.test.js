import React from 'react';
import {Link} from 'react-router-dom';
import { shallow } from 'enzyme';

import Header from './Header';

let headerComponent;

beforeEach(() =>{
  headerComponent = shallow(<Header />);
})

describe ('Head Component',() => {

  it('renders without crashing', () => {
    expect(headerComponent.length).toBe(1);
  });

  it('Link is included', () => {
    expect(headerComponent.find('Link').length).toEqual(3);
  });

});
