import {StyleSheet, View, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import {Platform} from 'react-native';

export default StyleSheet.create({
    
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        dropdown: {
          flex: 1,
          maxWidth: 300,
          marginBottom:5,
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        map: {
           width: Dimensions.get('window').width - Constants.statusBarHeight,
            height: Dimensions.get('window').height - 600

        },

        dropDownContainerStyle: {
          backgroundColor: "#353adb"
        },
        dataentry:{
          fontSize: 25,
          marginBottom:5,
          fontColor: '#20232a',
        },
        weightbox:{
          width:100,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom:5,
        },
        otsikko:{
          fontSize: 25,
          fontColor: 'blue',
          fontWeight: 'bold',
        },
        alaotsikko:{
          fontSize: 15,
          marginBottom:25,
          marginTop:25,
          fontColor: 'blue',
          fontWeight: 'bold',
        },
        radio:{
          fontSize: 50,
          fontColor: 'blue',
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom:5,
        },
        calculate:{
          paddingVertical:10,
          borderWidth: 1,
          borderRadius: 5,
          marginBottom:5,
          backgroundColor:'#61dafb', 
        
        },
        
        green:{
          color: '#7CFC00',
        },
        yellow:{
          color: '#FFFF00',
        },
        red:{
          color: '#880808',
        }
      });
      
