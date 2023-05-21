import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import SingleGoal from "./components/SingleGoal";
import GoalInputText from "./components/GoalInputText";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [courseGoals, setCourseGoals] = useState([]);
  const [goal, setGoal] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleGoalChange = (enteredText) => {
    setGoal(enteredText);
  };
  const handleGoalSubmit = () => {
    if (goal) {
      setCourseGoals((prev) => [...prev, { goal: goal, id: prev.length + 1 }]);
      setGoal("");
      closeModal();
    }
  };
  const deleteGoal = (id) => {
    const newGoals = courseGoals.filter((goal) => goal.id !== id);
    setCourseGoals(newGoals);
  };
  return (
    <View style={styles.container}>
      <GoalInputText
        handleGoalChange={handleGoalChange}
        handleGoalSubmit={handleGoalSubmit}
        goal={goal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Pressable style={styles.addNewGoal} onPress={openModal}>
        <Text style={styles.addNewGoalText}>Add New Goal</Text>
      </Pressable>
      <View style={styles.textContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <SingleGoal data={item.goal} deleteGoal={deleteGoal} id={item.id} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 30,
  },
  textContainer: {
    flex: 1,
  },
  addNewGoal: {
    backgroundColor: "#5e0acc",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addNewGoalText: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
