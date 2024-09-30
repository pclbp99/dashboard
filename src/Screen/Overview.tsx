import React from 'react';

import {
  SafeAreaView,
  View,
} from 'react-native';

import { Dimensions } from "react-native";

import {
    LineChart,
} from "react-native-chart-kit";

import styles from './styles.js';
import TextEN from '../../TextEN';
import TextKR from '../../TextKR';

import GraphUp from '../Assets/Icons/GraphUp';

const screenWidth = Dimensions.get("window").width;
const paddingValue = 20;

const OverView = () => {

    const chartConfig = {
        backgroundGradientFrom: "#fff", // 배경 그라데이션 시작 색상
        backgroundGradientTo: "#fff", // 배경 그라데이션 끝 색상
        color: (opacity = 1) => `rgba(0,0,0, ${opacity})`, // 차트 데이터 색상 설정. 투명도(opacity) 값에 따라 검은색 색상 변경
        strokeWidth: 2, // 선 두께
        barPercentage: 1, // 막대 차트의 비율
        useShadowColorFromDataset: false, // 데이터셋 그림자 색상 사용 여부
        propsForDots: { // 데이터 점 스타일
            r: "4",
            strokeWidth: "2",
            stroke: "white",
        },
        propsForBackgroundLines: { // 배경 선 스타일
            stroke: "#e3e3e3", 
            strokeDasharray: "", // 점선 없음
        },
        fillShadowGradient: 'transparent', // 그림자 그라데이션 색상
        fillShadowGradientOpacity: 0, // 그림자 그라데이션 투명도
      };

    const data = {
        labels: ["", "", "", "", "", "", "", "", ""], // x축 레이블
        datasets: [ //데이터셋 정의
          {
            data: [57,49,75,44,35,37,70,45,60], // y축 데이터
            color: (opacity = 1) => `#D3535F`, // 데이터 색상 기본값
            strokeWidth: 2, // 선 두께
          },
        ],
    };

    return (
        <SafeAreaView>
            {/* Overview */}
            <View style={styles.OverviewView}>
                <View style={styles.OverviewTitle}>
                    <View>
                        <TextKR style={styles.OverviewTitleMain}>OverView</TextKR>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TextEN style={styles.OverviewCost}>$34.628</TextEN>
                            <TextKR style={styles.OverviewTotalTxt}>Total wealth</TextKR>
                        </View>
                    </View>
                    <GraphUp />
                </View>
                <LineChart
                    data={data} // 차트 데이터
                    width={screenWidth - paddingValue*3.5} // 차트 너비
                    height={100} // 차트 높이
                    chartConfig={chartConfig} // 차트 설정
                    yAxisLabel="" // y축 레이블 없음
                    yAxisSuffix="k" // y축에 'k' 접미사 추가
                    yAxisInterval={2} // y축 간격 2
                    fromZero={false} // y축 값 0에서 시작하지 않음
                    segments={2} // y축 구간 2개로 설정
                    withVerticalLines={false} // 세로선 표시 안함
                    withHorizontalLines={true} // 가로선 표시함
                    withShadow={false} // 차트에 그림자 표시 안함
                    formatYLabel={(value) => `${parseInt(value)}`} // y축 레이블 형식 정수값만 표시
                />
            </View>
        </SafeAreaView>
    );

}



export default OverView;
