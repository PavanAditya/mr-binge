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
                    {/* Top Linear Gradient */}
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        colors={['transparent', COLORS.semiTransparentBlack]}
                        style={{
                            width: '100%',
                            height: 150,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            position: 'absolute'
                        }}
                    >
                    </LinearGradient>
                    {renderHeaderBar()}

                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}>
                        {/* Bottom Linear Gradient */}
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={['transparent', COLORS.black]}
                            style={{
                                width: '100%',
                                height: 150,
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                        >
                            {/* Season */}
                            <Text
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.body4
                                }}
                            >
                                {selectedMovie?.details?.season}
                            </Text>

                            {/* Title */}
                            <Text
                                style={{
                                    marginTop: SIZES.base,
                                    color: COLORS.white,
                                    ...FONTS.h1
                                }}
                            >
                                {selectedMovie?.name}
                            </Text>
                        </LinearGradient>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    function renderCategoryAndRatings() {
        return (
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.base,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Age */}
                <View style={[
                    styles.categoryContainer,
                    {
                        marginLeft: 0
                    }
                ]}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}>{selectedMovie?.details?.age}</Text>
                </View>

                {/* Genre */}
                <View style={[
                    styles.categoryContainer,
                    {
                        paddingHorizontal: SIZES.padding
                    }
                ]}>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}>{selectedMovie?.details?.genre}</Text>
                </View>

                {/* Rating */}
                <View style={styles.categoryContainer}>
                    <Image
                        source={icons.star}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                        }}
                    />
                    <Text style={{
                        marginLeft: SIZES.base,
                        color: COLORS.white,
                        ...FONTS.h4
                    }}>{selectedMovie?.details?.ratings}</Text>
                </View>

            </View>
        );
    }

    function renderMovieDetails() {
        return (
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.padding,
                justifyContent: 'space-around',
            }}>
                {/* Title, Running Time & Progress Bar */}
                <View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        {/* Title */}
                        <Text style={{
                            flex: 1,
                            color: COLORS.white,
                            ...FONTS.h4
                        }}>{selectedMovie?.details?.currentEpisode}</Text>

                        {/* Running Time */}
                        <Text style={{
                            color: COLORS.lightGray,
                            ...FONTS.body4
                        }}>{selectedMovie?.details?.runningTime}</Text>
                    </View>

                    {/* Progress Bar */}
                    <ProgressBar
                        containerStyle={{
                            marginTop: SIZES.radius,
                        }}
                        barStyle={{
                            height: 5,
                            borderRadius: 3
                        }}
                        barPercentage={selectedMovie?.details?.progress !== undefined ? selectedMovie?.details?.progress : '0%'}
                    />
                </View>

                {/* Watch */}
                <TouchableOpacity
                    style={{
                        height: SIZES.height_60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: Platform.OS === 'ios' ? SIZES.padding * 2 : 0,
                        borderRadius: 15,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}>
                        {selectedMovie?.details?.progress !== undefined || selectedMovie?.details?.progress === '0%' ? 'Watch Now' : 'Continue Watching'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

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
            {/* Header */}
            {renderHeader()}

            {/* Category & Ratings */}
            {renderCategoryAndRatings()}

            {/* Movie Details */}
            {renderMovieDetails()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SIZES.base,
        paddingHorizontal: SIZES.base,
        paddingVertical: 3,
        borderRadius: SIZES.base,
        backgroundColor: COLORS.gray1
    }
});

export default MovieDetail;