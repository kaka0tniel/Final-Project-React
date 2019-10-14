import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ScrollView, TextInput, Alert, StyleSheet, Image
} from 'react-native';
import { db } from '../../config/config';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1Ijoib3RuaWVsdHVybmlwIiwiYSI6ImNrMWJneWlwMDAzMnYzaXBtN3AzOXlxOWsifQ.Sal3nZuZKw41lPRIyiIiEw');
ListHotel = () => {
    let dataFirebase = db.ref('hotels');
    const [data, setData] = useState();
    const [key, setKey] = useState();
    let [name, setName] = useState("");
    let [lat, setLat] = useState("");
    let [long, setLong] = useState("");
    let [harga, setHarga] = useState("");
    let [fasilitas, setFasilitas] = useState("");
    let [urlImage, setUrlImage] = useState("");
    
    useEffect(() => {
        dataFirebase.on('value', snapshot => {
            let data = snapshot.val();
            console.log(data);
            let hotels = Object.values(data);
            let key = Object.keys(data);
            setData(hotels);
            setKey(key);
            
        })
    }, [setData], [setKey]);
    let test = [];
    if (data != null) {
        console.log(data);
        let latlong = [];
        for (let i = 0; i < data.length; i++) {
            // test.push(<Text>{data[i].name}</Text>);
            const id = 'pointAnnotation${i}';
            console.log(data[i].lat);
            console.log(data[i].long);
            latlong.push(data[i].lat,data[i].long);
            test.push(
                    <Card
                        title={data[i].name}
                        image={data[i].urlImage}>
                        <View>
                            <Text>Nama Hotel: {data[i].name}</Text>
                            <Text>Harga: {data[i].harga}/malam</Text>
                            <Text>Fasilitas: {data[i].fasiitas}</Text>
                            <Text>Lokasi: {data[i].fasiitas}</Text>
                        </View>
                        <MapboxGL.MapView style={styles.map}>
                        <MapboxGL.PointAnnotation
                        key={id}
                        id={id}
                        coordinates={[119.9279871714438,-9.6882099220805]}
                        title={data[i].name}>
                            <MapboxGL.Camera zoomLevel={11}
                                centerCoordinate={[119.9279871714438,-9.6882099220805]}>
                            </MapboxGL.Camera>
                            <MapboxGL.Callout title={id} />
                        </MapboxGL.PointAnnotation>
                        </MapboxGL.MapView>
                    </Card>
            )
        }
    } else {
        test.push(<Text>loading...</Text>);
    }

    return (

        <SafeAreaView >
            <ScrollView>
                {test}
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 19,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingBottom: 10,
      color: '#21409b'
    },
    imageSize: {
      flexDirection: 'column', alignItems: 'stretch', width: 400, height: 250, justifyContent: 'center',
    },
    container: {
    }, date: {
      fontSize: 10,
      color: 'grey',
      paddingLeft: 10
    }
  })
export default ListHotel;