import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Left, Body, Right, Title } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component{
  static navigationOptions = {
      tabBarIcon: ({tintColor}) =>(
          <Icon name="home" style={{ color:
          tintColor }} />
      )
  }
  render() {
      return (  
          <Container style={styles.container}>

             <Header style={{backgroundColor: '#ffffff'}}>
                 <Left><Icon name= 'camera' style={{paddingLeaf:10}} ></Icon></Left>
                 <Body><Text>Instagram</Text></Body>
                 <Right><Icon name= 'send' style={{paddingRight:10}} ></Icon></Right>
             </Header>

              <Content>
                  <View style={{height: 100}}>
                    <View style={{ flex:1, flexDirection: 'row', 
                    justifyContent: 'space-between', alignItems: 'center',
                    paddingHorizontal: 7, }}>
                      <Text>Stories</Text>
                      <Text>Watch All</Text>  
                    </View>
                    <View style={{ flex:3 }}>
                       <ScrollView horizontal={true} 
                       showsHorizontalScrollIndicator= {false}
                       contentContainerStyle={{
                           paddingStart:5,
                           paddingEnd:5,
                           alignItems:'center'
                       }} >
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/smiling_man.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p2.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p3.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p4.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p5.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p6.jpg')}/>
                         <Thumbnail style={{marginHorizontal:5, borderColor: 'pink',
                         borderWidth: 2 }}
                         source={require('../../assets/p7.jpg')}/>
                       </ScrollView>
                    </View>  
                  </View>

                  <CardComponent imageSource= "1" likes= "101" />
                  <CardComponent imageSource= "2" likes= "201" />
                  <CardComponent imageSource= "3" likes= "301" />
                                    
              </Content>
          </Container>
      );
  }
}
export default HomeTab


const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFFFFF',
   },
 });