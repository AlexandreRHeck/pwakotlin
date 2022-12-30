import React ,{useState,useEffect}from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View,Dimensions, Button, Platform } from 'react-native';
import * as Location from 'expo-location';

export default function Maps() {
  const [mapRegion,setMapRegion] = useState({
    latitude: -29.942289,
    longitude:-50.990788,
    latitudeDelta:0.0900,
    longitudeDelta:0.090,
  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      console.log('Acesso ao Local nao foi permitido');
    }

  
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: 0.0900,
      latitudeDelta: 0.0900,
    });
    console.log(location.coords.latitude, location.coords.longitude);

  }

  useEffect(()=>{
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='LocalAtual'/> 
      </MapView>
      <Button title='GetLOcal' onPress={userLocation}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
