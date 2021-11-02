import { isTemplateElement } from '@babel/types';
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {
    COLORS,
    SIZES,
    FONTS
} from '../constants';


const Profiles = ({ profiles }) => {
    if (profiles.length <= 3) {
        return (
            <View style={styles.container}>
                {profiles.map((profile, index) => (
                    <View key={`profile-${index}`}
                        style={index === 0 ? null : { marginLeft: -12 }}>
                        <Image
                            source={profile.profile}
                            resizeMode="cover"
                            style={styles.profileImage}
                        />
                    </View>
                ))}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {profiles.map((profile, index) => {
                    if (index <= 2)
                        return (
                            <View key={`profile-${index}`}
                                style={index === 0 ? null : { marginLeft: -12 }}>
                                <Image
                                    source={profile.profile}
                                    resizeMode="cover"
                                    style={styles.profileImage}
                                />
                            </View>
                        );
                })}
                <Text style={{
                    marginLeft: SIZES.base,
                    color: COLORS.white,
                    ...FONTS.body3
                }}>
                    +{profiles.length - 3}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        width: SIZES.width_30,
        height: SIZES.width_30,
        borderRadius: SIZES.width_30 / 2,
        borderWidth: 2,
        borderColor: COLORS.black
    }
});

export default Profiles;