import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { Button, Text } from 'native-base';
import { Font } from 'expo';
import Loader from "react-native-modal-loader";

export default class Profile extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
      isLoading: true,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'defaultFont': require('../assets/Fonts/Archivo_Narrow/ArchivoNarrow-Bold.ttf'),
      'viewFont': require('../assets/Fonts/Abril_Fatface/AbrilFatface-Regular.ttf'),
      'titleFont': require('../assets/Fonts/Josefin_Slab/JosefinSlab-Bold.ttf'),
    })

    this.setState({ fontLoaded: true})
  }

  render() {
    if (this.state.fontLoaded === true) {
      return (
        <View style={{backgroundColor: '#171717'}}>
          <View style={{backgroundColor: '#fff', textAlign: 'center', marginTop: 40}}>
            <Text style={{color: '#000', marginTop: 40, fontSize: 25, fontFamily: 'titleFont'}}>{this.props.name}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <Loader loading={this.state.isLoading} color="#171717" />
      )
    }
  }
}
