import React from 'react';

import {
  Alert
} from 'react-native';

import { WebView } from 'react-native-webview';

const onMessage = (event) => {
  const message = event.nativeEvent.data;
  Alert.alert('마커 클릭됨', message);
};

const Places= () => {
    return(
        <WebView
            style={{flex:1, width:'100%', overflow:'hidden'}}
            source = {{ uri: 'https://kangel722.mycafe24.com/map_api.html'}}
            onMessage={onMessage} //웹 페이지에서 postMessage를 통해 보낸 메시지 수신
            originWhitelist={['*']} //허용 도메인 전체 설정
        />
   );
}

export default Places;
