import React from 'react';  
import axios from 'axios';
import {StyleSheet, TouchableOpacity,Text,TextInput,Image, View,Button,ScrollView,SafeAreaView,BackHandler} from 'react-native';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Slideshow from 'react-native-image-slider-show';
import { SearchBar ,Header, ThemeProvider } from 'react-native-elements';
import { Dimensions } from 'react-native'
import Category from './category';
import HomeCard from './homecard';
import Product from './product';
import Grocery from './grocery';
const { height, width } = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      productdata:[],
      categorydata:[],
        search: '',
      position: 1,
      interval: null,
      bannerdata:[],
      dataSource: []
    };
  }
 
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    axios.post('http://35.229.19.138:8080/banner/', {
    })
    .then((response) => {
      response.data.output.map((item, index) => {
        this.state.dataSource.push({title: item.BannerTitle,
        caption: item.BannerCaption,
        url: item.BannerImage,
        id:item.ProductID}
        );
      })

    })
    .catch((e) => 
    {
      console.error(e);
    });


    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
      
    });
    
    axios.post('http://35.229.19.138:8080/categories/', {
    })
    .then((response) => {
      this.setState({categorydata:response.data.output})
    })
    .catch((e) => 
    {
      console.error(e);
    });

    axios.post('http://35.229.19.138:8080/products/', {
    })
    .then((response) => {
      this.setState({productdata:response.data.output})
    })
    .catch((e) => 
    {
      console.error(e);
    });
  }


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    clearInterval(this.state.interval);
  }
  handleBackButtonClick = () => {
    this.props.navigation.goBack(null);
    return true;
};
 
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
              placeholder="Search products & brands"
              onTouchStart={() => this.props.navigation.navigate('Details3')}
              underlineColorAndroid='transparent'
              onChangeText={(search) => this.setState({search})}/>
             

</View>

</View>


      
        <ScrollView
                        scrollEventThrottle={16}
                    >
                      <View style={styles.slidercontainer}>

                     
 <Slideshow 
        height={Dimensions.get('window').height*0.2}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} 
        onPress={() => this.props.navigation.navigate('Details1',{ProductID : this.state.dataSource[this.state.position].id})} />
        </View>

                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Available categories
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                           
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                 {

                                 this.state.categorydata.map((item, index) => {
                                 return(
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Details2',{CategoryName : item.CategoryName})}>
                                    <Category imageUri={{uri:item.CategoryImage}}
                                        name={item.CategoryName}
                                    />
                                    </TouchableOpacity>

                                   )
                                   })

                                  }
                                   
                                </ScrollView>
                                
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    Introducing Grocery Plus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of various products from verified brands with assured quality & comfort

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bHe_0ZFiSh8SzWRBn6d-N9qnbSOvTrO7NmT2_MS5FFECWSDV'}}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Products for you
                            </Text>

                            
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                              
                              {

                              this.state.productdata.map((item, index) => {
                                return(
                                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Details1',{ProductID : item.ID})}>
                                  <HomeCard width={width}
                                  imageUri={{uri:item.ProductImage}}
                                 name={item.ProductName+" "+item.Size}
                                 type={item.SubCategoryName}
                                 price={item.Price}
                                 rating={item.Rating}
                             />
                              </TouchableOpacity>
)
                              })

                              }
                               

                            </View>
                           
                        </View>
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

   