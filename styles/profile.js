import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

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
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: SIZES.large,
        marginBottom: SIZES.small,
    },
    profilePic: {
        width: "80%",
        height: "80%",
        borderRadius: SIZES.large,
    },
});

export default styles;
