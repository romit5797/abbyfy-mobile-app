import React from 'react';  
import axios from 'axios';
import {StyleSheet, TouchableOpacity,Text,TextInput,Image, View,Button,ScrollView,SafeAreaView} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Slideshow from 'react-native-image-slider-show';
import { SearchBar ,Header, ThemeProvider } from 'react-native-elements';
import { Dimensions } from 'react-native'
import SubCategory from './subcategories';
const { height, width } = Dimensions.get('window')
import { Card, CardItem, Right } from 'native-base'
import ItemCard from './itemscard2';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
        search: null,
        resultdata:[]
    };
  }

  searchproducts(val) {
    if(val!=null)
    {
    axios.post('http://35.229.19.138:8080/search/', {
     product: val
    })
    .then((response) => {
      
     this.setState({resultdata:response.data.output})
     this.display();
    })
    .catch((e) => 
    {
      console.error(e);
    });
    }
  }

  display()
  {
      if(this.state.resultdata.length==0)
      {
          return null;
      }
      else
      {
          return(
            <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10 }}>
               Results:
            </Text>
           {

               this.state.resultdata.map((item, index) => {
               return(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details1',{ProductID : item.ID})}>
                <Card style={{ marginLeft: 5, marginRight: 5}}>

                <ItemCard
                itemName={item.ProductName}
                itemCreator={item.BrandName}
                itemPrice={"₹"+((item.Price-(item.Price*(item.Margin/100))))}
                itemRealPrice={"₹"+item.Price}
                itemMargin={item.Margin}
                savings={(item.Price*item.Margin)/100}
                imageUri={{uri:item.ProductImage}}
                rating={item.Rating}
                
                />
                
                </Card>
                </TouchableOpacity>
                    )
              })

              }

          
        </View>


          )
      }
  }
 
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
        <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  <Text style={{color:'white',fontSize: 20, fontWeight: '600',paddingBottom:5}}>
   Abbyfy
  </Text>
  </View>
 
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    <Icon style={[{color: "white"}]} size={20} name={'md-cart'} onPress={() => this.props.navigation.navigate('Cart')} />
    </View>
    </View>
</View>
<View style={styles.inputContainer}>
<Icon name="md-search" size={25} style={{ marginLeft: 5,color:"#C0C0C0" }} />
          <TextInput style={styles.inputs}
              autoFocus={true} 
              placeholder="Search products & brands"
              onChangeText={(search) => this.searchproducts(search)}
              keyboardType="email-address"
              underlineColorAndroid='transparent'
            />

</View>
</View>
      
        <ScrollView style={styles.scroller}
                        scrollEventThrottle={16}
                    >
                   {this.display()}
                   <View style={{ marginBottom: 100 }}/>
                    </ScrollView>


        </View>
</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 10,  
        justifyContent: 'center',  
        alignItems: 'center'  
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
        paddingBottom:5,
        paddingRight:10,
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
        height:55,
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