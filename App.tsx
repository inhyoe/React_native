import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalItems from './component/GoalItemsComponent/GoalItems';
import GoalInput from './component/GoalInputComponent/GoalInput';
import { Goal } from './DTO/Type';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function modalVisibleHandler(): void {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      {/* Fragment */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ margin: 10, marginTop: 60 }}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={modalVisibleHandler}
          />
        </View>
        {modalVisible && (
          <GoalInput
            modalVisibleHandler={modalVisibleHandler}
            setCourseGoals={setCourseGoals}
          />
        )}
        <GoalItems courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
