import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import Main from './pages/main';
import Maps from './pages/maps';
import ExpoCamera from './pages/Camera';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
          
          
          tabBarIcon:({color})=> 
          <Feather name='home' size={20} color={color}/>}} 
          name="Home" component={Main} />
          
          <Tab.Screen options={{
          tabBarIcon:({color})=> <Feather name='home' size={20} color={color}/>}} 
          name="Navegar" component={ExpoCamera} />
        
        <Tab.Screen options={{
          tabBarIcon:({color})=> <Feather name='map-pin' size={20} color={color}/>}} 
          name="LocalAtual" component={Maps} />
       

      </Tab.Navigator>
    </NavigationContainer>
  );
}