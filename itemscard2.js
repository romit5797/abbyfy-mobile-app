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
class ItemCard2 extends Component {
    render() {
        return (
            <CardItem style={{ marginTop: 5 }}>

                <View>
                    <Image style={{ height: 90, width: 60 }}
                        source={this.props.imageUri} />
                </View>
                <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
            
                    <Text>{this.props.itemName}</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>{this.props.itemCreator}</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{this.props.itemPrice}<Text style={{ fontSize: 12,color: 'grey' }}>| <Text style={{ textDecorationLine: 'line-through' }}>{this.props.itemRealPrice}</Text>  Margin:{this.props.itemMargin}</Text></Text>
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
export default ItemCard2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
