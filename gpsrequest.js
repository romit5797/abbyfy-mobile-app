import React, { Component } from 'react';
import Geolocation from 'react-native-geolocation-service';
import {  AsyncStorage,StyleSheet,StatusBar,Dimensions,ScrollView,TextInput, Text, View, PermissionsAndroid, Alert, Button,Platform } from 'react-native';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import Test from './test';
import axios from 'axios';
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
      first:null,
      last:null,
      gstin:null,
      pincode:null,
      town:null,
      state:null,
      flat:null,
      area:null,
      landmark:null,
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

  addmyaddress(val1,val2,val3,val4,val5,val6,val7,val8,val9) {

    let x=0;
    AsyncStorage.getItem('phone').then((token) => {
    if(val1!=null && val2!=null && val3 != null && val4 != null && val5 != null && val6 != null &&  val7 != null &&  val8 != null &&  val9 != null)
    {
      axios.post('http://35.229.19.138:8080/adduser/', {
     phone : '+91'+token,
     last : val3,
     first: val4,
     gstin: val1
    })
    .then((response) => {
     
    })
    .catch((e) => 
    {
      console.error(e);
    });


      axios.post('http://35.229.19.138:8080/addaddress/', {
        phone : "+91"+token,
        pincode : val2,
        type : "Default",
        lastname : val3,
        firstname : val4,
        town : val5,
        state: val6,
        flat : val7,
        area: val8,
        landmark: val9,
        latitude: this.state.latitude,
        longitude: this.state.longitude
  
      })
      .then((response) => {
       
        if(response.status==200)
        {
         this.props.navigation.navigate('Details', {
         });
        }
        else {
          alert("Something went wrong");
        }
       
      })
      .catch((e) => 
      {
        console.error(e);
      });

     

    }
    else{
        alert("Enter all the details..");
    }
  })
  
    }

  render() {

    return (

      <View>
         <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
  User Details
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
<ScrollView
         scrollEventThrottle={16}>
        <Text style={{ fontSize: 24, fontWeight: '700', marginLeft:10 }}>
                                Enter all details to proceed
                            </Text>
<View style={{marginRight:10,marginLeft:10,marginTop:5,borderColor:'black',borderWidth:1}}>
         <TextInput style={styles.inputs}
              placeholder="First name"
              underlineColorAndroid='transparent'
              onChangeText={(first) => this.setState({first})}
              />
                <TextInput style={styles.inputs}
              placeholder="Last name"
              underlineColorAndroid='transparent'
              onChangeText={(last) => this.setState({last})}
              />
              <TextInput style={styles.inputs}
              placeholder="GSTIN"
              underlineColorAndroid='transparent'
              onChangeText={(gstin) => this.setState({gstin})}
              />
              <TextInput style={styles.inputs}
              placeholder="Pincode"
              underlineColorAndroid='transparent'
              onChangeText={(pincode) => this.setState({pincode})}
              keyboardType={'numeric'}/>
              <TextInput style={styles.inputs}
              placeholder="Town/City"
              onChangeText={(town) => this.setState({town})}
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="State"
              onChangeText={(state) => this.setState({state})}
              underlineColorAndroid='transparent'
              />
              <TextInput style={styles.inputs}
              placeholder="Flat,House no.,Building,Company,Apartment"
              onChangeText={(flat) => this.setState({flat})}
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="Area,Colony,Street,Sector,Village"
              underlineColorAndroid='transparent'
              onChangeText={(area) => this.setState({area})}
              />
              <TextInput style={styles.inputs}
              placeholder="Landmark eg. near apsra theatre"
              underlineColorAndroid='transparent'
              onChangeText={(landmark) => this.setState({landmark})}
              />
             
</View>
<View style={{marginRight:10,marginLeft:10,marginTop:5}}>
<Button
  title="NEXT"
  color="green"
  onPress={() => this.addmyaddress(this.state.gstin,this.state.pincode,this.state.last,this.state.first,this.state.town,this.state.state,this.state.flat,this.state.area,this.state.landmark)}
  />
  </View>
  <View style={{paddingBottom:200}}/>
  </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight,
            }
        })
    },
    scroller:{
        marginBottom:36
       },
       headercontainer: {  
           backgroundColor:"green",
           paddingTop:10,
           paddingBottom:10,
           paddingLeft:10,
           paddingRight:10 
       }, 
       slidercontainer: {  
           flex: 1,  
           marginTop:10,
           marginBottom:10,
           marginLeft:10,
           marginRight:10 
       }, 
       logoText: {
           color: "white",
           fontWeight: "bold",
           fontSize: 16,
           alignItems: "flex-start",
           marginLeft: 10
         },
         listItemContainer: {
           
           height:50,
           flexDirection: "row",
           alignItems: "center",
           backgroundColor:"#DCDCDC",
           borderColor: "rgba(92,94,94,0.5)",
           borderWidth: 0.25,
           padding: 1
         },
         iconContainer: {
           flex: 1,
           alignItems: "flex-start"
         },
         callerDetailsContainer: {
           flex: 4,
           justifyContent: "center"
          
         },
         callerDetailsContainerWrap: {
           flex: 1,
           alignItems: "center",
           flexDirection: "row"
         },
         nameContainer: {
           alignItems: "flex-start",
           flex: 1
         },
         dateContainer: {
           flexDirection: "row",
           justifyContent: "space-between",
           alignItems: "center"
         },
         callIconContainer: {
           flex: 1,
           alignItems: "flex-end"
         },
         initStyle: {
           borderRadius: 30,
           width: 60,
           height: 60
         } ,
         navBar: {
          
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
           backgroundColor: 'green',
         },
         leftContainer: {
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-start',
           backgroundColor: 'green'
         },
         rightContainer: {
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-end',
           alignItems: 'center',
           backgroundColor: 'green',
         },
         rightIcon: {
           height: 10,
           width: 10,
           resizeMode: 'contain',
           backgroundColor: 'green',
         },
         inputContainer: {
           backgroundColor: '#FFFFFF',
           borderRadius:5,
           borderBottomWidth: 1,
           width: Dimensions.get('window').width*0.95,
           height:35,
           flexDirection: 'row',
           alignItems:'center'
       },
       inputs:{
           color : 'grey',
           borderBottomColor: "#DCDCDC",
           borderBottomWidth:1
       },
       inputIcon:{
         width:20,
         height:20,
         marginLeft:20,
         justifyContent: 'center'
       }
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

  