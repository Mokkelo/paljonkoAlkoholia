import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import {useCallback} from 'react'
import styles from './Styles';
import MapView,{Marker} from 'react-native-maps';
import Axios from 'react-native'
import * as Location from 'expo-location'


export default function App() {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [KyllaEi, setKyllaEi] = useState(false);
  const [Paljonko, setPaljonko] = useState(0);
  const [latitude, setLatitude] = useState(65.000);
  const [longitude, setLongitude] = useState(20.000);
  const [ViewLatitude, setViewLatitude] = useState(65.000);
  const [ViewLongitude, setViewLongitude] = useState(25.000);
  const [generaattori, setGeneraattori] = useState(0);
  const [kaannos, setKaannos] = useState(0)
  const [rate, setRate] = useState(0)

  const [location, setLocation] = useState({});
  const mapRef = React.createRef();
  

  var requestURL = 'https://api.exchangerate.host/latest';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  
  request.onload = function() {
    var response = request.response;
    setRate(response.rates.BTC)
    console.log(response.rates.BTC)
    if (KyllaEi != false){
      console.log(Paljonko)
      if (Paljonko == 1 ){setGeneraattori(1)} 
      else if (Paljonko ==2 ){setGeneraattori(2)}
      else if (Paljonko == 3 ){setGeneraattori(3)}
      else if (Paljonko == 4 ){setGeneraattori(4)}
  }
  }
          
const getLocation = () => {
  mapRef.current.animateCamera({center: {"latitude":latitude, "longitude": longitude}
})
}

const getkurssi = () => {
let total = 0;
total = Paljonko*rate*5.2
setKaannos(total)
}

const tallenna = () => {

}

  const onOpen = useCallback(() =>{
    setOpen2(false);
  }, []);

  const KyllaEiList = [
    {label: 'Kyllä', value: true},
    {label: 'Ei :o', value: false}
  ];

  const PaljonkoList = [
    {label: 'Vähän', value: '1'},
    {label: 'Vähän enemmän', value: '2'},
    {label: 'Paljon', value: '3'},
    {label: 'Tosi Monta!!!', value: '4'}
  ]


  const calcBeerQuantity = () => {
    console.log("Paljonko")
    if (KyllaEi != false){
      if (Paljonko > 0){
      console.log(Paljonko)}
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
    <View style={styles.container}>
      <Text style={styles.otsikko}>Montako alkoholia Mokolle!</Text>
      <Text style={styles.alaotsikko}> Onko Mokko auttanut luokkalaisiaan? </Text>
      <DropDownPicker
      style={styles.dropdown}
      zIndex={3000}
      zIndexInverse={1000}
      open={open}
      onOpen={onOpen}
      value={KyllaEi}
      placeholder="Select bottles count"
      items={KyllaEiList}
      setOpen={setOpen}
      setValue={setKyllaEi}
      dropDownDirection="BOTTOM"
      />
      <Text style={styles.alaotsikko}> Paljonko Mokko on auttanut?</Text>
      <DropDownPicker
      style={styles.dropdown}
      zIndex={1000}
      zIndexInverse={3000}
      open={open2}
    
      value={Paljonko}
      placeholder="Onko tosiaan paljon?"
      items={PaljonkoList}
      setOpen={setOpen2}
      setValue={setPaljonko}
      dropDownDirection="BOTTOM"
      onPress={calcBeerQuantity}
      />
      <StatusBar style="auto" />
      <Button title="Etsi Mokon sijainti" onPress={getLocation}> </Button>

      <MapView
      ref={mapRef}
         style={styles.map} 
    
      initialRegion ={{
      latitude: 65.0800,
      longitude: 25.4800,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}>
      <Marker
      title ="Mokon sijainti, send help"
      coordinate ={{latitude: latitude, longitude: longitude}}
      />
      </MapView>
      <Text style={styles.dataentry}> Sopiva olutmäärä mokolle on</Text>
      <Text style={styles.dataentry}> {generaattori}</Text>

      <Button title="Hae ja käännä kurssi?" style={styles.button} onPress={getkurssi}> </Button>
      <Text style={styles.dataentry}> Tämä tekee {kaannos} bitcoinia, kun olut on 5.2€ </Text>
      <Button style={styles.button} onPress={tallenna} title="Tallenna puhelimeen velkamuistutus"></Button>
    </View>

    </ScrollView>
    </SafeAreaView>
  );
}

