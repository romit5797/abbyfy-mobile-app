import React from 'react';
import {
    View,
    Text,TextInput,
    Image,
    Dimensions,Button,
    StyleSheet,ScrollView,
    TouchableWithoutFeedback,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 2;
const aspectRatio = 9 / 10;

const Product = props => {
	const isPDP=true;
 
    const imageStyle = isPDP ? {
        width: screenWidth,
        height: screenWidth / aspectRatio,
    } : {};
    const containerStyle = isPDP ? {paddingLeft: 0} : {};
    const elmStyle = isPDP ? {paddingLeft: 15} : {};

	return (
        <ScrollView
         scrollEventThrottle={16}>
		<View style={[styles.container, containerStyle]}>
            
                <View>
                    <Image
                        source={{ uri: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/4/6/6/0/4100664-3-eng-GB/KitKat-cocoa-content-upped-13-in-sugar-reduction-push_wrbm_large.jpg' }}
                        style={[styles.image, imageStyle]}
                    />
                    <Text style={[styles.brand, elmStyle]}>Kitkat</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
        <Button title="+" style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <TextInput
         placeholder="Quantity"
         underlineColorAndroid='transparent'
         keyboardType={'numeric'}
         style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
        <Button title="-" style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>

                    <Text style={[styles.price, elmStyle]}>Rs 10</Text>
                    <Text style={[styles.desc, elmStyle]}>KitKat is a perfect balance of chocolate and wafer first launched in the UK in 1935 as 'Chocolate Crisp'.</Text>
                </View>
            
        </View>
        </ScrollView>
	);
};


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
});

export default Product;