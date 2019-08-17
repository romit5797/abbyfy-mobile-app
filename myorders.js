import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,ActivityIndicator,
    Platform,AsyncStorage,
    StatusBar,ScrollView,
    Image,Dimensions
} from "react-native";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';  
import ItemDetails from './itemdetails';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import { Container, Content, Header,Button, Left, Right, Item, Input, Card, CardItem } from 'native-base'
import OrderCard from './ordercard';
import OrderDetails from './orderdetailscard';

class MyOrders extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      userdata:[]
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
    AsyncStorage.getItem('phone').then((token) => {
    axios.post('http://35.229.19.138:8080/myorders/', {
      phone: '+91'+token
    })
    .then((response) => {
      console.log(response)
     this.setState({userdata: response.data.output});
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

      onClickListener(val1,val2,val3,val4,val5,val6) {
       
        this.props.navigation.navigate("Details", {
            itemName:val1,
            itemCreator:val2,
            imageUri:val3,
            itemMrp:val4,
            itemDiscount:val5,
            itemTotal:val6
           
        });
      }

      onClickListener2(val1,val2,val3,val4,val5,val6,val7,val8,val9,val10,val11,val12,val13,val14) {
       
        this.props.navigation.navigate("Details2", {
          placedon:val1.substring(0,10),
          orderno:val2,
          mrp:val3,
          discount:val4,
          coupondiscount:val5,
          total:val6,
          phoneno:val7,
          firstname:val8,
          lastname:val9,
          flat:val10,
          area:val11,
          town:val12,
          state:val13,
          pincode:val14
        });
      }

      display()
      {
        if(this.state.userdata.length==0)
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
        else{
      
  
          return(
              this.state.userdata.map((item, index) => {
                if(item.OrderID!=[index>0 ? this.state.userdata[index-1].OrderID : null])
                {
                return(
                  <View>
                     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                     <Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 20 ,paddingTop:20 }}>
                    Order No: {item.OrderID} 
                  </Text>
                  <Text style={{color: "blue",fontSize: 16, fontWeight: '700', paddingHorizontal:10 ,paddingTop:20,textAlign: 'right'}}  onPress={() => this.onClickListener2(item.Created_at,item.OrderID,item.Price,item.Margin,(item.Discount-item.Margin),item.Total,item.PersonID,item.FirstName,item.LastName,item.Flat,item.Area,item.Town,item.State,item.Pincode)}>DETAILS</Text>
</View>
                   
                  
                  <TouchableOpacity  onPress={() => this.onClickListener(item.ProductName,item.BrandName,item.ProductImage,item.ProductPrice,((item.ProductPrice*item.ProductMargin)/100),(item.ProductPrice-((item.ProductPrice*item.ProductMargin)/100)))}>
                  <Card style={{ marginLeft: 5, marginRight: 5 }}>
                  
                  <OrderCard
                  itemName={item.ProductName}
                  itemCreator={item.BrandName}
                  itemPrice={"₹"+(item.ProductPrice-((item.ProductPrice*item.ProductMargin)/100)).toFixed(2)}
                  imageUri={{uri:item.ProductImage}}
                  status={item.Status}
                  date={item.Delivered_on}
                  />
                                         
                  
                                      </Card>
                                      </TouchableOpacity>
                                      </View>
                            
                  )
                }
                else
                {
                  return(
                    <View>
                    <TouchableOpacity  onPress={() => this.onClickListener(item.ProductName,item.BrandName,item.ProductImage,item.ProductPrice,((item.ProductPrice*item.ProductMargin)/100),(item.ProductPrice-((item.ProductPrice*item.ProductMargin)/100)))}>
                    <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    
                    <OrderCard
                    itemName={item.ProductName}
                    itemCreator={item.BrandName}
                    itemPrice={"₹"+(item.ProductPrice-((item.ProductPrice*item.ProductMargin)/100)).toFixed(2)}
                    imageUri={{uri:item.ProductImage}}
                    status={item.Status}
                    date={item.Delivered_on}
                    />
                                           
                    
                                        </Card>
                                        </TouchableOpacity>
                                        </View>
                              
                    )
                  }
                
     
              
              })
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
   MY ORDERS
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16} style={{ backgroundColor:"#fcfcfc"}}>
               {this.display()}
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
        Details2: OrderDetails,
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
      backgroundColor:"#DCDCDC"
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
