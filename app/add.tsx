import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";



const AddNoteScreen = () => {
    const router =useRouter();
    const [note, setNote] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add note</Text>

      <TextInput placeholder="Enter note" style={styles.input} 
      value={note}
      onChangeText={setNote}
      />
    
      <Pressable style={styles.button}>
        <Text style={styles.button}>Save</Text>
    </Pressable>
     </View>
    );
  };

  export default AddNoteScreen;

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 22, fontWeight: "bold", marginBottom: 12},
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
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
