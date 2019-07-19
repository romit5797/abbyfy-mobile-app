import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,ScrollView,
    Image,Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';  
import ItemDetails from './itemdetails';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import { Container, Content, Header,Button, Left, Right, Item, Input, Card, CardItem } from 'native-base'
import OrderCard from './ordercard';

class MyOrders extends Component {

      onClickListener() {
       
        this.props.navigation.navigate("Details", {
            itemName:"Kitkat",
            itemCreator:"Nestle",
            itemPrice:"₹10",
            imageUri:'https://images-na.ssl-images-amazon.com/images/I/81hbTpUm6EL._SX385_.jpg'
           
        });
      }

    render() {
        return (
            <View>
           
           <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   MY ORDERS
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16}>
               <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20  }}>
                                Order No: 1111-2222-3333
                            </Text>
                            <TouchableOpacity  onPress={() => this.onClickListener()}>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>

                        <OrderCard
                            itemName="Maggi"
                            itemCreator="Nestle"
                            itemPrice="₹10"
                            imageUri={{uri:'https://images-na.ssl-images-amazon.com/images/I/812o4EQXPKL._SL1500_.jpg'}}
                          

                        />
                       

                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.onClickListener()}>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>

                        <OrderCard
                            itemName="Kitkat"
                            itemCreator="Nestle"
                            itemPrice="₹10"
                            imageUri={{uri:'https://images-na.ssl-images-amazon.com/images/I/81hbTpUm6EL._SX385_.jpg'}}
                           

                        />
                       

                    </Card>
                    </TouchableOpacity>

          <View style={{ marginBottom: 100 }}/>
                    </ScrollView>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Loginscreen : MyOrders,
        Details: ItemDetails,
    },
    {
      initialRouteName: 'Loginscreen',
      headerMode: 'none'
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  export default class OrdersApp extends React.Component {
    render() {
      return (
        <AppContainer  />
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
