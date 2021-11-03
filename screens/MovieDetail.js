import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    Platform
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { ProgressBar } from '../components';

import { COLORS, SIZES, FONTS, icons } from '../constants';

const MovieDetail = ({ navigation, route }) => {

    const [selectedMovie, setSelectedMovie] = React.useState(null);

    React.useEffect(() => {
        let { selectedMovie } = route.params;
        setSelectedMovie(selectedMovie);
    }, [route.params]);

    function renderHeaderBar() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: Platform.OS === 'ios' ? 40 : 20,
                paddingHorizontal: SIZES.padding
            }}>
                {/* Back */}

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZES.width_50,
                        height: SIZES.height_50,
                        borderRadius: SIZES.height_40 / 2,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.left_arrow}
                        style={{
                            width: SIZES.width_20,
                            height: SIZES.width_20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>

                {/* Share */}

                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZES.width_50,
                        height: SIZES.height_50,
                        borderRadius: SIZES.height_40 / 2,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    onPress={() => console.log('Share')}
                >
                    <Image
                        source={icons.upload}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderHeader() {
        return (
            <ImageBackground
                source={selectedMovie?.details?.image}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
                }}
            >
                <View style={{
                    flex: 1
                }}>
                    {renderHeaderBar()}
                </View>
            </ImageBackground>
        );
    };

    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                backgroundColor: COLORS.black,
            }}
            style={{
                backgroundColor: COLORS.black,
            }}
        >
            {renderHeader()}
        </ScrollView>
    )
}

export default MovieDetail;