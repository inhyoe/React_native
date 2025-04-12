import React from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

interface GoalInputProps {
  goalInputHandler: (text: string) => void;
  addGoalHandler: () => void;
}

const GoalInput = ({ goalInputHandler, addGoalHandler }: GoalInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Hi bro"
        onChangeText={(i) => goalInputHandler(i)}
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
