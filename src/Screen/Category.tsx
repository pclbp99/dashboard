import React from 'react';

import {
  SafeAreaView,
  View,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const Category = () => {


    return (
        <SafeAreaView>
            <View>
                <AnimatedCircularProgress
                        size={100}
                        width={10}
                        fill={20}
                        tintColor="#C4D3E6"
                        backgroundColor="#C4D3E6" 
                        rotation={0}
                />

                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    fill={55}
                    tintColor="#795DCE"
                    backgroundColor="transparent"
                    rotation={190} 
                    style={{ position: 'absolute' }}
                />

                <AnimatedCircularProgress
                    size={100}
                    width={10}
                    fill={25}
                    tintColor="#4A3D73"
                    backgroundColor="transparent"
                    rotation={300}
                    style={{ position: 'absolute' }}
                />
            </View>
        </SafeAreaView>
    );

}



export default Category;
