import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';  
import { Card, CardItem, Right } from 'native-base'
import StarRating from 'react-native-star-rating'
class ItemCard extends Component {
    render() {
        return (
            <CardItem style={{ marginTop: 5 }}>

                <View>
                    <Image style={{ height: 90, width: 60 }}
                        source={this.props.imageUri} />
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
                <View>
  <Icon style={{position: 'absolute', left: Dimensions.get("window").width*0.6,color:'grey'}} size={25} name={'md-trash'} onPress={() => alert("No coupons available right now")}/>
</View>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.itemCreator}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{this.props.itemPrice}<Text style={{ fontSize: 12,color: 'grey' }}>| Quantity:{this.props.itemQuantity}</Text></Text>
                    <Text><Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
                        You save
                    </Text> ₹{this.props.savings}</Text>

                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={12}
                        fullStarColor='orange'
                        emptyStarColor='orange'


                    />
                </Right>
            </CardItem>
        );
    }
}
export default ItemCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
