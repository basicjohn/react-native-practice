import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
  // console.log("Hello World");
  let x = 1;
  // x.toString();
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Hello World</Text>
      <View>
        <Text style={styles.text} numberOfLines={1} onPress={handlePress}>
          Hi, my name is John. I am trying to type this in a really long line to
          see and example of truncated text for testing the react Native Text
          Component limitations on the IOS platform.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
    color: "#fff",
    text: {
      color: "#fff",
    },
  },
  // change the color of text in the app
  text: {
    color: "#fff",
  },
});

export default App;
