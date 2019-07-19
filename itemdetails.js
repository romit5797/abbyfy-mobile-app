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

class ItemDetails extends Component {

    render() {
        return (
            <View style={{ backgroundColor:'#DCDCDC'}}>
           
           <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  <Icon style={[{color: "white"}]} size={15} name={'md-menu'} onPress={() => this.props.navigation.goBack()} />
  </View>
  <Text style={styles.text}>
  Item Details
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    <Icon style={[{color: "white"}]} size={15} name={'md-menu'} onPress={() => this.props.navigation.goBack()} />
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16}  >
              
               <CardItem style={{ marginTop: 5 }}>

<View>
    <Image style={{ height: 150, width: 100 }}
        source={{uri:this.props.navigation.state.params.imageUri}} />
</View>
<Right style={{ flex: 1, alignItems: 'flex-start', height: 200, paddingHorizontal: 20 }}>
    <Text>{this.props.navigation.state.params.itemName}</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.navigation.state.params.itemCreator}</Text>
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{this.props.navigation.state.params.itemPrice}</Text>

    <View style={styles.navBar2}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
MRP
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹1,499.00
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
₹43.00
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
₹45.00
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
₹600.00
</Text>
</View>
</View>

<View style={styles.navBar3}>
   <View style={styles.leftContainer}>
   <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
Cash On Delivery
</Text>
</View>
<View style={styles.rightContainer}>
<Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
₹897.00
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
₹897.00
</Text>
</View>
</View>

    
</Right>
</CardItem>

          <View style={{ marginBottom: 100 }}/>
                    </ScrollView>
            </View>
        );
    }
}
export default ItemDetails;

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
