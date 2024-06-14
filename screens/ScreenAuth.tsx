import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { Alert, AppState, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "@/utils/supabase";
import { SCREENS } from "@/routes/ScreenConstants";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/routes/StackRoutes";
import { Border, Color, FontFamily, FontSize } from "@/app/GlobalStyles";
import { Input } from "@rneui/themed";

type ScreenSplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof SCREENS.AUTH // Correct screen constant
>;

const ScreenAuth = () => {
  const navigation = useNavigation<ScreenSplashNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    });

    // Cleanup subscription on component unmount
    return () => {
      subscription.remove();
    };
  }, []);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { data: { session }, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          user_role: 'user',
        },
      },
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View style={styles.createAnAccount}>
      <Image
        style={styles.goodDoggyBro1}
        contentFit="cover"
        source={require("../assets/images/good-doggybro-1.png")}
      />
      <Text style={styles.orConnectWith}>or connect with</Text>
      <View style={[styles.rectangleParent, styles.createLayout]}>
        <View style={[styles.frameChild, styles.frameBg]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </View>
      <View style={[styles.createAnAccountInner, styles.createLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
      </View>
      <View style={[styles.createAnAccountItem, styles.createLayout]} />
      <Text style={[styles.loginWithGoogle, styles.passwordTypo]}>
        Login with Google
      </Text>
      <Image
        style={styles.google1Icon}
        contentFit="cover"
        source={require("../assets/images/google-1.png")}
      />
      <TextInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email Address"
        autoCapitalize='none'
        style={[]}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        placeholder="Password"
        autoCapitalize='none'
        style={[styles.password, styles.dingoPosition]}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/images/ellipse-22.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/images/group-70.png")}
      />
      <Image
        style={[styles.mailIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/images/mail.png")}
      />
      <Image
        style={[styles.lockIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/images/lock.png")}
      />
      <View style={styles.subtractIcon}>
        <Button title="Sign in" disabled={loading} onPress={signInWithEmail} />
      </View>
      <View style={styles.subtractIcon}>
        <Button title="Sign up" disabled={loading} onPress={signUpWithEmail} />
        <Button
          title='Next'
          onPress={() => {
            navigation.navigate(SCREENS.USERHOME);
          }}
        />
      </View>
      <View style={[styles.forgetPasswordWrapper, styles.forgetLayout]}>
        <Text style={[styles.forgetPassword, styles.forgetLayout]}>
          Forget Password?
        </Text>
      </View>
      <Image
        style={styles.oolzfw0RemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/images/oolzfw0removebgpreview-11.png")}
      />
      <Text style={[styles.dingo, styles.dingoPosition]}>D I N G O</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  createLayout: {
    height: 45,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  frameBg: {
    backgroundColor: Color.colorDarkorange,
    left: 0,
  },
  loginTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.fredokaMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  frameItemLayout: {
    width: 353,
    borderRadius: Border.br_3xs,
    height: 45,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorDarkorange,
    textAlign: "left",
    fontFamily: FontFamily.fredokaRegular,
  },
  dingoPosition: {
    left: 150,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  forgetLayout: {
    width: 232,
    position: "absolute",
  },
  goodDoggyBro1: {
    top: -4,
    left: -126,
    width: 668,
    height: 1179,
    position: "absolute",
  },
  orConnectWith: {
    top: 637,
    left: 107,
    width: 183,
    textAlign: "left",
    fontFamily: FontFamily.fredokaRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkorange,
    top: 0,
    height: 45,
    width: 318,
    position: "absolute",
  },
  login: {
    top: 8,
    left: 121,
    textTransform: "uppercase",
    width: 94,
    fontSize: FontSize.size_6xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.fredokaMedium,
    fontWeight: "500",
  },
  rectangleParent: {
    top: 507,
    width: 318,
    borderRadius: Border.br_81xl,
    left: 40,
    height: 45,
  },
  frameItem: {
    top: -2,
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkorange,
    left: 0,
  },
  createAnAccountInner: {
    top: 298,
    left: 22,
    borderRadius: 150,
    width: 346,
  },
  createAnAccountChild: {
    top: 377,
    left: 20,
  },
  createAnAccountItem: {
    top: 712,
    borderColor: Color.colorDarkorange,
    borderWidth: 3,
    borderStyle: "solid",
    width: 318,
    borderRadius: Border.br_81xl,
    left: 40,
    height: 45,
  },
  loginWithGoogle: {
    top: 722,
    left: 126,
    textTransform: "capitalize",
    width: 212,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  google1Icon: {
    top: 724,
    left: 92,
    width: 20,
    height: 20,
    position: "absolute",
  },
  emailAddress: {
    left: 128,
    top: 306,
    fontSize: FontSize.size_xl,
  },
  password: {
    top: 386,
    color: Color.colorDarkorange,
    textAlign: "left",
    fontFamily: FontFamily.fredokaRegular,
  },
  ellipseIcon: {
    top: -202,
    left: 244,
    width: 523,
    height: 523,
    position: "absolute",
  },
  groupIcon: {
    top: -376,
    left: 100,
    width: 536,
    height: 536,
    position: "absolute",
  },
  mailIcon: {
    left: 56,
    height: 24,
    top: 306,
  },
  lockIcon: {
    left: 58,
    height: 24,
    top: 386,
  },
  subtractIcon: {
  marginTop:20,
    width: 200,
    height: 200,
  },
  forgetPassword: {
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
    width: 232,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.fredokaRegular,
  },
  forgetPasswordWrapper: {
    top: 575,
    left: 208,
    height: 24,
  },
  oolzfw0RemovebgPreview1Icon: {
    top: 43,
    left: 105,
    borderRadius: Border.br_95xl,
    width: 169,
    height: 183,
    position: "absolute",
  },
  dingo: {
    top: 204,
    lineHeight: 48,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "center",
    color: Color.colorBlack,
    left: 150,
  },
  createAnAccount: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 1,
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default ScreenAuth;