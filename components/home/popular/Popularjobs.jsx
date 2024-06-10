import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    // TODO - replace with API call
    const data = [
        {
            job_id: 1,
            employer_logo: "logo.png",
            employer_name: "Spotify",
            job_title: "Senior Frontend developer",
            job_country: "Kenya",
        },
        {
            job_id: 2,
            employer_logo: "logo.png",
            employer_name: "Facebook",
            job_title: "React Native developer (React, Typescript)",
            job_country: "Nigeria",
        },
        {
            job_id: 3,
            employer_logo: "logo.png",
            employer_name: "Google",
            job_title: "NextJs developer (React, Typescript)",
            job_country: "England",
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <PopularJobCard
                                item={item}
                                handleCardPress={() => {}}
                            />
                        )}
                        keyExtractor={(item) => item?.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                )}
            </View>
        </View>
    );
};

export default Popularjobs;
