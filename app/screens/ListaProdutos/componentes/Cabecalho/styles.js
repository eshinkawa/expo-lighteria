import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  titulo: {
    fontFamily: "OpenSans-ExtraBold",
    fontSize: 28,
  },
  iconeMenu: {
    width: 24,
    height: 24,
  },
  containerSacola: {
    backgroundColor: "white",
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 3,
    marginRight: -24,
  },
  iconeSacola: {
    width: 30,
    height: 30,
  },
});