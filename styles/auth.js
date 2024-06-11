import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        paddingLeft: SIZES.large,
        paddingRight: SIZES.large,
    },
    text: {
        fontFamily: FONT.regular,
        color: COLORS.primary,
    },
    link: {
        fontFamily: FONT.regular,
        color: COLORS.tertiary,
        cursor: "pointer",
    },
    headerText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
        textAlign: "center",
    },
    formContainer: {
        marginVertical: SIZES.large,
    },
    btnContainer: {
        height: 50,
    },
    btn: {
        flex: 1,
        backgroundColor: "#FE7654",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
    },
    btnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
    forgotText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 5,
        marginBottom: SIZES.medium,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginVertical: SIZES.medium,
    },
});

export default styles;
