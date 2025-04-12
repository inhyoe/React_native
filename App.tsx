import { useState } from 'react';
import {
  Button,
  FlatList,
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
      ...currentCourseGoals,
      entererGoalText,
    ]);
  }
  function setResetCourseGoals(): void {
    setCourseGoals([]);
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
        <Button title="reset" onPress={setResetCourseGoals} />
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            console.log(itemData);
            return (
              <View style={styles.goalItem} key={itemData.index}>
                <Text>{itemData.item}</Text>
              </View>
            );
          }}
        />
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
