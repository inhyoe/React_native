import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalItems from './component/GoalItemsComponent/GoalItems';
import GoalInput from './component/GoalInputComponent/GoalInput';
import { Goal } from './DTO/Type';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <GoalItems courseGoals={courseGoals} setCourseGoals={setCourseGoals}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
