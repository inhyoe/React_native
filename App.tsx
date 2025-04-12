import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import Top from './AppComponent/Top';
import Middle from './AppComponent/Middle';
import { Goal } from './DTO/dto';
import { deleteCourseGoal } from './Logic/deleteCourseGoal';
import { addGoalHandler } from './Logic/addGoalHandler';

const { width, height } = Dimensions.get('window');
export default function App() {
  console.log(Middle);
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  console.log(courseGoals);
  return (
    <View style={styles.appContainer}>
      <Top addGoalHandler={(goals) => addGoalHandler(goals, setCourseGoals)} />
      <Middle
        courseGoals={courseGoals}
        onDeleteGoals={(index) => deleteCourseGoal(index, setCourseGoals)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
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
