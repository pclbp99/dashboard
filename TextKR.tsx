import React from 'react';
import { Text as RNText,TextProps } from 'react-native';

interface TextKRProps extends TextProps {}

const TextKR: React.FC<TextKRProps> = ({ style, ...rest }) => {
    const customStyle  = {
        fontFamily: 'Pretendard-Regular',
        color:'#000000',
        fontSize: 14,
    };
    
    return <RNText style={[customStyle, style]} {...rest} />;
}

export default TextKR;