import React from 'react'
import { StackNavigator } from 'react-navigation';
import PageList from './PageList'
import Page from './Page'

const SimpleApp = StackNavigator({
  Home: { screen: PageList },
  Page: { screen: Page }
});

export default SimpleApp