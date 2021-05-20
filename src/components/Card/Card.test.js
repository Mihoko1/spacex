import React from 'react';
import {Link} from 'react-router-dom';
import { shallow } from 'enzyme';

import Card from './Card';

let cardComponent;

beforeEach(() =>{
  cardComponent = shallow(<Card />);
})

describe ('Card Component',() => {

  it('renders without crashing', () => {
    expect(cardComponent.length).toBe(1);
  });

});
