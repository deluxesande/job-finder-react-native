import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";

import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, images } from "../../constants";
import styles from "../../styles/profile";

const Profile = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    // TODO - handle user profile functionality
    // TODO - handle delete functionality
    const user = {
        username: "Amanda Jane",
        email: "amanda@gmail.com",
        phone: "+254 712 345 678",
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete account?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                { text: "Yes", onPress: () => {}, style: "destructive" },
            ]
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={images.profile}
                            style={styles.profilePic}
                        />
                    </View>
                </View>

                {/* User details */}
                <View style={styles.userContainer}>
                    <View style={styles.userDetail}>
                        <Text style={styles.userDetailHeader}>Username</Text>
                        <Text style={styles.userDetailText}>
                            {user.username}
                        </Text>
                    </View>

                    <View style={styles.userDetail}>
                        <Text style={styles.userDetailHeader}>Email</Text>
                        <Text style={styles.userDetailText}>{user.email}</Text>
                    </View>

                    <View style={styles.userDetail}>
                        <Text style={styles.userDetailHeader}>Phone</Text>
                        <Text style={styles.userDetailText}>{user.phone}</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Delete Button */}
            <View style={styles.deleteContainer}>
                <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={handleDelete}
                >
                    <Text style={styles.deleteText}>Delete Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Profile;
