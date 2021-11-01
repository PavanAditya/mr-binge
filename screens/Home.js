import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
    Animated,
    ScrollView
} from 'react-native';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants';

const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding
            }}>

                {/* Profile Icon */}
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: SIZES.width_40,
                    height: SIZES.height_40,
                }}
                    onPress={() => console.log('Profile')}
                >
                    <Image source={images.profile_photo} style={{
                        height: SIZES.height_40,
                        width: SIZES.width_40,
                        borderRadius: SIZES.height_40 / 2
                    }} />
                </TouchableOpacity>

                {/* Screen Mirror */}
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: SIZES.width_50,
                    height: SIZES.height_50,
                }}
                    onPress={() => console.log('Screen Mirror')}
                >
                    <Image source={icons.airplay} style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }} />
                </TouchableOpacity>

            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {renderHeader()}
        </SafeAreaView>
    )
}

export default Home;