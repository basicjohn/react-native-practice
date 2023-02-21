import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  // console.log("Hello World");
  let x = 1;
  // x.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <View>
        <Text numberOfLines={1} onPress={() => console.log("test")}>
          Hi, my name is John. I am trying to type this in a really long line to
          see and example of truncated text for testing the react Native Text
          Component limitations on the IOS platform.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
