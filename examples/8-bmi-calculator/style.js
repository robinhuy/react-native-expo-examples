import { ViewStyle, TextStyle, Platform } from "react-native";

export const BG_COLOR = "#323344";
export const HIGHLIGHT_BG_COLOR = "#24263b";
export const MALE_COLOR = "#51caef";
export const FEMALE_COLOR = "#f15123";

export const TEXT: TextStyle = {
  color: "#fff",
  textAlign: "center",
};

export const TEXT_LABEL: TextStyle = {
  fontSize: 15,
  textAlign: "center",
  color: "#848694",
};

export const TEXT_VALUE: TextStyle = {
  ...TEXT,
  fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
  fontSize: 35,
  lineHeight: 55,
  fontWeight: "bold",
};

export const ROW: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
};

export const CENTER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const BOX: ViewStyle = {
  flex: 1,
  backgroundColor: BG_COLOR,
  padding: 15,
  borderRadius: 10,
};

export const BUTTON: ViewStyle = {
  ...CENTER,
  height: 60,
  borderRadius: 5,
  backgroundColor: "#e83d66",
};

export const BUTTON_TEXT: TextStyle = {
  ...TEXT,
  fontSize: 24,
  fontWeight: "bold",
};
