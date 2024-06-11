import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import FormField from "../../components/signIn/FormField/FormField";
import { COLORS } from "../../constants";
import styles from "../../styles/auth";

export default Signup = () => {
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
                <Text style={styles.headerText}>Sign Up</Text>

                <View style={styles.formContainer}>
                    <FormField title={"Username"} />
                    <FormField title={"Email"} keyboardType={"email-address"} />
                    <FormField title={"Password"} />
                    <FormField title={"Password Again"} />
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Already have an account?</Text>
                    <Text
                        style={styles.link}
                        onPress={() => router.push("/login")}
                    >
                        Log In
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
