import React, {Component} from 'react';
import {Text,View, Button } from 'react-native';

export default class Introduction extends Component {
    render() {
        return(
            <View>
                <Text>Selamat Datang. Selamat Bersenang-senang dengan aplikasi kami</Text>
                <Button
                title={'Menu'}
                onPress={() => this.props.navigation.navigate('Menu')}>
                </Button>
            </View>
        );
    };
}
