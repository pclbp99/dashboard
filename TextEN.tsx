import React from 'react';
import { Text as RNText,TextProps } from 'react-native';

interface TextENProps extends TextProps {}

const TextEN: React.FC<TextENProps> = ({ style, ...rest }) => {
    const customStyle  = {
        fontFamily: 'Montserrat-Regular',
        color:'#000000',
        fontSize: 14,
    };
    
    return <RNText style={[customStyle, style]} {...rest} />;
}

export default TextEN;