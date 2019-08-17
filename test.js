import React from 'react';  
import {ActivityIndicator,StyleSheet,AsyncStorage ,TouchableHighlight,Text,Image, View,Button,BackHandler} from 'react-native';  
import { createBottomTabNavigator,createStackNavigator, createAppContainer,StackActions,NavigationActions} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
import SideComponent from './sidecomponent';
import Home from './home';
import Categories from './categories';
import Account from './account';
import Cart from './cart';
import App from './App';
import HomeScreen from './home';
import Product from './product';
import Grocery from './grocery';
import MyOrders from './myorders';
import MyAddresses from './myaddresses';
import AccountInterface from './account';
import Search from './search';
import ProductSub from './subcatproducts';
import CartScreen2 from './cart2';
import Coupon from './coupon';
import Success from './orderplacedsuccessfully';


const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Loginscreen' })],
});

const HomeStack = createStackNavigator(
    {
        Loginscreen : HomeScreen,
        Details1: Product,
        Details2: Grocery,
        Details3: Search,
        Details4: ProductSub

    },
    {
      initialRouteName: 'Loginscreen',
      headerMode: 'none'
    }
  );

  const CategoryStack = createStackNavigator(
    {
        Loginscreen : Categories,
        Details1: Product,
        Details2: ProductSub
        
    },
    {
      initialRouteName: 'Loginscreen',
      headerMode: 'none'
    }
  );


const CartStack = createStackNavigator(
  {
      Loginscreen : Cart,
      Details: CartScreen2,
      Details2:Coupon,
      Details3:Success,
      Details4: MyOrders
  },
  {
    initialRouteName: 'Loginscreen',
    headerMode: 'none'
  }
);

  const AccountStack = createStackNavigator(
    {
        Loginscreen : AccountInterface,
        Details1: MyOrders,
        Details2: MyAddresses,
        Details3: AccountInterface,
        Details4: AccountInterface,
        Details4: AccountInterface,
        Details5: AccountInterface,
        Details6: AccountInterface,
        Details7: AccountInterface,
        Details8: AccountInterface,
        Details9: AccountInterface,
        Details10: {
          screen:() => <App/>,  
        },
     
    },
    {
      initialRouteName: 'Loginscreen',
      headerMode: 'none'
    }
  );

const TabNavigator  = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeStack,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                     
                 <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: CategoryStack,  
            navigationOptions:{  
                tabBarLabel:'Categories',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-listb' : 'md-list'}/>  
                    </View>),  
                 activeColor: 'green',  
                 inactiveColor: '#D3D3D3',  
                 barStyle: { backgroundColor: '#F5F5F5' },
                   
            }  
        },  
        Cart: { screen: CartStack,
            navigationOptions:{  
              tabBarOnPress: ({navigation, defaultHandler}) => {
                navigation.dispatch(StackActions.popToTop());
                defaultHandler();
            },
                tabBarLabel:'Cart',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}/>  
                    </View>),  
                 activeColor: 'green',  
                 inactiveColor: '#D3D3D3',  
                 barStyle: { backgroundColor: '#F5F5F5' },   
            }  
        },  
        Account: {  
            screen: AccountStack,
              navigationOptions:{ 
                tabBarLabel:'Account',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>  
                    </View>),  
            }  
        },  
    },  
    {   labeled: true, 
        shifting: false,
      initialRouteName: "Home",  
      activeColor: 'green',  
      inactiveColor: '#A9A9A9',  
      barStyle: { backgroundColor: '#F8F8F8' },  
      
    },  
); 

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "Details1") {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

  AccountStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "Details10") {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };


const MyStack = createAppContainer(TabNavigator);



export default class Test extends React.Component
{
   
    render() {
         return(
            
         <MyStack/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
  