import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,  AsyncStorage,
    Platform,
    StatusBar,ScrollView,
    Image,Dimensions
} from "react-native";
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';  
import { Container, Content, Body,Header,Button, Left, Right, Item, Input, Card, CardItem,Form,Picker } from 'native-base'
import ItemCard from './itemscard';

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1",
      default:[],
      userdata:[],
      test:null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('phone').then((token) => {
    axios.post('http://35.229.19.138:8080/addressbyphone/', {
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


    axios.post('http://35.229.19.138:8080/addresstype/', {
      phone: '+91'+token,
      type: 'Default'
    })
    .then((response) => {
      console.log(response)
      this.setState({default: response.data.output});
    })
    .catch((e) => 
    {
      console.error(e);
    });
  })
  }

  display()
  {
    if(this.state.default.length==0)
    {
      return (
        <View>
          <Text>Loading..</Text>
        </View>
      )
    }
    else{
      return(
             <View>
<Card style={{ marginLeft: 5, marginRight: 5,marginTop:10 , marginBottom:10}}>
                    <CardItem style={{ marginTop: 5 }}>
                   
                    <Body>

 <Text style={{ color:'black',fontSize: 16,paddingBottom:10}}>{this.state.default[0].FirstName+this.state.default[0].LastName}<Text style={{ color:'#7c7c7f',fontSize: 14}}>(Default)</Text></Text>
      <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Flat}</Text>
      <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Area+","}</Text>
      <Text style={{ color:'#7c7c7f',fontSize: 14}}>{this.state.default[0].Town+","+this.state.default[0].Pincode}</Text>
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

  <View style={{justifyContent: 'center',alignItems: 'center'}}>
  <TouchableOpacity style={styles.button2}>
                   
<Picker
              note
              mode="dropdown"
              style={{ width: 200, marginLeft:5 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
            
              <Picker.Item label="Change Address" value="key1" />
              {

this.state.userdata.map((item, index) => {
return(
              <Picker.Item label={item.Type+": "+item.Flat+","+item.Area+","+item.Town+","+item.State+","+item.Pincode } value={item.ID} />
)
})
              }
              </Picker>
            </TouchableOpacity>
            </View>
                     
</CardItem>
                    </Card>

     </View>
      )
    }
  }


  onValueChange(value) {
    if(value=="key1")
    {
      return null;
    }else{
    axios.post('http://35.229.19.138:8080/addressbyid/', {
      id: value
    })
    .then((response) => {
      console.log(response)
      this.setState({default: response.data.output});
    })
    .catch((e) => 
    {
      console.error(e);
    });
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
               {this.display()}

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
       },
       button2: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#F5F5F5',
        elevation: 2, // Android
        height: 30,
        width: 200,
        borderRadius:5,
        borderWidth: 0.1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }
       });
