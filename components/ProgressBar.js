import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const ProgressBar = ({ containerStyle, barStyle, barPercentage }) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: `100%`,
                marginTop: SIZES.base,
                backgroundColor: COLORS.gray,
                ...barStyle
            }}></View>
            <View style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: `${barPercentage}`,
                marginTop: SIZES.base,
                backgroundColor: COLORS.primary,
                ...barStyle
            }}>
            </View>
        </View>
    );
}

export default ProgressBar;

