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
import { Container, Content, Body,Header,Button, Left, Right, Item, Input, Card, CardItem } from 'native-base'
import ItemCard from './itemscard';

class CartScreen extends Component {
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
               <Card style={{ marginLeft: 5, marginRight: 5,marginTop:10 , marginBottom:10}}>
                    <CardItem style={{ marginTop: 5 }}>
                   
                    <Body>


                    <Text style={{ color:'black',fontSize: 16,paddingBottom:10}}>Ram Prasad <Text style={{ color:'#7c7c7f',fontSize: 14}}>(Default)</Text></Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>House no. 32</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>Rehari,</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>Jammu, 180001</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14,paddingBottom:5}}>Jammu and Kashmir</Text>
                        <Text style={{ color:'#7c7c7f',fontSize: 14}}>Mobile: 7889009009</Text>
                     
                       
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
         
          underlayColor='#fff'>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>EDIT/CHANGE</Text>
 </TouchableOpacity>
    </View>
   
    <View style={styles.buttonContainer2}>
    <TouchableOpacity
         
         
          underlayColor='#fff'>
          <Text style={{color:'blue',textAlignVertical: "center",textAlign: "center"}}>ADD NEW ADDRESS</Text>
 </TouchableOpacity>
    </View>
  </View>
</CardItem>
                    </Card>


               <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20  }}>
                                Items
                            </Text>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>

                        <ItemCard
                            itemName="You can heal your life"
                            itemCreator="Louise Hay"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={{uri:'https://forthemommas.com/wp-content/uploads/2015/10/childrens-cold-relief.jpg'}}
                            rating={5}

                        />
                       

                    </Card>

                    <Card style={{ marginLeft: 5, marginRight: 5 }}>

                        <ItemCard
                            itemName="You can heal your life"
                            itemCreator="Louise Hay"
                            itemPrice="$10"
                            savings="2.5"
                            imageUri={{uri:'https://forthemommas.com/wp-content/uploads/2015/10/childrens-cold-relief.jpg'}}
                            rating={5}

                        />
                       

                    </Card>

                    <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20  }}>
                                Order details
                            </Text>

                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    <CardItem style={{ marginTop: 5 }}>
                    <Left>
              <Text>Total MRP</Text>
              </Left>
              <Right>
              <Text>₹2999</Text>
              </Right>
              </CardItem>

              <CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Discount</Text>
              </Left>
              <Right>
              <Text>₹499</Text>
              </Right>
              </CardItem>

              <CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Tax</Text>
              </Left>
              <Right>
              <Text>₹500</Text>
              </Right>
              </CardItem>

              <CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Coupon Discount</Text>
              </Left>
              <Right>
              <Text>₹2999</Text>
              </Right>
              </CardItem>

              <CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Total MRP</Text>
              </Left>
              <Right>
              <Text>₹2999</Text>
              </Right>
              </CardItem>
              
              <CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Delivery Charges</Text>
              </Left>
              <Right>
              <Text>₹0</Text>
              </Right>
              </CardItem>
             
  <View style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,marginLeft:5,marginRight:5
  }}
/>
<CardItem style={{ marginTop: 5 }}>
              <Left>
              <Text>Total</Text>
              </Left>
              <Right>
              <Text>₹3000</Text>
              </Right>

             </CardItem>
           </Card>
           
           <Card style={{ marginLeft: 5, marginRight: 5 }}>
           <Button full success>
            <Text>PLACE ORDER</Text>
          </Button>
          </Card>
          <View style={{ marginBottom: 100 }}/>
                    </ScrollView>
            </View>
        );
    }
}
export default CartScreen;

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
       }
       });
