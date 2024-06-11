import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import FormField from "../../components/signIn/FormField/FormField";
import { COLORS } from "../../constants";
import styles from "../../styles/auth";

export default LogIn = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitle: "",
                }}
            />

            <View style={styles.container}>
                <Text style={styles.headerText}>Log In</Text>

                <View style={styles.formContainer}>
                    <FormField title={"Email"} keyboardType={"email-address"} />
                    <FormField title={"Password"} />
                </View>

                <View style={styles.forgotText}>
                    <Text style={styles.link}>Forgot Password?</Text>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Do not have an account?</Text>
                    <Text
                        style={styles.link}
                        onPress={() => router.push("/signup")}
                    >
                        Sign up
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
