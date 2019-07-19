import React from 'react';
import { createStackNavigator,createAppContainer} from 'react-navigation'
import {
    View,
    Text,TextInput,
    Image,StatusBar,
    Dimensions,Button,
    StyleSheet,ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';
import { genericTypeAnnotation } from '@babel/types';

export default class AddAddress extends React.Component {
  render() {
    return (
    <View>
         <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
  </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   Add new address
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>
<ScrollView
         scrollEventThrottle={16}>
        <Text style={{ fontSize: 24, fontWeight: '700', marginLeft:10 }}>
                                Enter a delivery address
                            </Text>
<View style={{marginRight:10,marginLeft:10,marginTop:5,borderColor:'black',borderWidth:1}}>
         <TextInput style={styles.inputs}
              placeholder="Full name"
              underlineColorAndroid='transparent'
              />
              <TextInput style={styles.inputs}
              placeholder="Mobile number"
              underlineColorAndroid='transparent'
              keyboardType={'numeric'}/>
              <TextInput style={styles.inputs}
              placeholder="Pincode"
              underlineColorAndroid='transparent'
              keyboardType={'numeric'}/>
              <TextInput style={styles.inputs}
              placeholder="Town/City"
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="State"
              underlineColorAndroid='transparent'
              />
              <TextInput style={styles.inputs}
              placeholder="Flat,House no.,Building,Company,Apartment"
              underlineColorAndroid='transparent'
             />
              <TextInput style={styles.inputs}
              placeholder="Area,Colony,Street,Sector,Village"
              underlineColorAndroid='transparent'
              />
              <TextInput style={styles.inputs}
              placeholder="Landmark eg. near apsra theatre"
              underlineColorAndroid='transparent'
              />
             
</View>
<View style={{marginRight:10,marginLeft:10,marginTop:5}}>
<Button
  title="Add Address"
  color="green"
  />
  </View>
  <View style={{paddingBottom:200}}/>
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
           color : 'grey',
           borderBottomColor: "#DCDCDC",
           borderBottomWidth:1
       },
       inputIcon:{
         width:20,
         height:20,
         marginLeft:20,
         justifyContent: 'center'
       }
       });
