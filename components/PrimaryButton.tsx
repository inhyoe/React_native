import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
  children: string;
}

const PrimaryButton = ({ children }: Props) => {
  const pressHandler = () => {
    console.log('Pressed');
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#600238' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // 자식 요소가 부모 요소의 경계를 넘어가지 않도록 설정
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    elevation: 2, // for Android
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 2 }, // for iOS
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
