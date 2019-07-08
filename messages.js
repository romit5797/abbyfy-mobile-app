import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity,TouchableHighlight,Text,Image, View,Button,Alert,ScrollView} from 'react-native';  
import { Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';  
import axios from 'axios';
import Message2 from './message2';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
 
class Message extends Component {
    constructor(){
        super() 
          this.state = {
            checkMount:false,
            data2: [],
            data3:[],
            data4:[],
            data5:[],
            msgid:[],
            unique:[],
            unique2:[],
            unique3:[],
            counter:0,
            temp:0
          }
          this.getmessages=this.getmessages.bind(this);
          this.arrayUnique=this.arrayUnique.bind(this);
          this.getemails= this.getemails.bind(this);
      
        
      }

      componentDidMount() {
        this.state.checkMount=true;
  
      this.interval = setInterval(() => this.getmessages(), 2000);
     
        

    }

    componentWillUnmount() {
      this.state.checkMount=false;
    }

 onClickListener(val4,val5){
  this.props.navigation.navigate('Details', {
    reciever: val4,
    sender: val5,
  });
    }
      getemails()
      {
        axios.post('http://35.229.19.138:8080/emails/')
        .then((response) => {
    // handle success
    if(this.state.checkMount)
    {
    this.setState({data4:response.data.output})
    }
  })
     
      }
      
     
      getmessages()
      {
        
        axios.post('http://35.229.19.138:8080/mymessages/', {
          email: this.props.screenProps[0]
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
          
        

         
          for(var i=0;i<this.state.data3.length;i++)
          {
     
            let b = this.state.unique.slice(); //creates the clone of the state
            
              b[i] = this.state.data3[i].user_id_to;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique[j] == b[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique: b});
          }
          
          this.setState({counter:0});
          }


          for(var i=0;i<this.state.data3.length;i++)
          {

            let a = this.state.unique2.slice(); //creates the clone of the state
            
              a[i] = this.state.data3[i].user_id_from;
            for(var j=0;j<i+1;j++)
            {
              
            if(this.state.unique2[j] == a[i] )
            {
              this.setState({counter:1});
            }
          }
          
          if(this.state.counter==0){
            this.setState({unique2: a});
          }
          
          this.setState({counter:0});
          }

        this.state.unique3 = this.arrayUnique(this.state.unique.concat(this.state.unique2));
        
        for(var h=0;h<this.state.unique3.length;h++)
        {
          for(var g=0;g<this.state.data3.length;g++)
          {
          if((this.state.unique3[h]!=this.props.screenProps[0]) && ( (this.state.data3[g].user_id_from == this.state.unique3[h] && this.state.data3[g].user_id_to == this.props.screenProps[0]) || (this.state.data3[g].user_id_to == this.state.unique3[h] && this.state.data3[g].user_id_from == this.props.screenProps[0])))
          {
            this.state.msgid[h] = this.state.data3[g].message_id;

          }
        }
        if( this.state.msgid[h] == null)
        {
          this.state.msgid[h] = 0;
        }
        if( this.state.unique3[h] == null)
        {
          this.state.unique3[h] = this.props.screenProps[0];
        }
      }
    
     
      for(var l=0;l<this.state.unique3.length;l++)
      {
        for(var o=l;o<this.state.unique3.length;o++)
      {
        if(this.state.msgid[l]<this.state.msgid[o])
        {
          this.state.temp=this.state.msgid[l];
          this.state.msgid[l]=this.state.msgid[o];
          this.state.msgid[o]=this.state.temp;

         this.state.temp=this.state.unique3[l];
          this.state.unique3[l]=this.state.unique3[o];
          this.state.unique3[o]=this.state.temp;

        }
      }
    }
  }}
      })

      }

      arrayUnique(array) {
        var a = array.concat();
        for(var i=0; i<a.length; ++i) {
            for(var j=i+1; j<a.length; ++j) {
                if(a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
    
        return a;
    }


  render() {
    return (
        <View>
               
   <Header backgroundColor="green"
  leftComponent={<Icon style={[{color: "white"}]} size={40} name={'ios-arrow-back'} onPress={ () => { this.goBack() } }  />}
  centerComponent={{ text: 'MY MESSAGES', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

<ScrollView>

{
            this.state.unique3.filter((item) => item != this.props.screenProps[0] ).map((item, index) => {
              for(var i=0;i<this.state.data3.length;i++)
            {
             if((this.state.data3[i].user_id_from == this.props.screenProps[0] && this.state.data3[i].user_id_to == item)||(this.state.data3[i].user_id_from == item && this.state.data3[i].user_id_to == this.props.screenProps[0]))
             { if(this.state.data3[i].content!=null)
               var last = this.state.data3[i].content;
             }
            }
             
             return ( 
              <View>
              <TouchableOpacity  onPress={() => this.onClickListener(item,this.props.screenProps[0])}>
     
              <View style = {styles.listItemContainer}>
               <View style= {styles.iconContainer}>
      <Icon style={[{color: "black"}]} size={25} name={"ios-person"}/> 
         </View>
      <View style = {styles.callerDetailsContainer}>
       <View style={styles.callerDetailsContainerWrap}>
        <View style={styles.nameContainer}>
          <Text key={index}>{item}</Text>
          <View style={styles.dateContainer}>
           <Text key={index} style={{ fontWeight:'400', color:'#7c7c7f', fontSize:12 }}>{last}</Text>
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
   );
  })
  
}
  
            </ScrollView>
        </View>
    )
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
        flex: 1
      },
      dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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
      } 
});  


const RootStack = createStackNavigator(
  {
      Loginscreen : Message,
    Details: Message2,
  },
  {
    initialRouteName: 'Loginscreen',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Message1 extends React.Component {
  render() {
    let rj = [this.props.screenProps[0],this.props.screenProps[1]];
    return(
      <AppContainer screenProps={rj}/>
    );
    
  }
}

