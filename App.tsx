import { useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import GoalItems from './component/GoalItemsComponent/GoalItems';
import GoalInput from './component/GoalInputComponent/GoalInput';
import { Goal } from './DTO/Type';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  // const insets = useSafeAreaInsets();

  function modalVisibleHandler(): void {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      {/* Fragment */}
      <StatusBar style="dark" />
      <SafeAreaView style={styles.appContainer}>
        <View>
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
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight + 10 : 0,
  },
});
