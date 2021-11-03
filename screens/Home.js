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

import { Profiles, ProgressBar } from '../components';

import {
    dummyData,
    COLORS,
    SIZES,
    FONTS,
    icons,
    images
} from '../constants';

const Home = ({ navigation }) => {

    const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

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

    function renderNewSeasonSection() {
        return (
            <Animated.FlatList
                horizontal
                paddingEnabled
                snapToAlignment="center"
                snapToInterval={SIZES.width}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                decelerationRate={0}
                contentContainerStyle={{
                    marginTop: SIZES.radius
                }}
                data={dummyData.newSeason}
                keyExtractor={item => `${item.id}`}
                onScroll={Animated.event([
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: newSeasonScrollX
                            }
                        }
                    }
                ], { useNativeDriver: false })}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => navigation.navigate('MovieDetails', { selectedMovie: item })}
                        >
                            <View style={{
                                width: SIZES.width,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {/* Thumbnail */}
                                <ImageBackground
                                    source={item.thumbnail}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width * 0.85,
                                        height: SIZES.width * 0.85,
                                        justifyContent: 'flex-end',
                                    }}
                                    imageStyle={{
                                        borderRadius: SIZES.borderRadius
                                    }}
                                >
                                    <View style={{
                                        flexDirection: 'row',
                                        height: SIZES.height_60,
                                        width: '100%',
                                        marginBottom: SIZES.radius,
                                        paddingHorizontal: SIZES.radius,
                                    }}>
                                        {/* Play Now */}
                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            flex: 1
                                        }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: SIZES.width_40,
                                                height: SIZES.width_40,
                                                borderRadius: SIZES.width_40 / 2,
                                                backgroundColor: COLORS.transparentWhite
                                            }}>
                                                <Image
                                                    source={icons.play}
                                                    resizeMode="contain"
                                                    style={{
                                                        width: 15,
                                                        height: 15,
                                                        tintColor: COLORS.white
                                                    }}
                                                />
                                            </View>
                                            <Text style={{
                                                marginLeft: SIZES.base,
                                                color: COLORS.white,
                                                ...FONTS.h3
                                            }}>
                                                Play Now
                                            </Text>
                                        </View>

                                        {/* Still Watching */}
                                        {item.stillWatching.length > 0 &&
                                            <View style={{ justifyContent: 'center' }}>
                                                <Text style={{
                                                    color: COLORS.white,
                                                    ...FONTS.h4
                                                }}>
                                                    Still Watching
                                                </Text>

                                                <Profiles profiles={item.stillWatching} />
                                            </View>

                                        }
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    );
                }}
            />
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(newSeasonScrollX, SIZES.width);

        return (
            <View style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {dummyData.newSeason.map((item, index) => {

                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp'
                    });

                    const dotWidth = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [6, 20, 6],
                        extrapolate: 'clamp'
                    });

                    const dotColor = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [COLORS.transparentWhite, COLORS.primary, COLORS.transparentWhite],
                        extrapolate: 'clamp'
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 3,
                                width: dotWidth,
                                height: 6,
                                backgroundColor: dotColor
                            }}>
                        </Animated.View>
                    );
                })}
            </View>
        );
    }

    function renderContinueWatchingSection() {
        return (
            <View style={{
                marginTop: SIZES.padding,
            }}>
                {/* Header */}
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        flex: 1,
                        color: COLORS.white,
                        ...FONTS.h2,
                    }}>Continue Watching</Text>
                    <Image source={icons.right_arrow} style={{
                        width: SIZES.width_20,
                        height: SIZES.width_20,
                        tintColor: COLORS.primary
                    }} />
                </View>

                {/* List */}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.padding
                    }}
                    data={dummyData.continueWatching}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('MovieDetails', { selectedMovie: item })}>
                                <View style={{
                                    marginLeft: index === 0 ? SIZES.padding : 20,
                                    marginRight: index === dummyData.continueWatching.length - 1 ? SIZES.padding : 0,
                                }}>
                                    {/* Thumbnail */}
                                    <Image
                                        source={item.thumbnail}
                                        resizeMode="cover"
                                        style={{
                                            width: SIZES.width / 3,
                                            height: SIZES.width / 3 + 60,
                                            borderRadius: SIZES.borderRadius / 2
                                        }} />

                                    {/* Title */}
                                    <Text style={{
                                        marginTop: SIZES.base,
                                        color: COLORS.white,
                                        ...FONTS.h4
                                    }}>{item.name}</Text>

                                    {/* Progress Bar */}
                                    <ProgressBar
                                    containerStyle={{
                                        marginTop: SIZES.radius
                                    }}
                                    barStyle={{
                                        height: 3
                                    }}
                                    barPercentage={item.overallProgress}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {renderHeader()}
            <ScrollView contentContainerStyle={{
                paddingBottom: 100
            }}>

                {renderNewSeasonSection()}

                {renderDots()}

                {renderContinueWatchingSection()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;