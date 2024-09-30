import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import TextEN from '../../TextEN';
import Wallet from './../Assets/Icons/Wallet';
import Calendar from './../Assets/Icons/Calendar';

const Header = () => {

  return (
    <SafeAreaView>
        <View style={styles.HeaderArea}>
            <TextEN style={styles.HeaderTitle}>Dashboard</TextEN>
            <View style={styles.HeaderButtons}>
                <TouchableOpacity style={styles.HeaderButton}>
                    <Wallet />
                </TouchableOpacity>
                <TouchableOpacity style={styles.HeaderButton}>
                    <Calendar />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
    HeaderArea:{
        padding:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    
    HeaderTitle: {
        fontSize: 24,
        fontFamily:'Montserrat-Bold',
    },

    HeaderButtons: {
        flexDirection:'row',
        alignItems:'center',
    },

    HeaderButton: {
        width:24,
        height:24,
        marginLeft: 25,
    },
});


export default Header;
