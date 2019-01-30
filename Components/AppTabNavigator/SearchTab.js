import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native';

import { Icon, Container, Content, Header, Button } from 'native-base'

var image = [
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
    require('../../assets/1.jpg'),
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
]

var {width,height} = Dimensions.get('window')

class SearchTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) =>(
            <Icon name="search" style={{ color:
            tintColor }} />
        )
    }
    renderSection = () => {
        return image.map((image)=>{
            return(
                <View style={[ {width:width/3}, {height:width/3}, 
                {marginBottom: 2}]}>
                   <Image style={{flex:3, width:undefined, height:undefined}} 
                   source={image}/>
                </View>
            )
        })
     }

  render() {
      return (
          <Container style={{flex: 1, backgroundColor: 'white'}}>
              <Header style={{backgroundColor: 'white'}}>
                  <View style={{flexDirection: 'row', padding: 10, }}>
                  <Button bordered dark 
                          style={{flex: 1, marginLeft: 10, 
                          justifyContent: 'center', height: 30 }}>
                          <Icon name= 'search' size={24} />
                             <Text>search</Text>
                          </Button>
                     
                  </View>

              </Header>
              <Content>
                  <View style={{paddingTop: 10,}}>
                      {this.renderSection()}
                  </View>
              </Content>
          </Container>
      );
  }
}
export default SearchTab


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });