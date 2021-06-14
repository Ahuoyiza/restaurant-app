import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather} from '@expo/vector-icons';
import { setStatusBarStyle } from 'expo-status-bar';

const SearchBar = () =>{
    return <View style={style.backgroundStyle}>
        <Feather name="search" style={style.iconStyle} />
        <TextInput style={style.inputStyle} placeholder="Search"  />
    </View>
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    iconStyle :{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;