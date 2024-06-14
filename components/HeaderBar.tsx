import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import { FontFamily, Color, FontSize, Border } from '@/app/GlobalStyles';
import { SCREENS } from '@/routes/ScreenConstants';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/routes/StackRoutes';

type HeaderBarNavigationProp = StackNavigationProp<RootStackParamList>;

const HeaderBar = () => {
  const navigation = useNavigation<HeaderBarNavigationProp>();

  return (
    <View style={{ height: 80, width: '100%', backgroundColor: 'red' }}>
      <Image
        style={[styles.iconButton1, styles.buttonIconLayout]}
        contentFit="cover"
        source={require("../assets/images/icon-button-1.png")}
      />
      <TouchableOpacity onPress={() => {
        navigation.navigate(SCREENS.USERPROFILE);
      }}>
        <Image
          style={[styles.avatar1Icon, styles.buttonIconLayout]}
          contentFit="cover"
          source={require("../assets/images/avatar-1.png")}
        />
        <Text style={[styles.carlJonson, styles.amPosition]}>Carl Jonson</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonIconLayout: {
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  avatar1Icon: {
    left: 21,
    width: 36,
    height: 36,
    top: 34,
  },
  amPosition: {
    top: 41,
    textAlign: "left",
    position: "absolute",
  },
  carlJonson: {
    left: 84,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    color: Color.colorGray_200,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  iconButton1: {
    left: 334,
    width: 36,
    borderRadius: Border.br_lg,
    height: 36,
    top: 34,
  },
});

export default HeaderBar;
