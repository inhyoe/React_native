import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Goal = string;

export default function App() {
  const [entererGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function goalInputHandler(enteredText: string): void {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(): void {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      entererGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Hi bro"
          onChangeText={goalInputHandler}
        />
        <Button title="add Goal" onPress={addGoalHandler} />
      </View>
      <View style={[styles.goalsContainer]}>
        <ScrollView>
          <Text>List of Goals</Text>
          {courseGoals.map((goal, index) => (
            <Text style={styles.goalItem} key={index}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left', // 텍스트를 왼쪽으로 정렬 (기본값)
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  TextInput: {
    borderWidth: 1,
    height: 40,
    borderColor: '#cccccc',
    width: '70%',
    // padding: '5%',
    padding: 8,
    marginRight: '5%',
  },
  goalsContainer: {
    flex: 4,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
});
