import { Text, View, TextInput } from "react-native";
import styles from "./FormField.style";
import { useState } from "react";

const FormField = ({ title, keyboardType }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>{title}</Text>

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        keyboardType={keyboardType}
                        secureTextEntry={
                            title.match("Password") && !showPassword
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default FormField;
