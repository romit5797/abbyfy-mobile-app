import React, { Component } from "react";
import {
    View,
    Text,ActivityIndicator,
    StyleSheet,AsyncStorage,
    TouchableOpacity,
    Platform,
    StatusBar,ScrollView,
    Image,Dimensions
} from "react-native";
import StarRating from 'react-native-star-rating'
import axios from 'axios';
import { withNavigation } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';  
import { Container, Content, Header,Body, Button,Left, Right, Item, Input, Card, CardItem , Picker} from 'native-base'
import ItemCard from './itemscard';

export default class CartScreen extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
        search: '',
        quantity:0,
        cartdata:[],
        productdata:[],
        quantity:[],
        testdata:[],
        mrp:0,
        discount:0,
        total:0,
        selected: "key1",
      default:[],
      userdata:[],
      test:null,
      id:null,
      name:null,
      coupondiscount:0
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this.setState({mrp : 0});
      this.setState({discount : 0});
      this.setState({total:0});
    this.state.productdata.length=0;
    AsyncStorage.getItem('phone').then((token) => {
    axios.post('http://35.229.19.138:8080/getcartitems/', {
        phone: "+91"+token
})
.then((response) => {
    if(response.data.output.length>0)
    {
        console.log(response)
        for(var i=0;i<response.data.output.length;i++)
        {
            let quant=response.data.output[i].Quantity;
            let CartID=response.data.output[i].ID;
         axios.post('http://35.229.19.138:8080/product/', {
             product: response.data.output[i].ProductID
     })
     .then((response2) => {
         console.log(response2)
        this.state.productdata.push({id: response2.data.output[0].ID,
            name:response2.data.output[0].ProductName,
            brand:response2.data.output[0].BrandName,
            size:response2.data.output[0].Size,
            image:response2.data.output[0].ProductImage,
            margin:response2.data.output[0].Margin,
            rating:response2.data.output[0].Rating,
            price:response2.data.output[0].Price,
            quantity:quant,
            cart:CartID
          
       } );

    
       this.setState({mrp : this.state.mrp+(response2.data.output[0].Price*quant)});
           this.setState({discount : this.state.discount+ ((quant*response2.data.output[0].Price*response2.data.output[0].Margin)/100)});
           this.setState({total:(this.state.mrp-this.state.discount)});

            this.setState({testdata:this.state.productdata});
            console.log(this.state.testdata)
        
     })
     
     .catch((e) => 
     {
       console.error(e);
     });
        }

    }
   
})

.catch((e) => 
{
  console.error(e);
});

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
  });
}

componentWillUnmount() {
  // Remove the event listener
  this.focusListener.remove();
}

returnData(id, name, coupondiscount) {
  this.setState({id: id, name: name,coupondiscount: coupondiscount});
}



displaycoupon()
{
  if(this.state.id==null)
  {
    return(
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details2',{returnData: this.returnData.bind(this),amount: this.state.mrp})}>
<Card style={{ marginLeft: 5, marginRight: 5, marginTop:10,marginBottom:10 }}>
<CardItem style={{ marginTop: 5 }}>
<Left>
<Icon style={[{color: "green",paddingLeft:5,paddingRight:10}]} size={20} name={'md-cash'}/>
<Text>Apply Coupon</Text>
</Left>
<Right>
<Icon style={[{color: "black",paddingLeft:5}]} size={20} name={'ios-arrow-forward'}/>
</Right>
</CardItem>
           </Card>
           </TouchableOpacity>
      </View>
    )
  }
  else{
    return(<View>
<Card style={{ marginLeft: 5, marginRight: 5, marginTop:10,marginBottom:10 }}>
<CardItem style={{ marginTop: 5 }}>
<Left>
<Icon style={[{color: "green",paddingLeft:5,paddingRight:10}]} size={30} name={'md-cash'}/>
<Text><Text style={{fontWeight: 'bold',color:'black',fontSize: 16}}>{this.state.name}</Text> - Applied</Text>
</Left>
<Right>
<Icon style={[{color: "grey",paddingLeft:5}]} size={20} name={'md-close-circle'} onPress={() => this.returnData(null,null,0)}/>
</Right>
</CardItem>
           </Card>
    </View>)
  }
}

