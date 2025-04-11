import { Text, StyleSheet, View, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Goal } from '../DTO/dto';
import { Pressable } from 'react-native';

interface MiddleProps {
  courseGoals: Goal[]; // Goal 타입 사용
  onDeleteGoals: (index: number) => void; // 삭제 핸들러
}

const { width, height } = Dimensions.get('window');

const Middle: React.FC<MiddleProps> = ({ courseGoals, onDeleteGoals }) => {
  console.log('in Middle', courseGoals);
  return (
    <View style={styles.goalsContainer}>
      <Text>List of Goals</Text>
      {courseGoals.map((goal, index) => (
        <View style={styles.listOfGoals} key={index}>
          <Text>{goal}</Text>
          <Pressable
            style={styles.buttonOfX}
            onPress={() => {
              onDeleteGoals(index);
            }}
          >
            <Text>X</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Middle;
