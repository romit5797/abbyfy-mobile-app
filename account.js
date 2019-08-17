import React, { Component } from 'react';
import {Dimensions,AsyncStorage,StyleSheet, TouchableOpacity,TouchableHighlight,Text,Image, View,Button,Alert,ScrollView} from 'react-native';  
import { Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  
import MyOrders from './myorders';
import MyAddresses from './myaddresses';
import App from './App';
import {createStackNavigator,StackActions,SwitchActions,NavigationActions, createAppContainer } from 'react-navigation'; 

const resetAction = StackActions.reset({
  index: 0,
  key:null,
  actions: [NavigationActions.navigate({ routeName: 'Details10' })],
});

 export default class AccountInterface extends Component {
    constructor(){
        super() 
          this.state = {
          
          }
          this.myoptions = this.myoptions.bind(this);
        
      }

      onClickListener(val) {
        let str = "Details"+val;
        if(str=="Details10")
        {
          AsyncStorage.removeItem('phone');
           AsyncStorage.removeItem('loggedin');
           
           this.props.navigation.dispatch(resetAction);
        }
        else{
          this.props.navigation.navigate(str, {
          });
        }
         
        
        
      }


    myoptions(val1,val2,val3,val4)
    {
        return(
          <View>
            <TouchableOpacity  onPress={() => this.onClickListener(val4)}>
   
            <View style = {styles.listItemContainer}>
             <View style= {styles.iconContainer}>
    <Icon style={[{color: "black"}]} size={25} name={val3}/> 
       </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text>{val1}</Text>
        <View style={styles.dateContainer}>
         <Text style={{ color:'#7c7c7f',fontSize: 10}}>{val2}</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
     <Icon style={[{color: "grey"}]} size={20} name={"ios-arrow-forward"}/> 
     </View>
    </View>
   </View>
   </View>
   </TouchableOpacity>
  </View>
        )
    }

  render() {
    return (
        <View>
 <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
   </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   PROFILE
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
   </View>
    </View>
</View>
</View>
<ScrollView 
 scrollEventThrottle={16} >
           {this.myoptions("My Orders","Check your order status","logo-dropbox",1) }
           {this.myoptions("My Addresses","Save addresses for a hassle-free checkout","md-pin",2) }
           {this.myoptions("Help Center","Help regarding your recent purchases","logo-ionitron",3) }
           {this.myoptions("My Rewards","Reward points which can be used on your next order","logo-usd",4) }
           {this.myoptions("Settings","Manage notifications & app settings","md-settings",5) }
           {this.myoptions("App Feedback","Send us your valuable feedback","md-create",6) }
           {this.myoptions("Profile Details","Change your profile details & password","md-person-add",7) }
           {this.myoptions("Legal","Policies with terms & conditions","md-paper",8) }
           {this.myoptions("Rate the App","Rate our app on playstore","md-star",9) }
           {this.myoptions("Sign out","Sign out from this account","md-exit",10) }
           <View style={{ marginBottom: 100 }}/>
           </ScrollView>
        </View>
           
        
 
    );
  }
}


  
  

const styles = StyleSheet.create({  
    container: {  
        flex: 10,  
        justifyContent: 'center',  
        alignItems: 'center'  
    }, 
    logoText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "flex-start",
        marginLeft: 10
      },
      listItemContainer: {
        
        height:Dimensions.get('window').height*0.2,
        width:Dimensions.get('window').width,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#F5F5F5",
        borderColor: "rgba(92,94,94,0.5)",
        borderWidth: 0.25,
        padding: 1,
        marginTop:1
      },
      iconContainer: {
        flex: 1,
        paddingLeft:10,
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
        width:(Dimensions.get('window').width)*0.5
      },
      dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:(Dimensions.get('window').width)*0.75
      },
      callIconContainer: {
        flex: 1,
        paddingRight:10,
        alignItems: "flex-end"
      },
      initStyle: {
        borderRadius: 30,
        width: 60,
        height: 60
      } ,
      better: {
        marginBottom:36
      } , headercontainer: {  
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
        backgroundColor:"#F5F5F5",
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
    }
    });