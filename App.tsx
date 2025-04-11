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

  // 목표 추가 핸들러
  // function addGoalHandler(newGoal: string): void {
  //   if (newGoal.trim().length === 0) return; // 빈 입력값 방지
  //   setCourseGoals((currentCourseGoals) => [...currentCourseGoals, newGoal]);
  // }

  // function deleteCourseGoalHandler(index: number): void {
  //   setCourseGoals((currentCourseGoals) => {
  //     const updatedCourseGoals = [...currentCourseGoals];
  //     updatedCourseGoals.splice(index, 1);
  //     return updatedCourseGoals;
  //   });
  // }
  console.log(courseGoals);
  return (
    <View style={styles.appContainer}>
      {/* Top 컴포넌트 사용 */}
      {/* <Top addGoalHandler={(goals) => addGoalHandler(goals, setCourseGoals)} /> */}
      {/* Middle 컴포넌트 사용 */}
      {/* <Middle
        courseGoals={courseGoals}
        // onDeleteGoals={deleteCourseGoal}
        onDeleteGoals={(index) => deleteCourseGoal(index, setCourseGoals)}
      /> */}
      <Top
        addGoalHandler={(newGoal) =>
          setCourseGoals((prev) => [...prev, newGoal])
        }
      />
      <Middle
        courseGoals={courseGoals}
        onDeleteGoals={(index) =>
          setCourseGoals((prev) => prev.filter((_, i) => i !== index))
        }
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
