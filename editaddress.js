import React from 'react';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import {
    View,
    Text,TextInput,
    Image,StatusBar,
    Dimensions,Button,
    StyleSheet,ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import { genericTypeAnnotation } from '@babel/types';

export default class AddAddress extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
       first:null,
       last:null,
       phoneno:null,
       pincode:null,
       town:null,
       state:null,
       flat:null,
       area:null,
       landmark:null
    };
  }

  componentDidMount() {

    axios.post('http://35.229.19.138:8080/addressbyid/', {
     id : this.props.navigation.state.params.id
    })
    .then((response) => {
        console.log(response);
     this.setState({area:response.data.output[0].Area,
        first:response.data.output[0].FirstName,
        flat:response.data.output[0].Flat,
        landmark: response.data.output[0].Landmark,
        last:response.data.output[0].LastName,
        phoneno:response.data.output[0].PhoneNo.substring(3, response.data.output[0].PhoneNo.length),
        pincode : response.data.output[0].Pincode,
        state:response.data.output[0].State,
        town:response.data.output[0].Town
    })
    })
    .catch((e) => 
    {
      console.error(e);
    });
    
  }

 addmyaddress(val1,val2,val3,val4,val5,val6,val7,val8,val9) {
 if(val1 != null && val2 && null && val3 != null && val4 != null && val5 != null && val6 != null &&  val7 != null &&  val8 != null &&  val9 != null)
 {
    axios.post('http://35.229.19.138:8080/updateaddress/', {
      phone : "+91"+val1,
      pincode : val2,
      type : "Other",
      lastname : val3,
      firstname : val4,
      town : val5,
      state: val6,
      flat : val7,
      area: val8,
      landmark: val9,
      latitude: 34.05,
      longitude: 77.77,
      id:this.props.navigation.state.params.id

    })
    .then((response) => {
        console.log(response);
     if(response.status==200)
     {
        
       alert("Address updated successfully");
       this.props.navigation.navigate('Details2');
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
  }

  render() {
    return (
    <View>
         <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   Edit address
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
                                Change delivery address details
                            </Text>
<View style={{marginRight:10,marginLeft:10,marginTop:5,borderColor:'black',borderWidth:1}}>
         <TextInput style={styles.inputs}
              placeholder="First name"
              underlineColorAndroid='transparent'
              value={this.state.first}
              onChangeText={(first) => this.setState({first})}
              />
                <TextInput style={styles.inputs}
              placeholder="Last name"
              underlineColorAndroid='transparent'
              value={this.state.last}
              onChangeText={(last) => this.setState({last})}
              />
              <TextInput style={styles.inputs}
              placeholder="Mobile number"
              underlineColorAndroid='transparent'
              value={this.state.phoneno}
              onChangeText={(phoneno) => this.setState({phoneno})}
              keyboardType={'numeric'}/>
              <TextInput style={styles.inputs}
              placeholder="Pincode"
              underlineColorAndroid='transparent'
              value={this.state.pincode}
              onChangeText={(pincode) => this.setState({pincode})}
              keyboardType={'numeric'}/>
              <TextInput style={styles.inputs}
              placeholder="Town/City"
              value={this.state.town}
              onChangeText={(town) => this.setState({town})}
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="State"
              value={this.state.state}
              onChangeText={(state) => this.setState({state})}
              underlineColorAndroid='transparent'
              />
              <TextInput style={styles.inputs}
              placeholder="Flat,House no.,Building,Company,Apartment"
              value={this.state.flat}
              onChangeText={(flat) => this.setState({flat})}
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="Area,Colony,Street,Sector,Village"
              underlineColorAndroid='transparent'
              value={this.state.area}
              onChangeText={(area) => this.setState({area})}
              />
              <TextInput style={styles.inputs}
              placeholder="Landmark eg. near apsra theatre"
              underlineColorAndroid='transparent'
              value={this.state.landmark}
              onChangeText={(landmark) => this.setState({landmark})}
              />
             
</View>
<View style={{marginRight:10,marginLeft:10,marginTop:5}}>
<Button
  title="Update Address"
  color="green"
  onPress={() => this.addmyaddress(this.state.phoneno,this.state.pincode,this.state.last,this.state.first,this.state.town,this.state.state,this.state.flat,this.state.area,this.state.landmark)}
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
