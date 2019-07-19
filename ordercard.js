import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';  
import { Card, CardItem, Right } from 'native-base'
class OrderCard extends Component {
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
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{this.props.itemPrice}</Text>
                    <Text> Delivered <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
                       (July 15, 2019)
                    </Text></Text>
                    
                    
                </Right>
                <Icon style={[{color: "grey", alignItems: 'flex-end'}]} size={20} name={"ios-arrow-forward"}/> 
            </CardItem>
        );
    }
}
export default OrderCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
