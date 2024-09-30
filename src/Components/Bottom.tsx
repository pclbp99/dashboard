import React, { useState } from 'react';

import { 
    View, 
    TouchableOpacity,
    StyleSheet 
} from 'react-native';

import BarChart from './../Assets/Icons/BarChart';
import Layers from '../Assets/Icons/Layers';
import Plus from '../Assets/Icons/Plus';
import Search from '../Assets/Icons/Search';
import Person from '../Assets/Icons/Person';

import BottomSheetComponent from './BottomSheetComponent';

const Bottom = () => {
  const [isVisible, setIsVisible] = useState(false); // 바텀시트 안보이게 초기값 세팅

  const openBottomSheet = () => {
    setIsVisible(true); // 바텀시트 열림
  };

  const closeBottomSheet = () => {
    setIsVisible(false); // 바텀시트 닫힘
  };

  return (
    <View style={styles.container}>
        
      <View style={styles.BottomContainer}>
        <TouchableOpacity style={styles.BottomMenu}>
          <BarChart />
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomMenu}>
          <Layers />
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomPlus} onPress={openBottomSheet}>
          <Plus />
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomMenu}>
          <Search />
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomMenu}>
          <Person />
        </TouchableOpacity>
      </View>

      {/* Bottom Sheet */}
      <BottomSheetComponent isVisible={isVisible} closeBottomSheet={closeBottomSheet} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        width: '100%', 
        height: '100%',
    },
    
    BottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    BottomMenu: {
        padding: 10,
    },

    BottomPlus: {
        borderRadius: 26,
        backgroundColor: '#fff',
        padding: 10,
    },
});

export default Bottom;
