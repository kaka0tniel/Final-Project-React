import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput, Button, Alert, ScrollView} from 'react-native';
import {db} from '../../config/config';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1Ijoib3RuaWVsdHVybmlwIiwiYSI6ImNrMWJneWlwMDAzMnYzaXBtN3AzOXlxOWsifQ.Sal3nZuZKw41lPRIyiIiEw');
const CreateHotel = () => {
    let [name, setName] = useState("");
    let [lat, setLat] = useState("");
    let [long, setLong] = useState("");
    let [harga, setHarga] = useState("");
    let [fasilitas, setFasilitas] = useState("");
    let [urlImage, setUrlImage] = useState("");
    let addItem = (name, fasilitas, harga, urlImage, lat, long) => {
        db.ref('/hotels').push({
            name: name,
            fasilitas: fasilitas,
            harga: harga,
            urlImage,urlImage,
            lat: lat,
            long: long
        })
    } 
    let handleSubmit = () => {
        addItem(name, fasilitas, harga, urlImage, lat, long);
        Alert.alert(name);
    }

    const onPress = (event) => {
        const { geometry } = event;

        setLat(geometry.coordinates[1]);
        setLong(geometry.coordinates[0]);
    }

    <View style={styles.container}>
                <MapboxGL.MapView
                    style={styles.map}
                    onPress={(e) => onPress(e)}
                >
                    <MapboxGL.Camera zoomLevel={11}
                        centerCoordinate={[106.865036, -6.175110]}>
                    </MapboxGL.Camera>
                </MapboxGL.MapView>
    </View>

    const renderBuble = () => {
        return (
            <View style={styles.bubleContainer}>
                <Text> Lat : {lat}</Text>
                <Text>Long : {long}</Text>
            </View>
        )
    }

    return (
        <ScrollView>
        <View>
            <Text>Insert Hotel Name</Text>
            <TextInput
            placeholder="Masukkan Nama Hotel"
            onChangeText={value=>setName(value)}>
            </TextInput>
            <Text>Harga</Text>
            <TextInput
            placeholder="Masukkan Harga"
            onChangeText={value=>setHarga(value)}>
            </TextInput>
            <Text>Fasilitas</Text>
            <TextInput
            placeholder="Fasilitas..."
            onChangeText={value=>setFasilitas(value)}>
            </TextInput>
            
            <Text>Url Gambar</Text>
            <TextInput
            placeholder="type url image"
            onChangeText={value=>setUrlImage(value)}>
            </TextInput>
            <Button title={"Submit"}
            onPress={handleSubmit}>
            </Button>
            
                <View style={styles.container}>
                    <MapboxGL.MapView
                        style={styles.map}
                        onPress={(e) => onPress(e)}
                    >
                        <MapboxGL.Camera zoomLevel={11}
                            centerCoordinate={[119.952193, -9.690647]}>
                        </MapboxGL.Camera>
                    </MapboxGL.MapView>
                </View>
                {renderBuble()}
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
     map: {
        flex: 1,
        height: 250,
        width: 420
    },
    bubleContainer: {
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        left: 40,
        right: 40,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});


export default CreateHotel;