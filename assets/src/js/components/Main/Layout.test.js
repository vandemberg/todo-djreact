// Game/game.test.js
import React from 'react'
import MainLayout from './Layout'
import {shallow} from 'enzyme'
import './../../../setUpTests';

it('renders layout without crashing', () => {
  shallow(<MainLayout />);
});