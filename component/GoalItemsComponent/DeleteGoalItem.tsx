import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
   itemIndex: Number;
   setCourseGoals: React.Dispatch<React.SetStateAction<string[]>>;
}

const DeleteGoalItems = ({ itemIndex, setCourseGoals }: Props) => {
   function deleteGoalHandler(itemIndex: Number) {
      console.log(itemIndex);
      setCourseGoals((currentCourseGoals) => {
         return currentCourseGoals.filter((_, index) => index !== itemIndex);
      });
   }
   return (
      <View>
         <Pressable
            onPress={() => deleteGoalHandler(itemIndex)}
            style={styles.Button}
         >
            <Text>X</Text>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   Button: {
      backgroundColor: '#0a8bcc',
      borderRadius: 10,
      marginTop: 8,
      marginBottom: 8,
      padding: 8,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default DeleteGoalItems;
