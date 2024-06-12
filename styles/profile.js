import { StyleSheet } from "react-native";
import { SIZES, FONT, COLORS } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: SIZES.medium,
        paddingHorizontal: SIZES.large,
    },
    detailsContainer: {
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: 100,
        marginBottom: SIZES.small,
    },
    profilePic: {
        width: "100%",
        height: "100%",
        borderRadius: 100,
    },
    userContainer: {
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    userDetail: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        marginVertical: SIZES.small / 2,
    },
    userDetailHeader: {
        fontFamily: FONT.medium,
        fontWeight: "light",
        color: COLORS.gray,
    },
    userDetailText: {
        color: COLORS.primary,
    },
    deleteContainer: {
        height: 50,
        width: "100%",
        marginVertical: SIZES.medium,
        paddingHorizontal: SIZES.large,
    },
    deleteBtn: {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteText: {
        color: COLORS.white,
    },
});

export default styles;
