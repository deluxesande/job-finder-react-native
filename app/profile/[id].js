import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";

import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, images } from "../../constants";
import styles from "../../styles/profile";

const Profile = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

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
                    <View>
                        <Text>Profile</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
