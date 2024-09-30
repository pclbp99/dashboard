import React, {useRef, useEffect} from 'react';
import {
    Animated, 
    TouchableOpacity, 
    View, 
    Image, 
    StyleSheet, 
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

import * as Progress from 'react-native-progress'; 

import TextEN from '../../TextEN';

import BottomSheetIcon01 from './../Assets/Images/bs01.png';
import BottomSheetIcon02 from './../Assets/Images/bs02.png';
import BottomSheetIcon03 from './../Assets/Images/bs03.png';
import BottomSheetIcon04 from './../Assets/Images/bs04.png';


const BottomSheetComponent = ({ isVisible, closeBottomSheet }) => {

    const bottomSheetHeight = Dimensions.get('window').height; //화면 높이 변수에 저장

    // 애니메이션 값으로 화면 높이를 초기값으로 설정하여 바텀 시트가 화면 밖에 위치하도록 함
    // 이 값은 바텀 시트의 슬라이드 애니메이션을 제어하는 데 사용
    const slideAnim = useRef(new Animated.Value(bottomSheetHeight)).current;


    const screenWidth = Dimensions.get('window').width; // 화면 너비 변수에 저장
    const calculatedWidth = screenWidth - 140; // 바텀 시트 내 반응형 너비 사용을 위해 값 저장
  
    useEffect(() => {
      if (isVisible) { // isVisible 값 변경때 마다 애니메이션 실행 (true 시)
        // 바텀 시트가 화면 하단에서 위로 올라오도록
        Animated.timing(slideAnim, {
          toValue: 0, // 목표 위치 (완전히 화면에 보이도록)
          duration: 300, // 실행시간
          useNativeDriver: true, // 성능 최적화를 위한 네이티브 드라이버 사용
        }).start(); // 애니메이션 시작
      }
    }, [isVisible]); // 'isVisible' 값이 변경될 때마다 효과 재실행
  
    const handleClose = () => {
      // 바텀 시트 다시 화면 하단 아래로 내려가게 하는 애니메이션
      Animated.timing(slideAnim, { 
        toValue: bottomSheetHeight, // 화면 밖으로 내리도록
        duration: 300, // 실행 시간
        useNativeDriver: true,
      }).start(() => { 
        // 애니메이션 종료 후, 'closeBottomSheet()' 호출하여 추가적으로 닫기 작업 처리
        closeBottomSheet();
      });
    };
  
    return (
      <>
        {isVisible && (
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleClose}>
                <View style={styles.overlay} />
            </TouchableWithoutFeedback>
  
            <Animated.View
              style={[
                styles.bottomSheet,
                { transform: [{ translateY: slideAnim }] },
              ]}
            >
              <TouchableOpacity onPress={handleClose}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 5,
                      borderRadius: 3,
                      backgroundColor: '#ccc',
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
  
              <View style={styles.sheetContainer}>
                <View style={styles.sheetEach}>
                  <Image source={BottomSheetIcon01} style={styles.sheetImg} />
                  <View style={{ width: calculatedWidth }}>
                    <View style={styles.sheetContent}>
                      <TextEN style={styles.sheetTitle}>Food & Drink</TextEN>
                      <View style={styles.sheetInfo}>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#7f7899' }]}>39%</TextEN>
                        <View style={styles.sheetDot}></View>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#7f7899' }]}>-1,804.90</TextEN>
                      </View>
                    </View>
                    <View>
                      <Progress.Bar
                        progress={0.3}
                        width={null}
                        borderWidth={0}
                        unfilledColor={'#ECEBF2'}
                        color={'#7F7899'}
                      />
                    </View>
                  </View>
                </View>
  
                <View style={styles.sheetEach}>
                  <Image source={BottomSheetIcon02} style={styles.sheetImg} />
                  <View style={{ width: calculatedWidth }}>
                    <View style={styles.sheetContent}>
                      <TextEN style={styles.sheetTitle}>Travel</TextEN>
                      <View style={styles.sheetInfo}>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#A4B9D4' }]}>15%</TextEN>
                        <View style={styles.sheetDot}></View>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#A4B9D4' }]}>-694.20</TextEN>
                      </View>
                    </View>
                    <View>
                      <Progress.Bar
                        progress={0.3}
                        width={null}
                        borderWidth={0}
                        unfilledColor={'#EBEDF5'}
                        color={'#A4B9D4'}
                      />
                    </View>
                  </View>
                </View>
  
                <View style={styles.sheetEach}>
                  <Image source={BottomSheetIcon03} style={styles.sheetImg} />
                  <View style={{ width: calculatedWidth }}>
                    <View style={styles.sheetContent}>
                      <TextEN style={styles.sheetTitle}>Rent</TextEN>
                      <View style={styles.sheetInfo}>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#7E6EBA' }]}>12%</TextEN>
                        <View style={styles.sheetDot}></View>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#7E6EBA' }]}>-555.40</TextEN>
                      </View>
                    </View>
                    <View>
                      <Progress.Bar
                        progress={0.3}
                        width={null}
                        borderWidth={0}
                        unfilledColor={'#E0DDEA'}
                        color={'#7E6EBA'}
                      />
                    </View>
                  </View>
                </View>
  
                <View style={[styles.sheetEach, { marginBottom: 0 }]}>
                  <Image source={BottomSheetIcon04} style={styles.sheetImg} />
                  <View style={{ width: calculatedWidth }}>
                    <View style={styles.sheetContent}>
                      <TextEN style={styles.sheetTitle}>Energy</TextEN>
                      <View style={styles.sheetInfo}>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#C09593' }]}>10%</TextEN>
                        <View style={styles.sheetDot}></View>
                        <TextEN style={[styles.sheetInfoTxt, { color: '#C09593' }]}>-462.80</TextEN>
                      </View>
                    </View>
                    <View>
                      <Progress.Bar
                        progress={0.3}
                        width={null}
                        borderWidth={0}
                        unfilledColor={'#F0F0F0'}
                        color={'#C09593'}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
        )}
      </>
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

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },

  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  
  sheetContainer: {
    padding:20,
    width:'100%',
  },

  sheetEach:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  sheetImg: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft:-10,
  },

  sheetContent: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:15,
  },

  sheetTitle: {
    fontFamily:'Montserrat-Bold',
  },

  sheetInfo: {
    flexDirection:'row',
    alignItems:'center',
  },

  sheetInfoTxt: {
    fontFamily:'Montserrat-Medium',
  },

  sheetDot: {
    width:3,
    height:3,
    backgroundColor:'#ccc',
    borderRadius: 3,
    marginHorizontal: 10,
  },


});

export default BottomSheetComponent;
