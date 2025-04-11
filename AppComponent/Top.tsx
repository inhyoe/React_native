import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

interface TopProps {
  addGoalHandler: (newGoal: string) => void;
}

const Top: React.FC<TopProps> = ({ addGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  // 입력값 변경 핸들러
  const goalInputHandler = (enteredText: string): void => {
    setEnteredGoalText(enteredText);
  };

  // 목표 추가 핸들러
  const handleAddGoal = (): void => {
    addGoalHandler(enteredGoalText); // 부모 컴포넌트로 목표 전달
    setEnteredGoalText(''); // 입력 필드 초기화
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Hi bro"
        onChangeText={goalInputHandler}
        value={enteredGoalText} // 입력값 바인딩
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: '5%',
  },
});

export default Top;
