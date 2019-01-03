import React, { Component } from 'react';
import { Form, Item,  Container, Header, Title, Content, Card, CardItem, Button, Right, Body, Text } from 'native-base';
import { StyleSheet, Alert, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class AnatomyExample extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      notes: [],
    }
  }

  createNote() {
    this.setState ({
      title: <Form>
              <Item floatingLabel>
                <Label>Title...</Label>
                <Input />
              </Item>
             </Form>,
      body:  <Form>
              <Textarea rowSpan={5} bordered placeholder="Body..." />
             </Form>,
      notes: this.state.notes.push (
        <Card>
          <CardItem header>
            <Text>
              { this.state.title }
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                { this.state.body }
              </Text>
            </Body>
          </CardItem>
        </Card>
      )
    })

  }

  render() {

    var notes = []

    return (
      <ImageBackground source={{uri: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?cs=srgb&dl=android-wallpaper-dawn-dusk-1420440.jpg'}} style={{width: '100%', height: '100%'}}>
        <Header />
        <Button onPress={() => this.createNote()} rounded style={styles.addButton}><Icon name="plus"/></Button>
        { this.state.notes }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  addButton: {
    backgroundColor: '#fff',
    color: '#260d01',
    alignSelf: 'flex-end',
  },

})
