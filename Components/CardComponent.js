import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container, Content, Header, Left, Body, Right, 
    Button, Icon, Title, Footer, FooterTab, Card, CardItem, Thumbnail } from 'native-base';

class CardComponent extends Component{
    render() {

        const images = {
            "1": require('../assets/1.jpg'),
            "2": require('../assets/2.jpg'),
            "3": require('../assets/3.jpg')
        }

        return (
            <Card>
                <CardItem>
                    <Thumbnail source={require('../assets/smiling_man.jpg')}/>
                    <Body>
                        <Text>Raju</Text>
                        <Text note>Jan 24, 2019</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} 
                    style={{ height: 200, width: null, flex:1 }}/>
                </CardItem>
                <CardItem style={{height: 45}}>
                  <Left>  
                    <Button transparent>
                      <Icon name='heart' style={{color:'black'}} />
                    </Button>
                    <Button transparent>
                      <Icon name='chatbubbles' style={{color:'black'}} />
                    </Button>
                    <Button transparent>
                      <Icon name='send' style={{color:'black'}} />
                    </Button>
                  </Left> 
                </CardItem>

                <CardItem style={{ height: 20 }}>
                    <Text>{this.props.likes}likes</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                        Adding alternative text to photos is first and 
                        foremost a principle of web accessibility. Visually 
                        impaired users using screen readers will be read an 
                        alt attribute to better understand an on-page image.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
 });