import React, { useState, useEffect } from 'react';
import {
    View, Text, SafeAreaView, ScrollView, StyleSheet, Image
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import { db } from '../../config/config';

class HomeAdmin extends React.Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView>

                    <Card
                        title='Tampilkan Semua Data Hotel'>
                        <Button onPress={() => this.props.navigation.navigate('ScreenDataHotel')}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW' />
                    </Card>
                    <Card
                        title='Tambah Data Hotel Baru'>
                        <Button onPress={() => this.props.navigation.navigate('CreateHotel')}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='Go' />
                    </Card>

                </ScrollView>
            </SafeAreaView>

        );
    };
}

export default HomeAdmin;