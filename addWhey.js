import React from 'react';  
import {StyleSheet,ScrollView, TouchableHighlight,Text,Image, TextInput,View,Alert,Button} from 'react-native';  
import { createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';  
import Icon from 'react-native-vector-icons/Ionicons';  
import axios from 'axios';
import { Dropdown } from 'react-native-material-dropdown';
import { Header, ThemeProvider } from 'react-native-elements';

  

class SameFlavour extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          type: 'select',
          flavour: 'select',
          size: 'select',
          number:'',
          counter:0
          
        };
    }

    onSubmit() {
        if(this.state.type=="select"  || this.state.size=="select")
        {
          Alert.alert("Please select all options"); 
        }
        else
        {
         var batchx = Math.random().toString(36).substring(3);
        
           for(var i=0;i<this.state.number*4;i++)
           {
             if(i%4==0  && i>0)
             {
              batchx = Math.random().toString(36).substring(3);
             }
            
  
              {/* Send data to API*/}
           var authOptions = {
            method: 'post',
            url: 'http://35.229.19.138:3000/api/org.authentication.whey.addwhey',
            data: JSON.stringify({"email": this.props.screenProps[0],"batchno":batchx,"type": this.state.type,"flavour": this.state.flavour,"size": this.state.size}),
            headers: {
              'Content-Type': 'application/json'
             },
            json: true
           };
             
        axios(authOptions)
           .then((response) => {
              if(response.status==200){
               this.state.counter=this.state.counter+1;
               if(this.state.counter==this.state.number)
               {
                 Alert.alert(this.state.number+" Whey Protein batch added successfully")
               }
  
              }
              else{
                Alert.alert("Something went wrong")
              }
              
               })
           .catch((error) => {
            Alert.alert("Something went wrong..")
             })
            }
        }
          
          
      }

      handleChange1(val)
      {
        this.setState({type:val})
      }

      handleChange2(val)
      {
        this.setState({flavour:val})
      }

      handleChange3(val)
      {
        this.setState({size:val})
      }
  
  
   
  render() {  
    let data = [{
        value: 'CONCENTRATE',
        }, {
    value: 'ISOLATE',
    }, {
    value: 'HYDROLYZED',
    }];

    let data2 = [{
        value:"DARK",
        }, {
        value:"MEDIUM",
        }, {
            value:"LIGHT",
        }, {
            value:"STRAWBERRY",
        }, {
            value:"VANILLA",
        }, {
        value:"BANANA_CREAM",
        }, {
            value:"CAFE_MOCHA",
    }, {
        value:"COOKIES_AND_CREAM",
}, {
    value:"RICH_MILK_CHOCOLATE",
}, {
    value:"VANILLA",
    }];

    let data3 = [{
        value:"small",
        }, {
            value:"medium",
    }, {
        value:"large",
    }];
    
    return (  

        <View style={styles.cents}>  
      <ScrollView>
         <View style={styles.inputContainer}>
<TextInput style={styles.inputs}
        placeholder="  Enter quantity"
        keyboardType="email-address"
        underlineColorAndroid='transparent'
        onChangeText={(number) => this.setState({number})}/>
</View>

<Dropdown 
        containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
        rippleCentered={true}
        inputContainerStyle={{ borderBottomColor: 'green' }}
        label='Type'
        data={data}
        onChangeText={(type)=>{this.handleChange1(type)}}

      />
<Dropdown 
        containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
        rippleCentered={true}
        inputContainerStyle={{ borderBottomColor: 'green' }}
        label='Flavour'
        data={data2}
        onChangeText={(flavour)=>{this.handleChange2(flavour)}}

      />

<Dropdown 
        containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
        rippleCentered={true}
        inputContainerStyle={{ borderBottomColor: 'green' }}
        label='Size'
        data={data3}
        onChangeText={(size)=>{this.handleChange3(size)}}

      />

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmit()}>
          <Text style={styles.loginText}>ADD BATCH</Text>
        </TouchableHighlight>
        </ScrollView>
        </View>  
    );  
  }  
}  
class DifferentFlavour extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      type: 'select',
      flav1: 'select',
      flav2: 'select',
      flav3: 'select',
      flav4: 'select',
      size: 'select',
      number:'',
      counter:0
      
    };
}

