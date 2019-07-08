import React from "react";
import axios from 'axios';
import {ScrollView,Image,StyleSheet, Text, View,Button} from 'react-native';  
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Header,ThemeProvider } from 'react-native-elements';

export default class Retailers extends React.Component {
    constructor(){
        super() 
          this.state = {
            data: [],
            owner:'nil'
          }
        
      }
      componentDidMount() {
        fetch("http://35.229.19.138:3000/api/org.authentication.whey.Retailer")
        // when we get a response map the body to json
        .then(response => response.json())
        // and update the state data to said json
        .then(data => this.setState({ data }));
        
        
      }

        render() {
       
          return (
            <View style={styles.container}>
              <ScrollView horizontal={true}>
            
                  <ScrollView style={styles.dataWrapper}>
                 
                      {
                        this.state.data.map((rowData, index) => (
                          <View style={{ flex: 3, alignSelf: 'stretch',  flexDirection: 'column', }}>
             
                <View style={{ flex: 1,alignSelf: 'stretch'}} >
                <Image style={{width: 40, height:20}} source={{uri: 'https://mytek.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg'}}/>
                <Text>{rowData.name}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >
                <Text>Email : {rowData.email}</Text>
                </View>
                <View style={{ flex: 1,alignSelf: 'stretch' }} >
                <Text>Country : {rowData.address.country}</Text>
                </View>

                </View>

           
                       
                         
                        ))
                      }
                    
                    </ScrollView>
              </ScrollView>
            </View>
          )
        }
      }
       
      const styles = StyleSheet.create({
        container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' , flexDirection: 'column'},
        header: { height: 50, backgroundColor: '#537791' },
        text: { textAlign: 'center', fontWeight: '100' },
        dataWrapper: { marginTop: -1 },
        row: { height: 40, backgroundColor: '#E7E6E1' }
      });