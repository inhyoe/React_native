import React, { Dispatch, SetStateAction, useState } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

interface GoalInputProps {
  setCourseGoals: Dispatch<SetStateAction<string[]>>;
}

const GoalInput = ({ setCourseGoals }: GoalInputProps) => {
  const [entererGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string): void {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      entererGoalText,
    ]);
    setEnteredGoalText(''); // 입력 필드 초기화
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Hi bro"
        onChangeText={(i) => goalInputHandler(i)}
        value={entererGoalText}
      />
      <Button title="add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    width: '70%',
  },
});
export default GoalInput;
