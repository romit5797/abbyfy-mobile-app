import React, { Component } from "react";
import {
    View,Button,
    Text, AsyncStorage,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,ScrollView,
    Image,Dimensions
} from "react-native";
import AddAddress from './addAddress';
import Icon from 'react-native-vector-icons/Ionicons';  
import { Container, Content, Header,Left,Body,ListItem, Right, Item, Input, Card, CardItem } from 'native-base'
import ItemCard from './itemscard';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import axios from 'axios';
import EditAddress from './editaddress';

class MyAddresses extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
default:[],
other:[]
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
    AsyncStorage.getItem('phone').then((token) => {
    axios.post('http://35.229.19.138:8080/addresstype/', {
      phone: '+91'+token,
      type: 'Default'
    })
    .then((response) => {
     this.setState({default: response.data.output});
    })
    .catch((e) => 
    {
      console.error(e);
    });


    axios.post('http://35.229.19.138:8080/addresstype/', {
      phone: '+91'+token,
      type: 'Other'
    })
    .then((response) => {
      this.setState({other: response.data.output});
    })
    .catch((e) => 
    {
      console.error(e);
    });
  })
})
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  refreshaddress()
  {
    AsyncStorage.getItem('phone').then((token) => {
      axios.post('http://35.229.19.138:8080/addresstype/', {
        phone: '+91'+token,
        type: 'Default'
      })
      .then((response) => {
       this.setState({default: response.data.output});
      })
      .catch((e) => 
      {
        console.error(e);
      });
  
  
      axios.post('http://35.229.19.138:8080/addresstype/', {
        phone: '+91'+token,
        type: 'Other'
      })
      .then((response) => {
        this.setState({other: response.data.output});
      })
      .catch((e) => 
      {
        console.error(e);
      });
    })
  }

  deleteaddress(val)
  {
    axios.post('http://35.229.19.138:8080/deleteaddress/', {
      id : val
    })
    .then((response) => {
     if(response.status==200)
     {
       alert("Removed successfully..");
       this.refreshaddress();
     }
     else
     {
       alert("Something went wrong..");
     }
    })
    .catch((e) => 
    {
      console.error(e);
    });
  }

  displaydefault()
{
  if(this.state.default.length==0)
  {
    return(
      <View style = {styles.container2}>
      <ActivityIndicator
         color = '#bab86c'
         size = "large"
         style = {styles.activityIndicator}/>
   </View>
    )
   
  }
  else
  {
    return(
      <View>
                       <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20  }}>
                                Default Address
                            </Text>
                    
                            <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    <CardItem style={{ marginTop: 5 }}>
                   
                    <Body>


                    <Text style={{ color:'black',fontSize: 16,paddingBottom:10}}>{this.state.default[0].FirstName+this.state.default[0].LastName}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Flat + ","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Area+","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Town+","+this.state.default[0].Pincode+","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14,paddingBottom:5}}>{this.state.default[0].State}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>Mobile: {this.state.default[0].PhoneNo}</Text>
                     
                       
            </Body>       
                    </CardItem>
                               
  <View style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,marginLeft:5,marginRight:5
  }}
/>
<CardItem>
<View style={styles.container}>
     <View style={styles.buttonContainer}>
     <TouchableOpacity
         
          underlayColor='#fff' onPress={() => this.props.navigation.navigate('Edit',{id:this.state.default[0].ID})}>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>EDIT</Text>
 </TouchableOpacity>
    </View>
   
    <View style={styles.buttonContainer2}>
    <TouchableOpacity
         
         
          underlayColor='#fff'  onPress={() => alert("Cannot delete default address")}>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>REMOVE</Text>
 </TouchableOpacity>
    </View>
  </View>
</CardItem>
                    </Card>
      </View>
    )
  }
}

displayother()
{
if(this.state.default==0 || this.state.other==0) 
{
  return null;
}
else
{
  return(
  
    <View>
               <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20  }}>
                                Other Addresses
                            </Text>
{

  this.state.other.map((item, index) => {
  return(
                
                            <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    <CardItem style={{ marginTop: 5 }}>

                  
       
                   
                    <Body>
                    <Text style={{ color:'black',fontSize: 16,paddingBottom:10}}>{item.FirstName+" "+item.LastName}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{item.Flat+","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{item.Area+","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>{item.Town+","+item.Pincode+","}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14,paddingBottom:5}}>{item.State}</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>Mobile: {item.PhoneNo}</Text>
                         </Body>
           
          
         
                    </CardItem>
                    <View style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,marginLeft:5,marginRight:5
  }}
/>
<CardItem>
<View style={styles.container}>
     <View style={styles.buttonContainer}>
     <TouchableOpacity
         
          underlayColor='#fff' onPress={() => this.props.navigation.navigate('Edit',{id:item.ID})}>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>EDIT</Text>
 </TouchableOpacity>
    </View>
   
    <View style={styles.buttonContainer2}>
    <TouchableOpacity
         
         
          underlayColor='#fff' onPress={() => this.deleteaddress(item.ID)}>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>REMOVE</Text>
 </TouchableOpacity>
    </View>
  </View>
</CardItem>
                    </Card>
                    )
                              })

                              }
                    
    </View>
  )

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
   ADDRESS
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16}>

               <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
               <Card style={{ marginLeft: 5, marginRight: 5,marginBottom:10 }}>
                    <CardItem style={{ marginTop: 5 }}>
                    <Text style={{color:'blue'}}>+ ADD NEW ADDRESS</Text>
                    </CardItem>
                    </Card>
                </TouchableOpacity>
                {this.displaydefault()}
                  {this.displayother()}
           
          <View style={{ marginBottom: 100 }}/>
                    </ScrollView>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
  {
      DefaultScreen : MyAddresses,
    Details: AddAddress,
    Edit : EditAddress
  },
  {
    initialRouteName: 'DefaultScreen',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Address extends React.Component {
  render() {
    return <AppContainer screenProps={this.props.navigation.state.params.phone}/>;
  }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
        borderRightColor: 'black',
        borderRightWidth:1
      },
      buttonContainer2: {
        flex: 1
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
           height:35,
           marginLeft:5,
           borderBottomColor: '#FFFFFF',
           flex:1,
       },
       inputIcon:{
         width:20,
         height:20,
         marginLeft:20,
         justifyContent: 'center'
       },
       container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
     },
     activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     }
       });
