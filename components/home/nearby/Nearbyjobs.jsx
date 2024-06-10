import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import styles from "./nearbyjobs.style";
import data from "../../../data/data";

const NearbyJobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    // TODO - replace with API call

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
