import React, { Component } from 'react';
import axios from 'axios';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import Message from './messages';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import { Header, ThemeProvider } from 'react-native-elements';

 export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data2: [],
      data3:[],
      data5:[],
      beta:'1',
      beta2:'1',
      mymsg:'',
      counter:0
    }
    this.send=this.send.bind(this);
    this.getmessages=this.getmessages.bind(this);
   
  
}

componentDidMount() {
  this.state.checkMount=true;

  this.interval = setInterval(() => this.getmessages(), 1000);
  

}
componentWillUnmount() {
  this.state.checkMount = false;
}

getmessages()
{

  axios.post('http://35.229.19.138:8080/mymessages/', {
    email: this.props.navigation.state.params.sender
  })
  .then((response) => {
    if(this.state.checkMount)
  {
    this.setState({ data2 : response.data.output }); 
    if(response.data.output.length==this.state.data5.length)  
    { return;}
   else{
    this.setState({ data5 : response.data.output });       
    var obj = this.state.data2.sort((a,b) => (a.message_id > b.message_id) ? 1 : ((b.message_id > a.message_id) ? -1 : 0)); 
    this.setState({ data3 : obj }); 

  this.setState({beta: this.props.navigation.state.params.reciever});
  this.setState({beta2: this.props.navigation.state.params.sender});
  }}
})


}

send(from,to,cont,dated)
{
if(cont!=null)
{
  axios.post('http://35.229.19.138:8080/sendmessages/', {
    user_id_from: from,
    user_id_to:to,
    content: cont,
    date_created:dated
  })
  .then((response) => {
   
})
}
}
  render() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd ;
    
    return (
     
      <View style={styles.container}>
      <Header backgroundColor="green"
      leftComponent={<Icon style={[{color: "white"}]} size={35} name={'ios-arrow-back'} onPress={() => this.props.navigation.goBack()} />}
    centerComponent={{ text: this.props.navigation.state.params.reciever, style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<ScrollView>
{  this.state.data3.filter((item) => (item.user_id_from ==  this.state.beta2 || item.user_id_from ==  this.state.beta ) && (item.user_id_to == this.state.beta || item.user_id_to ==  this.state.beta2) ).map((item, index) => {

if(item.user_id_from == this.state.beta  && item.content!=null )
{
return (
   
  <View style={[styles.item, styles.itemOut]}>
  <View style={[styles.balloon]}>
    <Text>{item.content}</Text>
    </View>
    </View>

 );
}
else  if(item.user_id_from == this.state.beta2 && item.content!=null)
{
return (
    
  
  <View style={[styles.item, styles.itemIn]}>
    <View style={[styles.balloon]}>
      <Text>{item.content}</Text>
    </View>
  
  </View>
 );
}
}) }
       </ScrollView>       
             
            
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(mymsg) => this.setState({mymsg})}/>
          </View>
          <TouchableHighlight style={styles.btnSend} onPress={() => this.send(this.state.beta,this.state.beta2,this.state.mymsg,today)}>
              <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
              </TouchableHighlight>
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
 
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
  height:60,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  
