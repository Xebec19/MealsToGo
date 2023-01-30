import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{
          flex: 0.5,
          backgroundColor: "green",
          justifyContent: "center",
        }}
      >
        <Text>Search</Text>
      </View>
      <View style={{ flex: 5.5, backgroundColor: "blue" }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
