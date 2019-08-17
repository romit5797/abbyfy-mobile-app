import React from 'react';
import {
    View,
    Text,TextInput,
    Image,AsyncStorage,
    Dimensions,Button,TouchableOpacity,
    StyleSheet,ScrollView,ActivityIndicator,
    TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 1.5;
const aspectRatio = 9 / 10;
const isPDP=true;
 
const imageStyle = isPDP ? {
    width: screenWidth,
    height: screenWidth / aspectRatio,
} : {};
const containerStyle = isPDP ? {paddingLeft: 0} : {};
const elmStyle = isPDP ? {paddingLeft: 15} : {};


class Product extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            search: '',
            quantity:0,
            productdata:[]
        };
      }
    
    componentDidMount() {
        axios.post('http://35.229.19.138:8080/product/', {
            product: this.props.navigation.state.params.ProductID
    })
    .then((response) => {
      this.setState({productdata:response.data.output[0]})
    })
    .catch((e) => 
    {
      console.error(e);
    });
    }

    incrementfunc(val1,val2)
    {
     this.setState({quantity : this.state.quantity+val2});
    }

    decrementfunc(val1,val2)
    {
       if(val1==0)
       {
            return null;
       }
       else{
        this.setState({quantity : this.state.quantity-val2});
       }
    }

    addtocart(val1,val2)
    {
        if(val2==0)
        {
            alert("Please add some quantity to continue..");
        }
        else{
        AsyncStorage.getItem('phone').then((token) => {
        axios.post('http://35.229.19.138:8080/addtocart/', {
            phone: "+91"+token,
            product: val1,
            delivery:0,
            quantity:val2
    })
    .then((response) => {
     if(response.status==200)
     {
         alert("Item added to cart..");
     }
     else{
         alert("Something went wrong..");
     }
    })
    .catch((e) => 
    {
      console.error(e);
    });
})
        }
    }

    display()
    {
        if(this.state.productdata.length==0)
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
                <View style={[styles.container, containerStyle]}>
            
        <View>
                    <Image
                        source={{ uri: this.state.productdata.ProductImage}}
                        style={[styles.image, imageStyle]}
                    />
                    <Text style={[styles.brand, elmStyle]}>{this.state.productdata.ProductName+" "+this.state.productdata.Size}</Text>
                    <Text style={[styles.price, elmStyle]}>MOQ: {this.state.productdata.Min} | Marign {(this.state.productdata.Margin).toFixed(2)}%</Text>
                    <Text style={[styles.price, elmStyle]}>MRP :₹{((this.state.productdata.Price-(this.state.productdata.Price*(this.state.productdata.Margin/100)))*this.state.quantity).toFixed(2)}| <Text style={{ textDecorationLine: 'line-through' }}>₹{((this.state.productdata.Price)*this.state.quantity).toFixed(2)}</Text></Text>
                    <View style={{flex: 1, flexDirection: 'row',paddingLeft:10}}>
       
                    <TouchableOpacity style={styles.button2} onPress={() => this.incrementfunc(this.state.quantity,this.state.productdata.Min)}  >
                    <Text style={{color: 'white'}}>+</Text>
                    </TouchableOpacity>
      <Text style={{color: 'black',height:30}}>
        {this.state.quantity}
        </Text>
        <TouchableOpacity style={styles.button2}  onPress={() => this.decrementfunc(this.state.quantity,this.state.productdata.Min)} >
                    <Text style={{color: 'white'}}>-</Text>
                    </TouchableOpacity>

      </View>

                    <Text style={[styles.desc, elmStyle]}>{this.state.productdata.ProductDescription}</Text>
                    
                </View>
            
        </View>
        
            )
        }
    }

        render(){
	return (
        <View style={{flex: 1}}>
      
        <ScrollView  
         scrollEventThrottle={16}>
		{this.display()}
        </ScrollView>
       
        <Button
 style={styles.button}
  title="Add to cart" 
  color='#6b8e23'
  onPress={() => this.addtocart(this.state.productdata.ID,this.state.quantity)} />    
       
         

        
</View>
    );
    }
}


const styles = StyleSheet.create({
	image: {
		width: rowWidth,
        height: rowWidth / aspectRatio,
        borderColor: '#d5d6d9',
        borderWidth: 0.5,
        paddingLeft:10,
        paddingRight:10
    },
    container: {
        paddingLeft: itemSpacing,
        backgroundColor: '#ffffff',
    },
    brand: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 14,
        color: '#161925',
        width: rowWidth,
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: '#94989f',
        width: rowWidth,
    },
    desc: {
        marginTop: 5,
        fontWeight: '200',
        marginBottom: 20,
        fontSize: 11,
        color: '#94989f',
        width: rowWidth,
    },
    button: {
        position: 'absolute',
        bottom:0
         
      },
      button2: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#6b8e23',
        elevation: 2, // Android
        height: 30,
        width: 30,
        borderRadius:5,
        borderWidth: 0.1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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

export default Product;