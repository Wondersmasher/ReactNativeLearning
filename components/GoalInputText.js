import React from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInputText = ({
  handleGoalChange,
  handleGoalSubmit,
  goal,
  isModalOpen,
  closeModal,
}) => {
  return (
    <Modal animationType="fade" visible={isModalOpen}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.image}
          source={require(`../assets/images/goal.png`)}
        />
        <View style={styles.search}>
          <TextInput
            placeholder="Add New Text"
            value={goal}
            onChangeText={handleGoalChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={handleGoalSubmit}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputText;
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
    gap: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 50,
    height: 50,
  },
  search: {
    backgroundColor: "#e4d0ff",
    padding: 5,
    borderRadius: 5,
    width: "95%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 100,
  },
});
