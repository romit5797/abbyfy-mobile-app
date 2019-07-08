import React, { Component } from 'react';
import {Dimensions,StyleSheet, TouchableOpacity,TouchableHighlight,Text,Image, View,Button,Alert,ScrollView} from 'react-native';  
import { Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  

 export default class MoreInterface extends Component {
    constructor(){
        super() 
          this.state = {
          
          }
          this.myoptions = this.myoptions.bind(this);
        
      }

      onClickListener(val) {
        let str = "Details"+val;
        this.props.navigation.navigate(str, {
        });
      }

      goBack()
      {
        Alert.alert("back button pressed");
      }

    myoptions(val1,val2,val3,val4)
    {
        return(
          <View>
            <TouchableOpacity  onPress={() => this.onClickListener(val4)}>
   
            <View style = {styles.listItemContainer}>
             <View style= {styles.iconContainer}>
    <Icon style={[{color: "black"}]} size={25} name={val3}/> 
       </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text>{val1}</Text>
        <View style={styles.dateContainer}>
         <Text style={{ color:'#7c7c7f'}}>{val2}</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
     <Icon style={[{color: "grey"}]} size={20} name={"ios-arrow-forward"}/> 
     </View>
    </View>
   </View>
   </View>
   </TouchableOpacity>
  </View>
        )
    }

  render() {
    return (
        <View>
               
   <Header backgroundColor="green"
 leftComponent={<Icon style={[{color: "white"}]} size={40} name={'ios-arrow-back'} onPress={ () => { this.goBack() } }  />}
  centerComponent={{ text: 'MORE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<ScrollView style = {styles.better}>
           {this.myoptions("Sell Whey Protein","Scan and sell","ios-cart",1) }
           {this.myoptions("Add Whey","Create a new batch","ios-add-circle",2) }
           {this.myoptions("Add Super","Add a new super to the network","ios-add-circle",3) }
           {this.myoptions("Add Middleman","Add a new middleman to the network","ios-add-circle",4) }
           {this.myoptions("Add Distributor","Add a new distributor to the network","ios-add-circle",5) }
           {this.myoptions("Add Retailer","Add a new retailer to the network","ios-add-circle",6) }
           {this.myoptions("Transfer to Super","Transfer stock to super","ios-fastforward",7) }
           {this.myoptions("Transfer to Middleman","Transfer stock to middleman","ios-fastforward",8) }
           {this.myoptions("Transfer to Distributor","Transfer stock to dsitributor","ios-fastforward",9) }
           {this.myoptions("Transfer to Retailer","Transfer stock to retailer","ios-fastforward",10) }
           </ScrollView>
        </View>
           
        
 
    );
  }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 10,  
        justifyContent: 'center',  
        alignItems: 'center'  
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
        padding: 1,
        marginTop:5
      },
      iconContainer: {
        flex: 1,
        paddingLeft:10,
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
        width:(Dimensions.get('window').width)*0.5
      },
      dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:(Dimensions.get('window').width)*0.6
      },
      callIconContainer: {
        flex: 1,
        paddingRight:10,
        alignItems: "flex-end"
      },
      initStyle: {
        borderRadius: 30,
        width: 60,
        height: 60
      } ,
      better: {
        marginBottom:90
      } 
});  
