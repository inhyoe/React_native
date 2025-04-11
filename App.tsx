import { useState } from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

type Goal = string;
const { width, height } = Dimensions.get('window');

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
        <Text>List of Goals</Text>
        {courseGoals.map((goal, index) => (
          <View style={[styles.listOfGoals]} key={index}>
            <Text>{goal}</Text>
            <Pressable
              style={styles.buttonOfX}
              onPress={(onTouch) => {
                console.log('Touched');
              }}
            >
              <Text>X</Text>
            </Pressable>
          </View>
        ))}
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
    flex: 5,
  },

  listOfGoals: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonOfX: {
    marginLeft: '5%',
    backgroundColor: '#00bfff',
    borderRadius: 5,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    alignItems: 'center',
  },
});
