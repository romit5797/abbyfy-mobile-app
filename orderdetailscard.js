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
import { Container, Content, Header,Button, Left, Right, Item, Input, Card, CardItem } from 'native-base'
import OrderCard from './ordercard';

class OrderDetails extends Component {

  getMonthFromString(mon){
    var m;
    if(mon.substring(0,1)==0)
    {
     m=mon.substring(1,2)-1;
    }
    else
    {
        m=mon-1;
    }
    
    var date = new Date(2009, m , 10);  // 2009-11-10
    var month = date.toLocaleString('default', { month: 'long' });
   
    return month;
  }

    render() {
        return (
            <View>
           
           <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>

  </View>
  <Text style={{ color: 'white'}}>
  Order Details
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
 
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16} style={{ backgroundColor:'#fcfcfc'}} >
              
               <CardItem style={{ marginTop: 5 }}>

<View style={{ flex: 1, alignItems: 'flex-start', paddingHorizontal: 20 }}>
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>Placed on: <Text style={{ color: 'grey', fontSize: 11 }}> {this.props.navigation.state.params.placedon!=null ? (this.props.navigation.state.params.placedon).substring(8,10)+" "+this.getMonthFromString((this.props.navigation.state.params.placedon).substring(5,7))+" "+ (this.props.navigation.state.params.placedon).substring(0,4) : null }</Text></Text>
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f',paddingBottom:10 }}>Order No.: <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.navigation.state.params.orderno}</Text></Text>
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>Price Details:</Text>

    <View style={styles.navBar2}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
MRP 
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
{(this.props.navigation.state.params.mrp).toFixed(2)}
</Text>
</View>
</View>


<View style={styles.navBar}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
GST
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹00.00
</Text>
</View>
</View>

<View style={styles.navBar}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
Coupon Discount
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹{(this.props.navigation.state.params.coupondiscount).toFixed(2)}
</Text>
</View>
</View>


<View style={styles.navBar}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
Item Discount
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹{(this.props.navigation.state.params.discount).toFixed(2)}
</Text>
</View>
</View>

<View style={styles.navBar3}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
Pay On Delivery
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹{(this.props.navigation.state.params.total).toFixed(2)}
</Text>
</View>
</View>

<View style={styles.navBar}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'black', fontWeight: '600', fontSize: 13 }}>
Total:
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'black', fontWeight: '600', fontSize: 13 }}>
₹{(this.props.navigation.state.params.total).toFixed(2)}
</Text>
</View>
</View>


    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' ,paddingTop:20}}>Updates sent to:</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}><Icon style={[{color: "grey"}]} size={10} name={'md-call'} onPress={() => this.props.navigation.navigate('Cart')} />
    {" "+this.props.navigation.state.params.phoneno}</Text>

    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' ,paddingTop:20}}>Shipping Address:</Text>
    <Text style={{ color: 'black',fontWeight:'600', fontSize: 11 }}>{this.props.navigation.state.params.firstname+" "+this.props.navigation.state.params.lastname}</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.navigation.state.params.flat+","+this.props.navigation.state.params.area}</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.navigation.state.params.town+","+this.props.navigation.state.params.state+","+this.props.navigation.state.params.pincode}</Text>


    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' ,paddingTop:20}}>Payment Mode</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}>Pay On Delivery</Text>

    
</View>
</CardItem>

          <View style={{ marginBottom: 100 }}/>
                    </ScrollView>
            </View>
        );
    }
}
export default OrderDetails;

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
           
          },
          navBar2: {
          
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopColor: 'grey',
            borderTopWidth: 1,
           
          },
          navBar3: {
          
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
           
          },
         leftContainer: {
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-start',
         
         },
         rightContainer: {
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'flex-end',
           alignItems: 'center',
          
         },
         rightIcon: {
           height: 10,
           width: 10,
           resizeMode: 'contain',
          
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
