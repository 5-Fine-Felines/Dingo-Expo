import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../app/GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/routes/StackRoutes";
import { SCREENS } from "@/routes/ScreenConstants";
import { useNavigation } from "@react-navigation/native";

type UserProfileProp = StackNavigationProp<
  RootStackParamList,
  typeof SCREENS.USERPROFILE
>;

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.useRProfile}>
      <Text style={[styles.fullName, styles.homeClr]}>Full name</Text>
      <Text style={[styles.professionalTitle, styles.homeClr]}>
        Professional title
      </Text>
      <View style={[styles.container34, styles.containerPosition]}>
        <Image
          style={[styles.container34Child, styles.container34Layout]}
          contentFit="cover"
          source={require("../assets/images/line-12.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>(123) 456-7890</Text>
        <Image
          style={[styles.container34Item, styles.container34Layout]}
          contentFit="cover"
          source={require("../assets/images/line-12.png")}
        />
        <Text style={[styles.avasavexamplecom, styles.textTypo]}>
          AvaSav@example.com
        </Text>
        <Image
          style={[styles.buildings1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/buildings-1.png")}
        />
        <Image
          style={[styles.atSign21, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/at-sign-2-1.png")}
        />
        <Image
          style={[styles.pin32, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/pin-3-2.png")}
        />
        <Image
          style={[styles.container34Inner, styles.container34Layout]}
          contentFit="cover"
          source={require("../assets/images/line-12.png")}
        />
        <Text style={[styles.washingtonAveManchester, styles.textTypo]}>
          99 Washington Ave. Manchester, Kentucky 99
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>(123) 456-7890</Text>
        <Image
          style={[styles.home1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/home-1.png")}
        />
      </View>
      <Text style={[styles.socialAccounts, styles.textTypo]}>
        Social Accounts
      </Text>
      <View style={[styles.container35, styles.containerPosition]}>
        <Text style={[styles.text, styles.textTypo]}>Ava Savannah</Text>
        <Image
          style={[styles.container34Child, styles.container34Layout]}
          contentFit="cover"
          source={require("../assets/images/line-12.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>Ava.Savannah</Text>
        <Image
          style={[styles.buildings1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/logo-facebook-1.png")}
        />
        <Image
          style={[styles.home1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/images/logo-instagram-1.png")}
        />
        <Image
          style={[styles.chevronRightLarge2, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/images/chevron-right-large-2.png")}
        />
        <Image
          style={[styles.chevronRightLarge3, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/images/chevron-right-large-2.png")}
        />
      </View>
      <Image
        style={styles.avatar29Icon}
        contentFit="cover"
        source={require("../assets/images/avatar-29.png")}
      />
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
      <Image
        style={[styles.replyArrow1, styles.searchIconLayout]}
        contentFit="cover"
        source={require("../assets/images/reply-arrow-1.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.profile, styles.homeClr]}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 98,
    backgroundColor: Color.colorGray_400,
    top: 0,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  searchIconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  feedPosition: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  homeClr: {
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  containerPosition: {
    width: 335,
    left: 27,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  container34Layout: {
    height: 1,
    width: 267,
    left: 52,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 16,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  chevronLayout: {
    height: 16,
    width: 16,
    right: 16,
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    marginTop: -20,
    marginLeft: -11.95,
    left: "50%",
    top: "50%",
    height: 24,
    width: 24,
  },
  search: {
    marginLeft: -16.45,
  },
  frame: {
    left: 98,
  },
  home: {
    marginLeft: -14.45,
    fontFamily: FontFamily.manropeBold,
    color: Color.colorGray_200,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    left: "50%",
    top: "50%",
  },
  frame1: {
    left: 0,
    width: 98,
  },
  feed: {
    marginLeft: -11.45,
  },
  frame2: {
    left: 195,
  },
  myLibrary: {
    marginLeft: -23.95,
  },
  frame3: {
    left: 293,
  },
  tabBarMenu1: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  container16: {
    top: 784,
    backgroundColor: Color.colorDarkorange,
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  fullName: {
    top: 233,
    left: 148,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontFamily: FontFamily.lexendRegular,
  },
  professionalTitle: {
    top: 263,
    left: 131,
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorGray_200,
  },
  container34Child: {
    top: 56,
  },
  text: {
    top: 17,
    left: 52,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeRegular,
  },
  container34Item: {
    top: 113,
  },
  avasavexamplecom: {
    top: 131,
    left: 52,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeRegular,
  },
  buildings1Icon: {
    top: 16,
  },
  atSign21: {
    top: 130,
  },
  pin32: {
    top: 197,
  },
  container34Inner: {
    top: 170,
  },
  washingtonAveManchester: {
    top: 187,
    width: 198,
    left: 52,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeRegular,
  },
  text1: {
    top: 74,
    left: 52,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeRegular,
  },
  home1Icon: {
    top: 73,
  },
  container34: {
    top: 323,
    height: 247,
  },
  socialAccounts: {
    top: 594,
    fontSize: FontSize.size_sm,
    left: 27,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  chevronRightLarge2: {
    top: 77,
  },
  chevronRightLarge3: {
    top: 20,
  },
  container35: {
    top: 622,
    height: 113,
  },
  avatar29Icon: {
    top: 115,
    left: 147,
    borderRadius: Border.br_29xl,
    width: 96,
    height: 96,
    position: "absolute",
    overflow: "hidden",
  },
  replyArrow1: {
    top: 27,
    left: 19,
  },
  profile: {
    top: 28,
    left: 120,
    fontSize: 48,
    lineHeight: 70,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorGray_200,
  },
  useRProfile: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default UserProfile;