removecartitem(val)
{
  axios.post('http://35.229.19.138:8080/removecartitemsbyid/', {
    id: val
  })
  .then((response) => {
    console.log(response)
    if(response.status==200)
    {
      alert("Removed successfully.."+val);
      this.refreshcart();
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

refreshcart()
{
  this.setState({mrp : 0});
  this.setState({discount : 0});
  this.setState({total:0});

  this.state.testdata.length=0;
  this.state.productdata.length=0;
    AsyncStorage.getItem('phone').then((token) => {
    axios.post('http://35.229.19.138:8080/getcartitems/', {
        phone: "+91"+token
})
.then((response) => {
    if(response.data.output.length>0)
    {
        console.log(response)
        for(var i=0;i<response.data.output.length;i++)
        {
            let quant=response.data.output[i].Quantity;
            let CartID=response.data.output[i].ID;
         axios.post('http://35.229.19.138:8080/product/', {
             product: response.data.output[i].ProductID
     })
     .then((response2) => {
         console.log(response2)
        this.state.productdata.push({id: response2.data.output[0].ID,
            name:response2.data.output[0].ProductName,
            brand:response2.data.output[0].BrandName,
            size:response2.data.output[0].Size,
            image:response2.data.output[0].ProductImage,
            margin:response2.data.output[0].Margin,
            rating:response2.data.output[0].Rating,
            price:response2.data.output[0].Price,
            quantity:quant,
            cart:CartID
          
       } );

       this.setState({mrp : this.state.mrp+(response2.data.output[0].Price*quant)});
           this.setState({discount : this.state.discount+ ((quant*response2.data.output[0].Price*response2.data.output[0].Margin)/100)});
           this.setState({total:(this.state.mrp-this.state.discount)});

            this.setState({testdata:this.state.productdata});
            console.log(this.state.testdata)
        
     })
     
     .catch((e) => 
     {
       console.error(e);
     });
        }

    }
   
})

.catch((e) => 
{
  console.error(e);
});
    });
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

placeorder()
{
  var timestamp=new Date().toISOString().slice(0, 19).replace('T', ' ');
  if(this.state.total+this.state.coupondiscount>=700)
  {
  AsyncStorage.getItem('phone').then((token) => {
  axios.post('http://35.229.19.138:8080/neworder/', {
    phone : '+91'+token,
    price : this.state.mrp,
    delivery : 0,
    discount : this.state.discount+this.state.coupondiscount,
    total : this.state.total-this.state.coupondiscount,
    createdat : timestamp,
    updatedat : timestamp,
    address : this.state.default[0].ID,
    margin : this.state.discount,
    coupon : this.state.id,
    product : this.state.productdata,
    mode : 'POD'
  })
  .then((response) => {
    console.log(response)
    if(response.status==200)
    {
      this.props.navigation.navigate('Details3');
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
})
  }
  else{
    alert("Order must be atleast Rs.700 or more");
  }
}

display()
{
  if(this.state.testdata.length==0)
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

    <View>

    {
this.state.testdata.map((item, index) => {
return(
<Card style={{ marginLeft: 5, marginRight: 5 }}>
<CardItem style={{ marginTop: 5 }}>

<View>
    <Image style={{ height: 90, width: 60 }}
        source={{uri:item.image}} />
</View>
<Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
<View>
<Icon style={{position: 'absolute', left: Dimensions.get("window").width*0.6,color:'grey'}} size={25} name={'md-trash'} onPress={() => this.removecartitem(item.cart)}/>
</View>
    <Text>{item.name}</Text>
    <Text style={{ color: 'grey', fontSize: 11 }}>{item.brand}</Text>
    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>₹{(((item.price-(item.price*(item.margin/100)))*item.quantity)).toFixed(2)}<Text style={{ fontSize: 12,color: 'grey' }}>| Quantity:{item.quantity}</Text></Text>
    <Text><Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
        You save
    </Text> ₹{((item.quantity*item.price*item.margin)/100).toFixed(2)}</Text>

    <StarRating
        disabled={true}
        maxStars={5}
        rating={item.rating}
        starSize={12}
        fullStarColor='orange'
        emptyStarColor='orange'


    />
</Right>
</CardItem>
</Card>
)
})
}

{this.displaycoupon()}

 <Text style={{ fontSize: 16, fontWeight: '700',paddingHorizontal: 5  }}>
 Order details
</Text>

<Card style={{ marginLeft: 5, marginRight: 5 }}>
<CardItem style={{ marginTop: 5 }}>
<Left>
<Text>Total MRP</Text>
</Left>
<Right>
<Text>₹{(this.state.mrp).toFixed(2)}</Text>
</Right>
</CardItem>

<CardItem style={{ marginTop: 5 }}>
<Left>
<Text>Discount</Text>
</Left>
<Right>
<Text>₹{(this.state.discount).toFixed(2)}</Text>
</Right>
</CardItem>

<CardItem style={{ marginTop: 5 }}>
<Left>
<Text>Tax</Text>
</Left>
<Right>
<Text>₹0</Text>
</Right>
</CardItem>

<CardItem style={{ marginTop: 5 }}>
<Left>
<Text>Coupon Discount</Text>
</Left>
<Right>
<Text>₹{(this.state.coupondiscount).toFixed(2)}</Text>
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
<Text>₹{(this.state.total-this.state.coupondiscount).toFixed(2)}</Text>
</Right>

</CardItem>
</Card>

<Text style={{ fontSize: 16, fontWeight: '700', paddingHorizontal: 5  }}>
 Delivery Address
</Text>
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
<CardItem style={{ marginTop: 5 }}>
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
</CardItem>

                    </Card>

                    <Card style={{ marginLeft: 5, marginRight: 5, marginTop:10,marginBottom:10 }}>
<CardItem style={{ marginTop: 5 }}>
<Left>
<Text>Payment Method: Pay on Delivery(POD)</Text>
</Left>
</CardItem>
           </Card>
                
                    <Card style={{ marginLeft: 5, marginRight: 5,marginTop: 10}}>
<CardItem style={{ marginTop: 1 }}>
<Left>
<Text>Total:₹{(this.state.total-this.state.coupondiscount).toFixed(2)} </Text>
</Left>
<Right>
<Button full success onPress={() => this.placeorder()}>
<Text>PLACE ORDER</Text>
</Button>
</Right>
</CardItem>

</Card>

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
   SHOPPING CART
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16}>
               <Text style={{ fontSize: 16, fontWeight: '700',paddingHorizontal: 5   }}>
                                Items
                            </Text>
          {this.display()}
                   
          <View style={{ marginBottom: 100 }}/>
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
