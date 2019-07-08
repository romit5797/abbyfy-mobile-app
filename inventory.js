import React, { Component } from 'react';
import {StyleSheet,ScrollView,
  Text,
  View,
  Picker,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert } from 'react-native';
  import { createStackNavigator, createAppContainer } from 'react-navigation'; 
  import Test from './test';
  import axios from 'axios';
  import { Dropdown } from 'react-native-material-dropdown';
  import { Header,ThemeProvider } from 'react-native-elements';
  import {Input, Card, ListItem, Icon } from 'react-native-elements'




class Inventory extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            option:'',
            val:'',
            trueval:'all',
            owner:'nil'
          }
          this.ret = this.ret.bind(this);
        
      }
      componentDidMount() {
        fetch("http://35.229.19.138:3000/api/org.authentication.whey.WheyProtein")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
       
      }
      handleChange1 (val) {
        this.setState({
            option:val
        });
    }
    handleChange2 = (e) => {
      this.setState({
          val: e.target.value,
      })
  }

  ret(val)
{
    this.setState({trueval:val});
   }

  onSubmit2 = (e) => {
    if(this.state.trueval=="all")
  {
    
                
   if(this.props.screenProps[1]=="Manufacturer")
              {
                return(
                  <View >
                 
                
                      <ScrollView>
                     
                      {
                this.state.data.map((item, key) => (
                <View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>
   
            
<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

                <Text>Asset Id: {item.assetKey}</Text>
                <Text>Batch no.: {item.batchno}</Text>
                <Text>Flavour: {item.Flavour}</Text>
                <Text>Type: {item.Type}</Text>
                <Text>Size: {item.Size}</Text>
                <Text>Time: {item.timeoftransaction}</Text>
                <Text>Owner: {item.owner}</Text>
</Card>
                </View>


 
             
   
))
}
                        
                  </ScrollView>
                </View>      
                    )
        }    
    else{
    
      return(       
      
          <View >
         
        
              <ScrollView>
             
              {
        this.state.data.filter((item) => item.owner == this.state.owner).map((item, key) => (
        <View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>

    
<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

        <Text>Asset Id: {item.assetKey}</Text>
        <Text>Batch no.: {item.batchno}</Text>
        <Text>Flavour: {item.Flavour}</Text>
        <Text>Type: {item.Type}</Text>
        <Text>Size: {item.Size}</Text>
        <Text>Time: {item.timeoftransaction}</Text>
        <Text>Owner: {item.owner}</Text>
</Card>
        </View>



     

))
}
                
          </ScrollView>
        </View>      
            )
}}

else if(this.state.trueval=="time"){
        
  if(this.props.screenProps[1]=="Manufacturer")
  {
    return(
      <View >
         
        
      <ScrollView>
     
      {
this.state.data.filter((item) => item.timeoftransaction == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
        
  </ScrollView>
</View>   
)}
else{
                
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.timeoftransaction==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   
)

}}

else  if(this.state.trueval=="owner"){
                 
  if(this.props.screenProps[1]=="Manufacturer")
  {
    return(
      <View >
         
        
      <ScrollView>
     
      {
this.state.data.filter((item) => item.owner == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
        
  </ScrollView>
</View>   
)
    
}else{
                  
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.owner==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   
  )


}}
else if(this.state.trueval=="type"){
              
  if(this.props.screenProps[1]=="Manufacturer")
  {
    return(
                  <View >
                 
                
                  <ScrollView>
                 
                  {
            this.state.data.filter((item) => item.Type == this.state.val).map((item, key) => (
            <View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>

        
<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

            <Text>Asset Id: {item.assetKey}</Text>
            <Text>Batch no.: {item.batchno}</Text>
            <Text>Flavour: {item.Flavour}</Text>
            <Text>Type: {item.Type}</Text>
            <Text>Size: {item.Size}</Text>
            <Text>Time: {item.timeoftransaction}</Text>
            <Text>Owner: {item.owner}</Text>
</Card>
            </View>



         

))
}
                    
              </ScrollView>
            </View>             
)}
else{
         
return(
  <View >
                 
                
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.Type==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>        
)

}}

else if(this.state.trueval=="wheyid"){
  
  if(this.props.screenProps[1]=="Manufacturer")
  {
    return(
      <View >
         
        
      <ScrollView>
     
      {
this.state.data.filter((item) => item.assetKey == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
        
  </ScrollView>
</View>   
             
    )
}else{
             
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.assetKey==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   

  )


}}

else if(this.state.trueval=="batchno"){
                   
if(this.props.screenProps[1]=="Manufacturer")
{
  return(
    <View >
         
        
    <ScrollView>
   
    {
this.state.data.filter((item) => item.batchno == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
      
</ScrollView>
</View>   

)
}else{
         
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.batchno==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   
)

}}
else if(this.state.trueval=="size"){
         
if(this.props.screenProps[1]=="Manufacturer")
{
  return(
    <View >
         
        
    <ScrollView>
   
    {
this.state.data.filter((item) => item.Size == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
      
</ScrollView>
</View>   
    )
}
else{
        
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.Size==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   
    )

}}

else if(this.state.trueval=="flavour"){
                    
if(this.props.screenProps[1]=="Manufacturer")
{
  return(
    <View >
         
        
    <ScrollView>
   
    {
this.state.data.filter((item) => item.Flavour == this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
      
</ScrollView>
</View>   
)
  
}else{
       
return(
  <View >
         
        
  <ScrollView>
 
  {
this.state.data.filter((item) => item.owner == this.state.owner && item.Flavour==this.state.val).map((item, key) => (
<View style={{ flex: 8, alignSelf: 'stretch',  flexDirection: 'column', }}>


<Card   image={{uri: 'https://10atop.com/wp-content/uploads/2018/09/Best-Whey-Protein-Powder.jpg'}}>         

<Text>Asset Id: {item.assetKey}</Text>
<Text>Batch no.: {item.batchno}</Text>
<Text>Flavour: {item.Flavour}</Text>
<Text>Type: {item.Type}</Text>
<Text>Size: {item.Size}</Text>
<Text>Time: {item.timeoftransaction}</Text>
<Text>Owner: {item.owner}</Text>
</Card>
</View>





))
}
    
</ScrollView>
</View>   
)

}}






  }

render() {
        
  let data = [{
    value: 'all',
    }, {
value: 'wheyid',
}, {
value: 'batchno',
}, {
value: 'owner',
}, {
value: 'time',
}, {
value: 'type',
}, {
value: 'flavour',
}, {
value: 'size',
}];

  if(this.props.screenProps[1]=="Manufacturer")
  {
    this.state.owner=true;
  }
  else if(this.props.screenProps[1]=="Distributor")
  {
  this.state.owner="resource:org.authentication.whey.Distributor#"+this.props.screenProps[0];
  }
  else if(this.props.screenProps[1]=="Retailer")
  {
    this.state.owner="resource:org.authentication.whey.Retailer#"+this.props.screenProps[0];
  }
  
  return (
    <View >
   
   <Header backgroundColor="green"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY STOCK INVENTORY', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

<View style={styles.cents}>
<Dropdown 
        containerStyle={{borderColor:'lightgrey', borderRadius:10, width:250, height:90, paddingLeft:10}}
        rippleCentered={true}
        inputContainerStyle={{ borderBottomColor: 'green' }}
        label='select (Default : all)'
        data={data}
        onChangeText={(value)=>{this.handleChange1(value)}}

      />

       <View style={styles.inputContainer}>
     <TextInput style={styles.inputs}
              placeholder="  Enter value to search.."
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(val) => this.setState({val})}/>
</View>

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.ret(this.state.option)}>
          <Text style={styles.loginText}>SEARCH</Text>
        </TouchableHighlight>
        </View>

        <View style={styles.cent}>
         {this.onSubmit2()}
         </View>
                    </View>
  );
}
}

export default Inventory;

const styles = StyleSheet.create({
  container: { flex: 8, padding: 16, paddingTop: 30, backgroundColor: '#fff' , flexDirection: 'column'},
  cent: {marginBottom:650},
  cents: {justifyContent: 'center', alignItems: 'center'},
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
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

