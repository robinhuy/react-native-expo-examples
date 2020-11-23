import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  ROW,
  SECONDARY_TEXT_COLOR,
} from "./style";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    padding: 15,
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: PRIMARY_COLOR,
  },
  listItem: {
    flexDirection: "row",
    margin: 15,
  },
  coverImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 15,
  },
  songName: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
    color: PRIMARY_TEXT_COLOR,
  },
  songInfo: {
    ...ROW,
    flex: 1,
    marginTop: 10,
  },
  singerName: {
    fontSize: 14,
    color: SECONDARY_TEXT_COLOR,
  },
  songDuration: {
    fontSize: 14,
    color: SECONDARY_TEXT_COLOR,
  },
});
