import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
return (
    <View style={styles.container}>
        <Text style={styles.title}>My notes</Text>
        <Pressable  style={styles.button} onPress={() => router.push("/add")}>
          <Text style={styles.buttontext}>+ Add Notes</Text>
        </Pressable>
    </View>
   );

   };

   
 export default HomeScreen;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  button: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontWeight: "600",
  },
});
