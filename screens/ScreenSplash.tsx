import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../app/GlobalStyles";

const ScreenSplash = () => {
    return (
        <View style={styles.onboarding}>
            <Text style={[styles.dingo, styles.toTypo]}>Dingo</Text>
            <Text style={[styles.welcome, styles.welcomeFlexBox]}>Welcome</Text>
            <Text style={[styles.to, styles.toTypo]}>to</Text>
            <Text
                style={[styles.pawsitivelyUnforgettableCare, styles.welcomeFlexBox]}
            >{`Positively Unforgettable Care for Your Furry Family`}</Text>
            <Image
                style={styles.amusedtallcirripedMax1mb1Icon}
                contentFit="cover"
                source={require("../assets/images/amusedtallcirripedmax1mb-1.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    toTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.poppinsBold,
        fontWeight: "700",
        fontSize: FontSize.size_45xl,
        position: "absolute",
    },
    welcomeFlexBox: {
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    dingo: {
        top: 546,
        left: 94,
        lineHeight: 48,
    },
    welcome: {
        top: 386,
        left: 37,
        fontWeight: "800",
        fontFamily: FontFamily.poppinsExtraBold,
        lineHeight: 48,
        fontSize: FontSize.size_45xl,
        textAlign: "center",
    },
    to: {
        top: 473,
        left: 157,
        lineHeight: 22,
    },
    pawsitivelyUnforgettableCare: {
        top: 733,
        left: 51,
        fontSize: FontSize.size_xl,
        lineHeight: 26,
        fontFamily: FontFamily.fredokaOne,
    },
    amusedtallcirripedMax1mb1Icon: {
        top: 11,
        left: 20,
        width: 350,
        height: 350,
        position: "absolute",
    },
    onboarding: {
        shadowColor: "rgba(18, 15, 40, 0.12)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 6,
        elevation: 6,
        shadowOpacity: 1,
        borderRadius: Border.br_21xl,
        backgroundColor: "#f9ffff",
        flex: 1,
        width: "100%",
        height: 844,
        overflow: "hidden",
    },
});

export default ScreenSplash;
