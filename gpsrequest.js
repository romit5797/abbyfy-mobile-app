import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { StyleSheet, Text, View, PermissionsAndroid, Alert, Button,Platform } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import Test from './test';
export async function request_device_location_runtime_permission() {
 
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'ReactNativeCode Location Permission',
        'message': 'ReactNativeCode App needs access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
 
      Alert.alert("Location Permission Granted.");
    }
    else {
 
      Alert.alert("Location Permission Not Granted");
 
    }
  } catch (err) {
    console.warn(err)
  }
}

 class GpsRequest extends Component {

  constructor(){

    super()

    this.state={

      latitude : 0,
      longitude : 0,
      error : null

    }
  }

  async componentDidMount() {
 
    if(Platform.OS === 'android')
    {

    await request_device_location_runtime_permission();

    }

    this.getLongLat = Geolocation.watchPosition(
      (position) => {
          
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
       
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 100, distanceFilter: 10 },
    );

  }

  componentWillUnmount() {

   Geolocation.clearWatch(this.getLongLat);

  }

  proceedtonext()
  {
    this.props.navigation.navigate('Details', {
    });
  }

  render() {

    return (

      <View style={styles.MainContainer}>

        <Text style={styles.text}> Latitude = {this.state.latitude}</Text>

        <Text style={styles.text}> Longitude = {this.state.longitude}</Text>
        <Button
  onPress={() => this.proceedtonext() }
  title="Next"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  text:
  {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },

});

const RootStack = createStackNavigator(
    {
        DefaultScreen : GpsRequest,
      Details: Test,
    },
    {
      initialRouteName: 'DefaultScreen',
      headerMode: 'none'
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
export default class VerifyOtp extends React.Component {
    render() {
      return <AppContainer screenProps={this.props.navigation.state.params.phone}/>;
    }
  }

  