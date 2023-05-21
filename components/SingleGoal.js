import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const SingleGoal = ({ data, deleteGoal, id }) => {
  return (
    <Pressable onPress={() => deleteGoal(id)}>
      <View style={styles.textItem}>
        <Text style={styles.textItemText}>{data}</Text>
      </View>
    </Pressable>
  );
};

export default SingleGoal;
const styles = StyleSheet.create({
  textItem: {
    backgroundColor: "#b180f0",
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
  },
  textItemText: {
    color: "white",
  },
});
