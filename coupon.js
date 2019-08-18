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
      var timestamp=new Date().toISOString().slice(0, 19).replace('T', ' ');
    axios.post('http://35.229.19.138:8080/coupons/', {
      amount:this.props.navigation.state.params.amount,
      phone: '+91'+token,
      expiry:timestamp

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
  }
 
  gotocart(val1,val2,val3,val4,val5)
  {
    let coupondiscount;
    if(val5<=this.props.navigation.state.params.amount && val4>=this.props.navigation.state.params.amount)
    {
      coupondiscount=this.props.navigation.state.params.amount*val3;
      this.props.navigation.state.params.returnData(val1,val2,coupondiscount);
  this.props.navigation.goBack();
    }
    else  if(this.props.navigation.state.params.amount>val4){
      coupondiscount=val4*val3;
      this.props.navigation.state.params.returnData(val1,val2,coupondiscount);
  this.props.navigation.goBack();
    }
    else{
      alert("Coupon not applicable");
    }

    
  }
  display()
  {
    if(this.state.userdata.length==0)
    {
      return  null;
    }
    else{
        return(
            <View>
               {
this.state.userdata.map((item, index) => {
return(
                <Card style={{ marginLeft: 5, marginRight: 5, marginTop:10,marginBottom:10 }}>
<CardItem style={{ marginTop: 5 }}>
<Left>
<Image source={{uri:item.CouponImage}} style={{ height: 40, width: 40, resizeMode: 'contain' }}/>
<Text style={{fontWeight: 'bold',color:'black',fontSize: 16}}> {item.Code}</Text>
</Left>
<Right>
<Text style={{ color:'#a9ba6c',fontWeight: 'bold'}}  onPress={() => this.gotocart(item.ID,item.Code,item.Amount,item.Maximum_amount,item.Minimum_amount)}>APPLY</Text>
</Right>
</CardItem>
<CardItem>
<Body>
<Text style={{fontWeight: 'bold',color:'black',fontSize: 14}}>{item.Description}</Text>
<Text style={{color:'#808080',fontSize: 12}}>{"Use code"+item.Code+" & get"+item.Amount*100+"% upto Rs."+item.Maximum_amount*item.Amount +" on your orders above Rs."+item.Minimum_amount}</Text>
</Body>
</CardItem>
           </Card>
)
})
               }
            </View>
        )
    }
  }


  onValueChange(value) {
    
  }
    render() {
        return (
            <View>
           
           <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   APPLY COUPON
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
               <ScrollView  scrollEventThrottle={16}>
               {this.display()}
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
