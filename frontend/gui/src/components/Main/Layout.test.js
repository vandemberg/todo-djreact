// Game/game.test.js
import React from 'react'
import MainLayout from './Layout'
import {shallow} from 'enzyme'

it('renders layout without crashing', () => {
  shallow(<MainLayout />);
});