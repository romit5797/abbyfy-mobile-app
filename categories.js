import React from 'react';  
import {StyleSheet,Text,TextInput,Image, View,Button,ScrollView,SafeAreaView,ActivityIndicator,TouchableOpacity} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import Slideshow from 'react-native-image-slider-show';
import { SearchBar ,Header, ThemeProvider } from 'react-native-elements';
import { Dimensions } from 'react-native'
import SubCategory from './subcategories';
const { height, width } = Dimensions.get('window')
import axios from 'axios';
import Grocery from './grocery';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
        search: '',
        categorydata:[],
        subcategorydata:[],
        testdata:[]
    };
  }

  componentDidMount() {

    axios.post('http://35.229.19.138:8080/categories/', {
    })
    .then((response) => {
      this.setState({categorydata:response.data.output})

      for(var i=0;i<this.state.categorydata.length;i++)
      {
      axios.post('http://35.229.19.138:8080/subcategories/', {
        category: this.state.categorydata[i].CategoryName
      })
      .then((response) => {
        
        this.state.subcategorydata.push(response.data.output);
        this.setState({testdata: this.state.subcategorydata});
        console.log(this.state.testdata)
      })
      .catch((e) => 
      {
        console.error(e);
      });
    }
    
    })
    .catch((e) => 
    {
      console.error(e);
    });

  }

  display()
  {
    if(this.state.testdata.length==0)
    {
      return(
        <View style = {styles.container2}>
        <ActivityIndicator
           color = '#bab86c'
           size = "large"
           style = {styles.activityIndicator}/>
     </View>
      )
    }
    else{
return(
<View>
    {
      this.state.testdata.map((item, index) => {
                    return(
           <View style={{ marginTop: 40 }}>
               <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                   {this.state.testdata[index][0].CategoryName}
               </Text>
               <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {
             item.map(numeros=>
               
              
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details2',{SubCategoryName: numeros.SubCategoryName})}>
                
               <SubCategory 
                           width={width}
                           imageUri={{uri:numeros.SubCategoryImage}}
                           name={numeros.SubCategoryName}
                       />
                       </TouchableOpacity>
                       )
                    }
                    
               </View>
           </View>
           )
          
        })

        }
        </View>
) 
      }
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>

            <View style={styles.headercontainer}>
          <View style={styles.navBar}>
  <View style={styles.leftContainer}>
 </View>
  <Text style={{color:'white',fontSize: 18, fontWeight: '600'}}>
   CATEGORIES
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
    </View>
    </View>
</View>
</View>


      
        <ScrollView style={styles.scroller}
                        scrollEventThrottle={16}
                    >
                      {this.display()}
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
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
    });