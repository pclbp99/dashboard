import React from 'react';

import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image
} from 'react-native';


import styles from './styles.js';
import TextEN from '../../TextEN';

import Overview from './Overview';
import Category from './Category';
import Places from './Places';

import Hash from './../Assets/Icons/Hash';
import Person from './../Assets/Icons/Person';
import PieChart from './../Assets/Icons/PieChart';
import PinMap from './../Assets/Icons/PinMap';
import Building from './../Assets/Icons/Building';

import Profile from './../Assets/Images/profile01.png';
import Profile2 from './../Assets/Images/profile02.png';


const Main = () => {

    return (
        <SafeAreaView>
            <View>
                {/* Overview */}
                <Overview />

                <View style={styles.SubContainer}>
                    {/* Hashtags */}
                    <TouchableOpacity style={[styles.SubBox, {backgroundColor:'#7459d9'}]}>
                        <View style={[styles.subTitle]}>
                            <TextEN style={[styles.subTitleTxt,{color:'#fff'}]}>Hashtags</TextEN>
                            <Hash />
                        </View>
                        <View>
                            <TextEN style={[styles.subNumber,{color:'#fff'}]}>-2,273.59</TextEN>
                            <TextEN style={{color:'#fff'}}>#lunch</TextEN>
                        </View>
                    </TouchableOpacity>

                    {/* People */}
                    <TouchableOpacity style={[styles.SubBox]}>
                        <View style={[styles.subTitle]}>
                            <TextEN style={[styles.subTitleTxt]}>People</TextEN>
                            <Person />
                        </View>
                        <View style={styles.ProfilesList}>
                            <View style={[styles.ProfileImageBox, {marginLeft:0}]}>
                                <Image source={Profile} style={styles.ProfileImage}/>
                            </View>
                            <View style={styles.ProfileImageBox}>
                                <Image source={Profile2} style={styles.ProfileImage}/>
                            </View>
                            <View style={styles.ProfileImageBox}>
                                <Image source={Profile} style={styles.ProfileImage}/>
                            </View>
                            <View style={styles.ProfileImageBox}>
                                <Image source={Profile2} style={styles.ProfileImage}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Category */}
                    <TouchableOpacity style={[styles.SubBox, {height:180}]}>
                        <View style={[styles.subTitle]}>
                            <TextEN style={[styles.subTitleTxt]}>Category</TextEN>
                            <PieChart />
                        </View>
                        <View style={{alignItems:'center'}}>
                            <Category />
                            <View style={styles.CategoryBar}>
                                <Building />
                                <TextEN>rent</TextEN>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Places */}
                    <View style={[styles.SubBox, {height:180}]}>
                        <View style={[styles.subTitle]}>
                            <TextEN style={[styles.subTitleTxt]}>Places</TextEN>
                            <PinMap />
                        </View>
                        <View style={[styles.WebViewArea]}>
                            <Places />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

}



export default Main;
