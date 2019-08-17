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
 
    getMonthFromString(mon){
        var m;
        if(mon.substring(0,1)==0)
        {
         m=mon.substring(1,2)-1;
        }
        else
        {
            m=mon-1;
        }
        
        var date = new Date(2009, m , 10);  // 2009-11-10
        var month = date.toLocaleString('default', { month: 'long' });
       
        return month;
      }

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
                    <Text> {this.props.status} <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
                    {this.props.date!=null ? "("+(this.props.date).substring(8,10)+" "+this.getMonthFromString((this.props.date).substring(5,7))+" "+ (this.props.date).substring(0,4)+")" : null }
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
