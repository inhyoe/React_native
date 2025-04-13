import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface ResetButtonProps {
  setCourseGoals: Dispatch<SetStateAction<string[]>>;
}

const ResetButton = ({ setCourseGoals }: ResetButtonProps) => {
  return (
    <Pressable
      style={styles.pressableButtonStyle}
      onPress={() => setCourseGoals([])}
    >
      <Text>reset</Text>
    </Pressable>
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
});
export default ResetButton;
