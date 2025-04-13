import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from 'react-native';

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
    <Modal
      visible={true}
      animationType="slide"
      transparent={false} // Modal의 배경을 불투명하게 설정
    >
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Hi bro"
          onChangeText={(i) => goalInputHandler(i)}
          value={entererGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="add Goal" onPress={addGoalHandler} color="#957db5" />
          </View>
          <View style={styles.button}>
            <Button
              title="Close Modal"
              onPress={modalVisibleHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
    backgroundColor: '#29188e', // 배경색 추가
  },

  textInputStyle: {
    borderWidth: 3,
    borderColor: '#e4cae2',
    backgroundColor: '#e4d0ff',
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 8,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
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
