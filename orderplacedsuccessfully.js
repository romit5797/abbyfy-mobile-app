import React from 'react';  
import axios from 'axios';
import {StyleSheet, TouchableOpacity,Text,TextInput,Image, View,Button,ScrollView,SafeAreaView,Dimensions,BackHandler} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation'; 
import { NavigationEvents } from 'react-navigation'; 
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Slideshow from 'react-native-image-slider-show';
import { SearchBar ,Header, ThemeProvider } from 'react-native-elements';
import SubCategory from './subcategories';
const { height, width } = Dimensions.get('window')

export default class OrderSuccess extends React.Component {
    constructor(props) {
        super(props)
    }

    _onBlurr = () => {
        BackHandler.removeEventListener('hardwareBackPress',
        this._handleBackButtonClick);
      }
      
      _onFocus = () => {
        BackHandler.addEventListener('hardwareBackPress', 
        this._handleBackButtonClick);
      }
      
      _handleBackButtonClick = () => true

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>      
        <NavigationEvents
       onWillFocus={this._onFocus}
       onWillBlur={this._onBlurr}
     />
        <ScrollView style={styles.scroller}
                        scrollEventThrottle={16}
                    >
                   <View style={styles.container}>
                   <Image
                                        source={{uri:'https://github.com/romit5797/birthdaybonaza/blob/master/checkmark.jpg?raw=true'}}
                                        style={{ height: 150, width: 150, resizeMode: 'contain'}}
                                    />
                                     <Text style={{ fontSize: 16, fontWeight: '600',paddingLeft:30,paddingRight:30,paddingTop:20,paddingBottom:50 }}>Your order has been successfully placed and will be delivered soon.Thank you for shopping with us.</Text>
                                     
                                     <View style={styles.inputsContainer}>
    <TouchableOpacity style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.fullWidthButtonText}>Continue Shopping</Text>
    </TouchableOpacity>
</View>

<View style={styles.inputsContainer}>
    <TouchableOpacity style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Details4')}>
        <Text style={styles.fullWidthButtonText}>My Orders</Text>
    </TouchableOpacity>
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
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',
        paddingTop:50,
        paddingBottom:20   
    }, 
    scroller:{
      marginBottom:36
    },
    inputsContainer: {
        flex: 1,
        paddingBottom:10
      },
      fullWidthButton: {
              shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: '#a9ba6c',
      elevation: 2, // Android
      height: 40,
      width: Dimensions.get("window").width*0.9,
      borderRadius:5,
      borderWidth: 0.1,
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      },
      fullWidthButtonText: {
        fontSize:16,
        color: 'white'
      }
    });