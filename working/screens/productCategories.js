import React from 'react'
import Rolex from './categories/rolex'
import Rado from './categories/rado'
import JAndco from './categories/jacub'
import Ck from './categories/ck'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const productCategories = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="rolex" component={Rolex} />
      <Tab.Screen name="rado" component={Rado} />
      <Tab.Screen name="jacub" component={JAndco} />
      <Tab.Screen name="ck" component={Ck} />
    </Tab.Navigator>
    
  )
}

export default productCategories