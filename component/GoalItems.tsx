import React from 'react';
import { FlatList, Pressable, View, Text, StyleSheet } from 'react-native';

interface GoalItemsProps {
  courseGoals: string[];
  setResetCourseGoals: () => void;
}

const GoalItems = ({ courseGoals, setResetCourseGoals }: GoalItemsProps) => {
  return (
    <View style={[styles.goalsContainer]}>
      <Pressable
        style={styles.pressableButtonStyle}
        onPress={setResetCourseGoals}
      >
        <Text>reset</Text>
      </Pressable>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          console.log(itemData);
          return (
            <View
              style={styles.goalItem}
              // key={itemData.index}
            >
              <Text>{itemData.item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pressableButtonStyle: {
    backgroundColor: '#00bfff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalsContainer: {
    flex: 4,
  },
});

export default GoalItems;
