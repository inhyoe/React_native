import React, { Dispatch, SetStateAction, useState } from 'react';
import { TextInput, View, StyleSheet, Button, Modal } from 'react-native';

interface GoalInputProps {
  setCourseGoals: Dispatch<SetStateAction<string[]>>;
  modalVisibleHandler: () => void;
}

const GoalInput = ({ setCourseGoals, modalVisibleHandler }: GoalInputProps) => {
  const [entererGoalText, setEnteredGoalText] = useState<string>('');

  function goalInputHandler(enteredText: string): void {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      entererGoalText,
    ]);
    modalVisibleHandler();
    // setEnteredGoalText(''); // 입력 필드 초기화
  }

  return (
    <Modal visible={true} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Hi bro"
          onChangeText={(i) => goalInputHandler(i)}
          value={entererGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close Modal" onPress={modalVisibleHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    padding: '5%',
    justifyContent: 'center',
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
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});
export default GoalInput;
