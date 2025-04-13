import React, { useState } from 'react';
import { FlatList, Pressable, View, Text, StyleSheet } from 'react-native';
import ResetButton from './ResetButton';
import DeleteGoalItem from './DeleteGoalItem';

interface GoalItemsProps {
   courseGoals: Goal[];
   setCourseGoals: React.Dispatch<React.SetStateAction<string[]>>;
}
type Goal = string;
const GoalItems = ({ courseGoals, setCourseGoals }: GoalItemsProps) => {
   return (
      <View style={[styles.goalsContainer]}>
         <ResetButton setCourseGoals={setCourseGoals} />
         <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
               return (
                  <Pressable
                     android_ripple={{ color: '#330471' }}
                     style={({ pressed }) => pressed && styles.pressedItem}
                  >
                     <View style={styles.goalItem}>
                        <Text style={styles.goalText}>{itemData.item}</Text>
                        <DeleteGoalItem
                           itemIndex={itemData.index}
                           setCourseGoals={setCourseGoals}
                        />
                     </View>
                  </Pressable>
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
      margin: 2,
      padding: 3,
      borderRadius: 10,
      alignItems: 'center',
      color: 'white',
      flexDirection: 'row',
   },
   goalText: {
      margin: 8,
      padding: 8,
      borderRadius: 10,
      backgroundColor: '#5e0acc',
   },
   goalsContainer: {
      flex: 4,
   },

   pressedItem: {
      opacity: 0.5,
   },
});

export default GoalItems;