onSubmit() {
    if(this.state.type=="select"  || this.state.size=="select")
    {
      Alert.alert("Please select all options"); 
    }
    else
    {
 
     var batchx = Math.random().toString(36).substring(3);
     var flav='';
      
     var j=0;
       for(var i=0;i<this.state.number*4;i++)
       {

        if(i%4==0  && i>0)
        {
         batchx = Math.random().toString(36).substring(3);
         j=0;
        }
            
            if(j==0){
          flav=this.state.flav1;
            }

          if(j==1){
            flav=this.state.flav2;
          }
          

          if(j==2){
            flav=this.state.flav3;
          }
          

          if(j==3)
          {
            flav=this.state.flav4;
          }
         
           j++;

          
         


          {/* Send data to API*/}
       var authOptions = {
        method: 'post',
        url: 'http://35.229.19.138:3000/api/org.authentication.whey.addwhey',
        data: JSON.stringify({"email": this.props.screenProps[0],"batchno":batchx,"type": this.state.type,"flavour": flav,"size": this.state.size}),
        headers: {
          'Content-Type': 'application/json'
         },
        json: true
       };
         
    axios(authOptions)
       .then((response) => {
          if(response.status==200){
           this.state.counter=this.state.counter+1;
           if(this.state.counter==this.state.number)
           {
             Alert.alert(this.state.number+" Whey Protein batch added successfully")
           }

          }
          else{
            Alert.alert("Something went wrong")
          }
          
           })
       .catch((error) => {
          Alert.alert("Something went wrong..")
         })
        }
    }
      
      
  }

  handleChange1(val)
  {
    this.setState({type:val})
  }

  handleChange21(val)
  {
    this.setState({flav1:val})
  }
  handleChange22(val)
  {
    this.setState({flav2:val})
  }
  handleChange23(val)
  {
    this.setState({flav3:val})
  }
  handleChange24(val)
  {
    this.setState({flav4:val})
  }

  handleChange3(val)
  {
    this.setState({size:val})
  }



render() {  
let data = [{
    value: 'CONCENTRATE',
    }, {
value: 'ISOLATE',
}, {
value: 'HYDROLYZED',
}];

let data2 = [{
    value:"DARK",
    }, {
    value:"MEDIUM",
    }, {
        value:"LIGHT",
    }, {
        value:"STRAWBERRY",
    }, {
        value:"VANILLA",
    }, {
    value:"BANANA_CREAM",
    }, {
        value:"CAFE_MOCHA",
}, {
    value:"COOKIES_AND_CREAM",
}, {
value:"RICH_MILK_CHOCOLATE",
}, {
value:"VANILLA",
}];

let data3 = [{
    value:"small",
    }, {
        value:"medium",
}, {
    value:"large",
}];

return (  

    <View style={styles.cents}>  
   <ScrollView>
     <View style={styles.inputContainer}>
<TextInput style={styles.inputs}
    placeholder="  Enter quantity"
    keyboardType="email-address"
    underlineColorAndroid='transparent'
    onChangeText={(number) => this.setState({number})}/>
</View>

<Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Type'
    data={data}
    onChangeText={(type)=>{this.handleChange1(type)}}

  />
<Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Flavour 1'
    data={data2}
    onChangeText={(flav1)=>{this.handleChange21(flav1)}}
  />
  <Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Flavour 2'
    data={data2}
    onChangeText={(flav2)=>{this.handleChange22(flav2)}}

  />
  <Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Flavour 3'
    data={data2}
    onChangeText={(flav3)=>{this.handleChange23(flav3)}}

  />
  <Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Flavour 4'
    data={data2}
    onChangeText={(flav4)=>{this.handleChange24(flav4)}}

  />

<Dropdown 
    containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
    rippleCentered={true}
    inputContainerStyle={{ borderBottomColor: 'green' }}
    label='Size'
    data={data3}
    onChangeText={(size)=>{this.handleChange3(size)}}

  />
<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onSubmit()}>
      <Text style={styles.loginText}>ADD BATCH</Text>
    </TouchableHighlight>
    </ScrollView>
    </View>  
);  
}  
}  
const TabNavigator  = createMaterialTopTabNavigator(  
    {  
    
        Home: { screen: SameFlavour,  
          navigationOptions:{  
              tabBarLabel:'SAME FLAVOUR',             
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                  </View>),  
          }  
      },    
        Profile: { screen: DifferentFlavour,  
            navigationOptions:{  
                tabBarLabel:'DIFFERENT FLAVOUR',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-clipboard'}/>  
                    </View>),  
                activeColor: 'white',  
                inactiveColor: 'black',    
                barStyle: { backgroundColor: 'green' },  
            }  
        },  
  
    },  
    {  
      tabBarOptions: {
        style: {
          backgroundColor: '#A9A9A9',
        },
        indicatorStyle: {
         
      },
      }
    },  
    
);  
const SomeStacks =  createAppContainer(TabNavigator);  

export default class addWhey extends React.Component
{
    render() {
      let rj = [this.props.screenProps[0],this.props.screenProps[1]];
        return(
          <View  style={styles.mycont}>
           <Header backgroundColor="green"
      leftComponent={<Icon style={[{color: "white"}]} size={35} name={'ios-arrow-back'} onPress={() => this.props.navigation.goBack()} />}
    centerComponent={{ text: "ADD WHEY PROTEIN BATCH", style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
           <SomeStacks  screenProps={rj}/>
          </View>  
        
        );
    }
}
 
const styles = StyleSheet.create({
  mycont:{flex:1},
  container: { flex: 8, padding: 16, paddingTop: 30, backgroundColor: '#fff' , flexDirection: 'column'},
  cent: {marginBottom:650},
  cents: {justifyContent: 'center', alignItems: 'center',paddingTop: 50},
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  inputContainer: {
      borderBottomColor: '#E8E8E8',
      backgroundColor: '#E8E8E8',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:250,
  borderRadius:30,
},
loginButton: {
  backgroundColor: "green",
},
loginText: {
  color: 'white',
}
});


