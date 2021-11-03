import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#FF002E",     // Red

    white: "#fff",
    black: "#000000",
    blue: "#4096FE",
    gray: "#464646",
    gray1: "#363636",
    lightGray: "#dedede",
    transparentWhite: 'rgba(255, 255, 255, 0.5)',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    semiTransparentBlack: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    borderRadius: 40,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,

    // regular sizes
    width_10: 10,
    width_20: 20,
    width_30: 30,
    width_40: 40,
    width_50: 50,
    width_60: 60,
    height_10: 10,
    height_20: 20,
    height_30: 30,
    height_40: 40,
    height_50: 50,
    height_60: 60,
};

export const FONTS = {
    largeTitle: { fontFamily: "Cairo-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Cairo-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Cairo-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Cairo-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Cairo-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Cairo-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Cairo-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Cairo-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Cairo-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Cairo-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

// export const FONTS = {
//     largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
//     h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
//     h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
//     h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
//     h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
//     body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
//     body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
//     body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
//     body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
//     body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
// };

// export const FONTS = {
//     largeTitle: { fontFamily: "ZenMaruGothic-Black", fontSize: SIZES.largeTitle },
//     h1: { fontFamily: "ZenMaruGothic-Black", fontSize: SIZES.h1, lineHeight: 36 },
//     h2: { fontFamily: "ZenMaruGothic-Bold", fontSize: SIZES.h2, lineHeight: 30 },
//     h3: { fontFamily: "ZenMaruGothic-Bold", fontSize: SIZES.h3, lineHeight: 22 },
//     h4: { fontFamily: "ZenMaruGothic-Bold", fontSize: SIZES.h4, lineHeight: 22 },
//     body1: { fontFamily: "ZenMaruGothic-Regular", fontSize: SIZES.body1, lineHeight: 36 },
//     body2: { fontFamily: "ZenMaruGothic-Regular", fontSize: SIZES.body2, lineHeight: 30 },
//     body3: { fontFamily: "ZenMaruGothic-Regular", fontSize: SIZES.body3, lineHeight: 22 },
//     body4: { fontFamily: "ZenMaruGothic-Regular", fontSize: SIZES.body4, lineHeight: 22 },
//     body5: { fontFamily: "ZenMaruGothic-Regular", fontSize: SIZES.body5, lineHeight: 22 },
// };

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
