import React from 'react';  
import {StyleSheet, TouchableHighlight,Text,TextInput,Image, View,Button,ScrollView,SafeAreaView} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Slideshow from 'react-native-image-slider-show';
import { SearchBar ,Header, ThemeProvider } from 'react-native-elements';
import { Dimensions } from 'react-native'
import SubCategory from './subcategories';
const { height, width } = Dimensions.get('window')

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
        search: '',
    };
  }

 
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>

            <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  <Icon style={[{color: "white"}]} size={15} name={'md-menu'} onPress={() => this.props.navigation.goBack()} />
  </View>
  <Text style={styles.text}>
   Abbyfy
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    <Icon style={[{color: "white"}]} size={15} name={'md-menu'} onPress={() => this.props.navigation.goBack()} />
    </View>
    </View>
</View>
<View style={styles.inputContainer}>
<Icon name="md-search" size={25} style={{ marginLeft: 5,color:"#C0C0C0" }} />
          <TextInput style={styles.inputs}
              placeholder="Search products & brands"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(search) => this.setState({search})}/>

</View>
</View>


      
        <ScrollView style={styles.scroller}
                        scrollEventThrottle={16}
                    >
                   
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Grocery 
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <SubCategory 
                                        width={width}
                                        imageUri={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVE2y4L2Ff_XQnRTrKt9mMSIwtUZxurnHkWPoJEZYtYamA4At'}}
                                        name="Staples"
                                    />
                             <SubCategory 
                                        width={width}
                                        imageUri={{uri:'https://nerdist.com/wp-content/uploads/2019/02/cereals-2122019-1200x676.jpg'}}
                                        name="Cereals"
                                    />
                             <SubCategory 
                                        width={width}
                                        imageUri={{uri:'http://indiannerve.com/wp-content/uploads/2014/10/soft-drinks.jpg'}}
                                        name="Beverages"
                                    />
                             <SubCategory 
                                        width={width}
                                        imageUri={{uri:'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1074184-847__1&recipeName=350'}}
                                        name="Oil"
                                    />

                                
                            </View>
                        </View>


                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Health & OTC
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <SubCategory 
                                        width={width}
                                        imageUri={{uri:'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1149163-894&recipeName=680'}}
                                        name="Honey"
                                    />
                             <SubCategory 
                                        width={width}
                                        imageUri={{uri:'https://forthemommas.com/wp-content/uploads/2015/10/childrens-cold-relief.jpg'}}
                                        name="Cough & cold relievers"
                                    />
                             <SubCategory 
                                        width={width}
                                        imageUri={{uri:'http://www.gmarthd.com/image/cache/catalog/categoryimage/Beverages/energy-and-health-drinks/health-drinks-250x250.jpg'}}
                                        name="Health drinnk"
                                    />

                                
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