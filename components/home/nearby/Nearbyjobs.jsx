import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";

const NearbyJobs = () => {
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
            job_employment_type: "remote",
        },
        {
            job_id: 2,
            employer_logo: "logo.png",
            employer_name: "Facebook",
            job_title: "React Native developer (React, Typescript)",
            job_country: "Nigeria",
            job_employment_type: "In-Person",
        },
        {
            job_id: 3,
            employer_logo: "logo.png",
            employer_name: "Google",
            job_title: "NextJs developer (React, Typescript)",
            job_country: "England",
            job_employment_type: "remote",
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
                    data?.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`nearby-job-${job.job_id}`}
                            handleNavigate={() =>
                                router.push(`/job-details/${job.job_id}`)
                            }
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default NearbyJobs;
