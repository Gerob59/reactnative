import { StyleSheet, View } from "react-native";

const DemoPremier = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View
          style={[styles.navbarELement, { backgroundColor: "steelblue" }]}
        />
        <View style={[styles.navbarELement, { backgroundColor: "blue" }]} />
        <View
          style={[styles.navbarELement, { backgroundColor: "lightblue" }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "10%",
  },
  navbar: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  navbarELement: {
    height: 40,
    width: 100,
    flexGrow: 1,
  },
});
export default DemoPremier;
