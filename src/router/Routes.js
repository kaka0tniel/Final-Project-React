import React, {
    Component
} from "react";
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import {
    createStackNavigator,
    creat
} from 'react-navigation-stack'

import {
    createDrawerNavigator
} from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
import ScreenDataHotel from "../components/admin/ScreenDataHotel";
import HomeAdmin from "../components/admin/HomeAdmin";
import CreateHotel from '../components/admin/CreateHotel';
import Menu from '../components/menu';
import ListHotel from '../components/user/ListHotel';
import DetailHotel from '../components/user/DetailHotel';
import Setting from '../components/setting/setting';
import About from '../components/guest/about';
import Introduction from '../components/Introduction';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

// const guest = createStackNavigator({
//     Home: {
//         screen: Home
//     },
//     Crud: {
//         screen: Crud
//     },
//     InsertData: {
//         screen: InsertData
//     },
//     ViewData: {
//         screen: ViewData
//     }
// });

const admin = createStackNavigator({
    Menu: {
        screen: Menu
    },
    HomeAdmin: {
        screen: HomeAdmin
    },
    CreateHotel: {
        screen: CreateHotel
    },
    ScreenDataHotel: {
        screen: ScreenDataHotel
    },
    ListHotel: {
        screen: ListHotel
    },
    DetailHotel: {
        screen: DetailHotel
    },
    Setting: {
        screen: Setting
    },
    About: {
        screen: About
    }
});

const Settings = createDrawerNavigator({
    Setting: {
      screen: Setting
    }
  });

  const TabAbout = createDrawerNavigator({
    About: {
      screen: About
    }
  });
  
  const User = createDrawerNavigator({
    ListHotel: {
      screen: ListHotel
    },
    DetailHotel: {
        screen: ListHotel
    }
  });

  const tabBotomNavigation = createMaterialBottomTabNavigator({
    admin: {
      screen:admin,
      navigationOptions:{
      activeColor: '#1976d2',
      tabBarIcon:({focused})=> <Icon name="500px" size={20} color={focused ? '#1976d2' : '#757575'}/>
      }
    },
    User:{
      screen: User,
      navigationOptions:{
        activeColor: '#1976d2',
        tabBarIcon:({focused})=> <Icon name="users" size={20} color={focused ? '#1976d2' : '#757575'}/>
        }
    },
    About:{
      screen: TabAbout,
      navigationOptions:{
        activeColor: '#1976d2',
        tabBarIcon:({focused})=> <Icon name="hand" size={20} color={focused ? '#1976d2' : '#757575'}/>
        }
    },
    Setting:{
      screen: Settings,
      navigationOptions:{
        activeColor: '#1976d2',
        tabBarIcon:({focused})=> <Icon name="tools" size={20} color={focused ? '#1976d2' : '#757575'}/>
        }
    } 
  },
    {
      initialRouteName: 'admin',
      activeColor: '#1976d2',
      inactiveColor: '#757575',
      barStyle: { backgroundColor: '#ffffff' },
    });

    const AppNavigation = createSwitchNavigator({
        Introduction: Introduction,
        admin: tabBotomNavigation
        });
        
export default createAppContainer(AppNavigation);