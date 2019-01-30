import React, { Component } from 'react';
import { StyleSheet,
         Text,
         View,
         Platform } from 'react-native';

import { Icon } from 'native-base'

import { createBottomTabNavigator  } from 'react-navigation'

import HomeTab from './AppTabNavigator/HomeTab'
import LikesTab from './AppTabNavigator/LikesTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import SearchTab from './AppTabNavigator/SearchTab'
import ProfileTab from './AppTabNavigator/ProfileTab'



class ManiScreen extends Component{
     
   static navigationOptions = {

    // headerLeaf: <Icon name="camera" style={{paddingLeaf:10}} />,
    // title:"Instagram",
    // headerRight: <Icon name="send" style={{paddingRight:10}} />
     header: null
   } 

   render() {
       return (
           <AppTabNavigator style={{ paddingBottom:10 }}/>
       );
   }
}
export default ManiScreen

const AppTabNavigator = createBottomTabNavigator  ({
    HomeTab:{
        screen: HomeTab
    },
    SearchTab:{
        screen: SearchTab
    },
    AddMediaTab:{
        screen: AddMediaTab
    },
    LikesTab:{
        screen:LikesTab
    },
    ProfileTab:{
        screen: ProfileTab
    }
},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:"white"
                }
            })
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel:false,
        showIcon:true
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  