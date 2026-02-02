import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const AddNoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add note</Text>

      <TextInput placeholder="Enter note" style={styles.input} />
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Save</Text>
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
