import React from 'react';  
import {StyleSheet, TouchableHighlight,Text,Image, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Inventory from './inventory';
import More from './more';
import Message from './messages';


class HomeScreen extends React.Component {  
   
  render() {  
    
    return (  
        <View style={styles.container}>  
        
          <Text>Home Screen : Quick Stats {this.props.screenProps[1]} </Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View >  
          <Text>MORE OPERATIONS : </Text> 

           <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>ADD WHEY PROTEIN</Text> 
            </TouchableHighlight> 
          <Text>ADD SUPER</Text>  
          <Text>ADD MIDDLEMAN</Text>  
          <Text>ADD DSITRIBUTOR</Text>  
          <Text>ADD RETAILER</Text>  
          <Text>TRANSFER TO SUPER</Text>  
          <Text>TRANSFER TO MIDDLEMAN</Text>  
          <Text>TRANSFER TO DSITRIBUTOR</Text>  
          <Text>TRANSFER TO RETAILER</Text>  
          <Text>SELL WHEY PROTEIN</Text>  
        </View>  
    );  
  }  
}  
class ImageScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
          <Text>MORE OPERATIONS : </Text> 
          <Text>ADD SUPER</Text>  
          <Text>ADD MIDDLEMAN</Text>  
          <Text>ADD DSITRIBUTOR</Text>  
          <Text>ADD RETAILER</Text> 
          <View style = {styles.listItemContainer}>
    <View style= {styles.iconContainer}>
     <Image source={{uri:"https://image.flaticon.com/icons/png/512/46/46246.png"}} style={styles.initStyle} resizeMode='contain' />
    </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text>ADD WHEY PROTIEN</Text>
        <View style={styles.dateContainer}>
         <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>Create a new batch</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
      <Icon name="phone" color='#075e54' size={23} style={{ padding:5 }} />
     </View>
    </View>
   </View>
  </View> 
          <Text>TRANSFER TO SUPER</Text>  
          <Text>TRANSFER TO MIDDLEMAN</Text>  
          <Text>TRANSFER TO DSITRIBUTOR</Text>  
          <Text>TRANSFER TO RETAILER</Text>  
          <Text>SELL WHEY PROTEIN</Text>  

            <View style = {styles.listItemContainer}>
    <View style= {styles.iconContainer}>
    <Icon style={[{color: "black"}]} size={25} name={'ios-home'}/> 
       </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text>ADD WHEY PROTIEN</Text>
        <View style={styles.dateContainer}>
         <Text style={{ fontWeight:'400', color:'#7c7c7f', fontSize:12 }}>Create a new batch</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
      <Icon name="phone" color='#075e54' size={23} style={{ padding:5 }} />
     </View>
    </View>
   </View>
  </View>
  <Text>MORE OPERATIONS : </Text> 
          <Text>ADD SUPER</Text>  
          <Text>ADD MIDDLEMAN</Text>  
  </View>  
        );  
    }  
}  
class CartScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Cart Screen</Text>  
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
      } 
});  

const TabNavigator  = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                     
                 <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: Inventory,  
            navigationOptions:{  
                tabBarLabel:'Inventory',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-clipboard' : 'md-clipboard'}/>  
                    </View>),  
                activeColor: 'white',  
                inactiveColor: 'black',    
                barStyle: { backgroundColor: 'green' },  
            }  
        },  
        Image: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Scan',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'}/>  
                    </View>),  
                activeColor: 'white',  
                inactiveColor: 'black', 
                barStyle: { backgroundColor: 'green' },   
            }  
        },  
        Inbox: { screen: Message,  
            navigationOptions:{  
                tabBarLabel:'Inbox',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}/>  
                    </View>),  
                 activeColor: 'white',  
                 inactiveColor: 'black',   
                barStyle: { backgroundColor: 'green' },  
            }  
        },  
        Cart: {  
            screen: More,
            navigationOptions:{  
                tabBarLabel:'More',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: 'white',  
      inactiveColor: 'black',  
      barStyle: { backgroundColor: 'green' },  
    },  
);  
const SomeStack =  createAppContainer(TabNavigator);  

export default class Test extends React.Component
{
    render() {
        let rj = [this.props.navigation.state.params.email,this.props.navigation.state.params.type];
        return(
            
         <SomeStack  screenProps={rj}/>
        );
    }
}