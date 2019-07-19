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

export default class Grocery extends React.Component {
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