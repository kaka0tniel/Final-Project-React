import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ScrollView, TextInput, Alert
} from 'react-native';
import { db } from '../../config/config';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

DetailHotel = () => {
    let dataFirebase = db.ref('hotels/Lr81xzWzUWNVLtS57US');
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
            // test.push(<Text>{data[i].name}</Text>);
            test.push(
                <TouchableOpacity>
                    <Card
                        title={data.name}>
                    </Card>
                </TouchableOpacity>
            )
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

export default DetailHotel;