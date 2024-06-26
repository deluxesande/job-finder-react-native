import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
                <Image
                    source={icons.heartOutline}
                    resizeMode="contain"
                    style={styles.likeBtnImage}
                />
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.applyBtn}
                    onPress={() => Linking.openURL(url)}
                >
                    <Text style={styles.applyBtnText}>Apply For Job</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;
