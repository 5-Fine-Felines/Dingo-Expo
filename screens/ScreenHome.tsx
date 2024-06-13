import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../app/GlobalStyles";

const ScreenHome = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.container50, styles.textbox1Position]}>
        <View style={[styles.container52, styles.containerLayout]}>
          <Text style={[styles.meetingTitle, styles.meetingTypo]}>
            Meeting title
          </Text>
          <Text style={[styles.room02, styles.amTypo]}>Room 02</Text>
          <Text style={[styles.am, styles.amPosition]}>10:00 - 11:00 AM</Text>
          {/* <Image
            style={[styles.clock1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/images/clock-1.png")}
          /> */}
          <Image
            style={[styles.pin33, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/images/pin-3-3.png")}
          />
          <View style={[styles.tag9, styles.tagLayout1]}>
            {/* <View style={[styles.frame, styles.framePosition7]}>
              <Text style={styles.external}>External</Text>
              <Image
                style={[styles.circle09Icon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/images/circle-09.png")}
              />
            </View> */}
          </View>
          <View style={[styles.avatar34, styles.avatar34Layout]}>
            <Text style={styles.a}>A</Text>
          </View>
          {/* <Image
            style={[styles.avatar35Icon, styles.avatar34Layout]}
            contentFit="cover"
            source={require("../assets/images/avatar-35.png")}
          /> */}
        </View>
        <Text style={[styles.reminders, styles.labelClr]}>Reminders</Text>
        <View style={[styles.container521, styles.containerLayout]}>
          <Text style={[styles.meetingTitle1, styles.meetingTypo]}>
            Meeting title
          </Text>
          <Text style={[styles.room02, styles.amTypo]}>Room 02</Text>
          <Text style={[styles.am, styles.amPosition]}>10:00 - 11:00 AM</Text>
          {/* <Image
            style={[styles.clock1Icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/images/clock-1.png")}
          /> */}
          {/* <Image
            style={[styles.pin33, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/images/pin-3-3.png")}
          /> */}
          <View style={[styles.tag91, styles.tagLayout1]}>
            <View style={[styles.frame, styles.framePosition7]}>
              <Text style={styles.external}>External</Text>
              {/* <Image
                style={[styles.circle09Icon, styles.iconPosition1]}
                contentFit="cover"
                source={require("../assets/images/circle-09.png")}
              /> */}
            </View>
          </View>
          <View style={[styles.avatar34, styles.avatar34Layout]}>
            <Text style={styles.a}>A</Text>
          </View>
          <Image
            style={[styles.avatar35Icon, styles.avatar34Layout]}
            contentFit="cover"
            source={require("../assets/images/avatar-351.png")}
          />
        </View>
      </View>
      <View style={[styles.textbox1, styles.textbox1Border]}>
        <Text style={[styles.search, styles.searchClr]}>Search</Text>
        {/* <Image
          style={[styles.searchIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/images/search.png")}
        /> */}
      </View>
      <Image
        style={[styles.avatar1Icon, styles.buttonIconLayout]}
        contentFit="cover"
        source={require("../assets/images/avatar-1.png")}
      />
      {/* <Image
        style={[styles.iconButton1, styles.buttonIconLayout]}
        contentFit="cover"
        source={require("../assets/images/icon-button-1.png")}
      /> */}
      <Text style={[styles.carlJonson, styles.amPosition]}>Carl Jonson</Text>
      <View style={[styles.button2, styles.buttonIconLayout]}>
        <Text style={[styles.search1, styles.meetingLayout]}>Search</Text>
        {/* <Image
          style={[styles.searchIcon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/images/search1.png")}
        /> */}
      </View>
      <View style={[styles.container16, styles.container16Layout]}>
        <View style={[styles.tabBarMenu1, styles.container16Layout]}>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Image
              style={styles.playlistIcon}
              contentFit="cover"
              source={require("../assets/images/playlist.png")}
            />
            <Text style={[styles.feed, styles.feedPosition]}>Feed</Text>
          </View>
          <View style={[styles.frame3, styles.frameLayout]}>
            {/* <Image
              style={styles.playlistIcon}
              contentFit="cover"
              source={require("../assets/images/search2.png")}
            /> */}
            <Text style={[styles.search2, styles.feedPosition]}>Search</Text>
          </View>
          <View style={[styles.frame4, styles.frameLayout]}>
            {/* <Image
              style={styles.playlistIcon}
              contentFit="cover"
              source={require("../assets/images/books.png")}
            /> */}
            <Text style={[styles.myLibrary, styles.feedPosition]}>
              My Library
            </Text>
          </View>
          <View style={[styles.frame5, styles.frameLayout]}>
            <View style={[styles.rectangle, styles.framePosition7]} />
            {/* <Image
              style={styles.playlistIcon}
              contentFit="cover"
              source={require("../assets/images/home.png")}
            /> */}
            <Text style={[styles.home1, styles.feedPosition]}>Home</Text>
          </View>
        </View>
      </View>
      <View style={[styles.container46, styles.table2Border]}>
        <Text style={[styles.myPets, styles.labelClr]}>My Pets</Text>
        <View style={[styles.table2, styles.table2Border]}>
          <View style={[styles.row, styles.rowPosition]}>
            <View style={[styles.frame6, styles.framePosition4]}>
              <Text style={[styles.pedro, styles.pedroPosition]}>Pedro</Text>
              <Text style={[styles.inSitProident, styles.pedroPosition]}>
                In sit proident
              </Text>
            </View>
            <View style={[styles.frame7, styles.framePosition3]}>
              <View style={[styles.avatar, styles.buttonIconLayout]}>
                <Text style={[styles.a2, styles.a2Position]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag, styles.tagLayout]}>
                <View style={[styles.frame9, styles.tagLayout]}>
                  <Text style={[styles.label, styles.labelClr]}>Label</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameIcon, styles.framePosition1]}
              contentFit="cover"
              source={require("../assets/images/frame.png")}
            />
          </View>
          <View style={[styles.row1, styles.rowPosition]}>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag, styles.tagLayout]}>
                <View style={[styles.frame9, styles.tagLayout]}>
                  <Text style={[styles.label, styles.labelClr]}>Label</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameIcon, styles.framePosition1]}
              contentFit="cover"
              source={require("../assets/images/frame1.png")}
            />
            <View style={[styles.frame7, styles.framePosition3]}>
              <View style={[styles.avatar, styles.buttonIconLayout]}>
                <Text style={[styles.a2, styles.a2Position]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition4]}>
              <Text
                style={[styles.inSitProident, styles.pedroPosition]}
              >{`Et qui velit `}</Text>
              <Text style={[styles.pedro, styles.pedroPosition]}>Ryan</Text>
            </View>
          </View>
          <View style={[styles.row2, styles.rowPosition]}>
            <Image
              style={[styles.frameIcon, styles.framePosition1]}
              contentFit="cover"
              source={require("../assets/images/frame2.png")}
            />
            <View style={[styles.frame7, styles.framePosition3]}>
              <View style={[styles.avatar, styles.buttonIconLayout]}>
                <Text style={[styles.a4, styles.a2Position]}>A</Text>
              </View>
            </View>
            <View style={[styles.frame8, styles.framePosition2]}>
              <View style={[styles.tag, styles.tagLayout]}>
                <View style={[styles.frame9, styles.tagLayout]}>
                  <Text style={[styles.label, styles.labelClr]}>Label</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frame6, styles.framePosition4]}>
              <Text style={[styles.inSitProident, styles.pedroPosition]}>
                Elit ut qui duis
              </Text>
              <Text style={[styles.pedro, styles.pedroPosition]}>Brian</Text>
            </View>
          </View>
          <View style={styles.header}>
            <View style={[styles.frame18, styles.framePosition]} />
            <View style={[styles.frame19, styles.framePosition]} />
            <View style={[styles.frame20, styles.framePosition]}>
              <Text style={[styles.status, styles.nameTypo]}>Status</Text>
            </View>
            <View style={[styles.frame21, styles.framePosition]}>
              <Text style={[styles.name, styles.nameTypo]}>Name</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox1Position: {
    borderWidth: 1,
    left: 20,
    position: "absolute",
  },
  containerLayout: {
    height: 101,
    width: 332,
    left: 8,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  meetingTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  amTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
  },
  amPosition: {
    top: 41,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout2: {
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  tagLayout1: {
    width: 79,
    height: 24,
  },
  framePosition7: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconPosition1: {
    marginTop: -8,
    left: "50%",
    top: "50%",
    height: 16,
    width: 16,
    position: "absolute",
    overflow: "hidden",
  },
  avatar34Layout: {
    height: 28,
    width: 28,
    bottom: 14,
    borderRadius: Border.br_sm,
    position: "absolute",
    overflow: "hidden",
  },
  labelClr: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    position: "absolute",
  },
  textbox1Border: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  searchClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.manropeRegular,
  },
  buttonIconLayout: {
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  meetingLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container16Layout: {
    height: 60,
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 98,
    height: 60,
    backgroundColor: Color.colorDarkorange,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  feedPosition: {
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  table2Border: {
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rowPosition: {
    left: "0%",
    right: "0.29%",
    width: "99.71%",
    height: "25.05%",
    position: "absolute",
  },
  framePosition4: {
    left: "20.77%",
    right: "40.97%",
    width: "38.25%",
  },
  pedroPosition: {
    width: 108,
    color: Color.colorGray_200,
    left: 12,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  framePosition3: {
    right: "79.23%",
    width: "20.77%",
    left: "0%",
  },
  a2Position: {
    fontSize: FontSize.size_lg,
    marginLeft: -5.5,
    lineHeight: 18,
    left: "50%",
    top: "50%",
    marginTop: -9,
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    position: "absolute",
  },
  framePosition2: {
    left: "59.03%",
    right: "17.34%",
    width: "23.64%",
  },
  tagLayout: {
    width: 46,
    height: 28,
    position: "absolute",
  },
  framePosition1: {
    left: "82.66%",
    right: "0%",
    width: "17.34%",
  },
  framePosition: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.74%",
    top: "-0.74%",
    height: "101.47%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
    overflow: "hidden",
  },
  nameTypo: {
    fontFamily: FontFamily.lexendSemiBold,
    fontWeight: "600",
    color: Color.colorGray_200,
    marginTop: -11.5,
    top: "50%",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  meetingTitle: {
    textAlign: "left",
    color: Color.colorWhite,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 16,
    top: 11,
    fontWeight: "700",
    position: "absolute",
  },
  room02: {
    top: 69,
    fontFamily: FontFamily.manropeRegular,
    left: 36,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  am: {
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 36,
    color: Color.colorWhite,
  },
  clock1Icon: {
    top: 43,
    left: 16,
  },
  pin33: {
    top: 71,
    left: 16,
  },
  external: {
    marginLeft: -11.5,
    fontSize: FontSize.size_2xs,
    lineHeight: 18,
    marginTop: -9,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  circle09Icon: {
    marginLeft: -31.5,
  },
  frame: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorDarkorange,
    left: 0,
    height: 24,
    width: 79,
    overflow: "hidden",
  },
  tag9: {
    backgroundColor: "rgba(75, 75, 75, 0)",
    height: 24,
    left: 237,
    bottom: 68,
    width: 79,
    position: "absolute",
  },
  a: {
    marginTop: -7,
    marginLeft: -4.5,
    lineHeight: 14,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  avatar34: {
    right: 36,
    backgroundColor: Color.colorDarkorange,
  },
  avatar35Icon: {
    right: 16,
  },
  container52: {
    top: 157,
  },
  reminders: {
    top: 8,
    left: 17,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_200,
  },
  meetingTitle1: {
    color: "#080808",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 16,
    top: 11,
    fontWeight: "700",
    position: "absolute",
  },
  tag91: {
    backgroundColor: Color.colorDarkorange,
    height: 24,
    left: 237,
    bottom: 68,
    width: 79,
    position: "absolute",
  },
  container521: {
    top: 44,
  },
  container50: {
    top: 515,
    width: 351,
    height: 270,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  search: {
    left: 34,
    marginTop: -11.5,
    color: Color.colorBlack,
    top: "50%",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  searchIcon: {
    marginTop: -8.5,
    left: 12,
    top: "50%",
  },
  textbox1: {
    top: 110,
    width: 244,
    height: 37,
    borderWidth: 1,
    left: 20,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  avatar1Icon: {
    left: 21,
    width: 36,
    borderRadius: Border.br_lg,
    height: 36,
    top: 34,
  },
  iconButton1: {
    left: 334,
    width: 36,
    borderRadius: Border.br_lg,
    height: 36,
    top: 34,
  },
  carlJonson: {
    left: 84,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    color: Color.colorGray_200,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  search1: {
    marginTop: -11,
    marginLeft: -12,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  searchIcon1: {
    marginLeft: -34,
  },
  button2: {
    top: 111,
    left: 278,
    backgroundColor: "#0e0e0e",
    width: 92,
  },
  playlistIcon: {
    marginTop: -20,
    marginLeft: -11.95,
    width: 24,
    left: "50%",
    top: "50%",
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  feed: {
    marginLeft: -11.45,
    color: Color.colorBlack,
    fontFamily: FontFamily.manropeRegular,
  },
  frame2: {
    left: 195,
  },
  search2: {
    marginLeft: -16.45,
    color: Color.colorBlack,
    fontFamily: FontFamily.manropeRegular,
  },
  frame3: {
    left: 98,
  },
  myLibrary: {
    marginLeft: -23.95,
    color: Color.colorBlack,
    fontFamily: FontFamily.manropeRegular,
  },
  frame4: {
    left: 293,
  },
  rectangle: {
    right: 0,
    backgroundColor: Color.colorGray_200,
    height: 2,
    left: 0,
  },
  home1: {
    marginLeft: -14.45,
    color: Color.colorGray_200,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  frame5: {
    left: 0,
  },
  tabBarMenu1: {
    top: 10,
    borderWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkorange,
  },
  container16: {
    top: 775,
    backgroundColor: "#eadfdb",
  },
  myPets: {
    top: 4,
    left: 128,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray_200,
  },
  pedro: {
    marginTop: -21.95,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  inSitProident: {
    marginTop: 2.05,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  frame6: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  a2: {
    color: Color.colorWhite,
  },
  avatar: {
    marginTop: -17.95,
    marginLeft: -17.95,
    width: 36,
    borderRadius: Border.br_lg,
    height: 36,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorDarkorange,
  },
  frame7: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  label: {
    marginTop: -10,
    marginLeft: -15,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  frame9: {
    borderRadius: Border.br_sm,
    width: 46,
    left: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  tag: {
    marginTop: -13.95,
    marginLeft: -22.95,
    backgroundColor: Color.colorGray_400,
    left: "50%",
    top: "50%",
  },
  frame8: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  frameIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  row: {
    top: "24.43%",
    bottom: "50.52%",
    backgroundColor: "rgba(246, 102, 102, 0)",
  },
  row1: {
    top: "49.51%",
    bottom: "25.44%",
    backgroundColor: Color.colorGray_400,
  },
  a4: {
    color: "#fffefe",
  },
  row2: {
    top: "74.56%",
    bottom: "0.4%",
    backgroundColor: Color.colorGray_400,
  },
  frame18: {
    right: "79.23%",
    width: "20.77%",
    left: "0%",
  },
  frame19: {
    left: "82.66%",
    right: "0%",
    width: "17.34%",
  },
  status: {
    marginLeft: -29.45,
    textAlign: "center",
    width: 59,
    left: "50%",
  },
  frame20: {
    left: "59.03%",
    right: "17.34%",
    width: "23.64%",
  },
  name: {
    width: 110,
    left: 12,
    textAlign: "left",
  },
  frame21: {
    left: "20.77%",
    right: "40.97%",
    width: "38.25%",
  },
  header: {
    height: "24.43%",
    bottom: "75.57%",
    borderWidth: 2,
    top: "0%",
    left: "0%",
    right: "0.29%",
    width: "99.71%",
    backgroundColor: Color.colorGray_400,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  table2: {
    top: 45,
    width: 350,
    height: 277,
    backgroundColor: Color.colorGray_400,
    left: 0,
    overflow: "hidden",
  },
  container46: {
    top: 165,
    width: 349,
    height: 321,
    left: 20,
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorWhite,
  },
  home: {
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

export default ScreenHome;
