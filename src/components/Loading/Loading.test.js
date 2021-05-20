import React from 'react';
import {Link} from 'react-router-dom';
import { shallow } from 'enzyme';

import Loading from './Loading';

let loadingComponent;

beforeEach(() =>{
  loadingComponent = shallow(<Loading />);
})

describe ('Loading Component',() => {

  it('renders without crashing', () => {
    expect(loadingComponent.length).toBe(1);
  });
  
});
