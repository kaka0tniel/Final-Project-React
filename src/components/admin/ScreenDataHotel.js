import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ScrollView, TextInput, Alert
} from 'react-native';
import { db } from '../../config/config';
import { Button, Card } from 'react-native-elements';

ScreenDataHotel = () => {
    let dataFirebase = db.ref('hotels');
    const [data, setData] = useState();
    const [key, setKey] = useState();
    let [name, setName] = useState("");
    let [lat, setLat] = useState("");
    let [long, setLong] = useState("");
    let [harga, setHarga] = useState("");
    let [fasilitas, setFasilitas] = useState("");
    let [urlImage, setUrlImage] = useState("");

    const deleteData = (key) => {

        dataFirebase.orderByChild('name').equalTo(key).once('value', snapshot => {
            const updates = {};
            snapshot.forEach(child => updates[child.key] = null);
            dataFirebase.update(updates);
        }).then(() => {
            console.log("Data successfully deleted!");

        }).catch((error) => {
            console.error("Error removing document: ", error);

        });
    }

    const updatehotel = (id,param) => {
        console.log('Ini keynya: ' + id);
        console.log('Param: ' + param);
        let dataUpdate = db.ref('hotels/' + id + '/' + 'name');
        console.log(dataUpdate.orderByChild('name'));
        
        dataFirebase.orderByChild('name').equalTo(param).once('value', snapshot => {
            const updates = {};
            snapshot.forEach(function (child) {
                updates[child.key + '/' + 'name'] = name;
                updates[child.key + '/' + 'fasilitas'] = fasilitas;
                updates[child.key + '/' + 'harga'] = harga;
                updates[child.key + '/' + 'urlImage'] = urlImage;
                console.log('key dalam : ' + child.key);
                console.log('val dalam : ' + child.val()['name']);
            });
            dataFirebase.update(updates);
        }).then(() => {
            console.log("Data successfully Updated!");

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


    let handleUpdate = (id, name, fasilitas, harga, urlImage) => {
        updatehotel(id, name, fasilitas, harga, urlImage);
        Alert.alert('Data Sudah Di Update ');
    }

    let handleDelete = (key) => {
        deleteData(key);
        Alert.alert('Data ' + key + ' Sudah di Delete!')
    }

    
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
        for (let i = 0; i < data.length; i++) {
            // test.push(<Text>{data[i].name}</Text>);
            test.push(<Card
                title={data[i].name}>
                <Text>Update Hotel Name</Text>
                <TextInput placeholder="Masukkan Nama"
                    onChangeText={value => setName(value)}></TextInput>
                    <Text>Update Harga</Text>
            <TextInput
            placeholder="Masukkan Harga"
            onChangeText={value=>setHarga(value)}>
            </TextInput>
            <Text>Update Fasilitas</Text>
            <TextInput
            placeholder="Fasilitas..."
            onChangeText={value=>setFasilitas(value)}>
            </TextInput>
            
            <Text>Update Url Gambar</Text>
            <TextInput
            placeholder="type url image"
            onChangeText={value=>setUrlImage(value)}></TextInput>
                <View style={{ marginTop: 10 }}>
                    <Button onPress={() => handleUpdate(key[i], data[i].name)}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'grey' }}
                        title='Update' />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button onPress={() => handleDelete(data[i].name)}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'red' }}
                        title='delete' />
                </View>
            </Card>)
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

export default ScreenDataHotel;