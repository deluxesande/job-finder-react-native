import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import { icons, images } from "../constants";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    });
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        async function loadAssets() {
            try {
                // Load the assets you want to use in your app
                const imageAssets = Object.keys(images).map((key) =>
                    Asset.loadAsync(images[key])
                );
                const iconAssets = Object.keys(icons).map((key) =>
                    Asset.loadAsync(icons[key])
                );

                await Promise.all(imageAssets);
                await Promise.all(iconAssets);

                setIsReady(true);
            } catch (error) {
                console.error("Error loading assets:", error);
            }
        }

        loadAssets();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded || !isReady) {
        return null;
    }
    return <Stack onLayout={onLayoutRootView} />;
}
