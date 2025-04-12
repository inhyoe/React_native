import { useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalItems from './component/GoalItems';
import GoalInput from './component/GoalInput';

type Goal = string;

export default function App() {
  const [entererGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function goalInputHandler(enteredText: string): void {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      entererGoalText,
    ]);
  }
  function setResetCourseGoals(): void {
    setCourseGoals([]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
      />
      <GoalItems
        courseGoals={courseGoals}
        setResetCourseGoals={setResetCourseGoals}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
