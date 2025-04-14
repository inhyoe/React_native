import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

interface Props {}

const StartGameScreen = ({}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad" // 숫자 전용 키패드
        autoCapitalize="none" // 자동 대문자 변환 비활성화
        autoCorrect={false} // 자동 수정 기능 비활성화
      />

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginHorizontal: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: '#50032a',
    borderRadius: 8,
    elevation: 20, // for Android
    shadowOffset: { width: 0, height: 5 }, // for iOS
    shadowRadius: 6,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginBottom: 10,
    padding: 10,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    // 세로 방향으로 중앙 정렬 (위아래 중앙)
    justifyContent: 'center',
    // 가로 방향으로 중앙 정렬 (좌우 중앙)
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    // 가로 방향으로 중앙 정렬 (좌우 중앙)
    justifyContent: 'center',
    // 세로 방향으로 중앙 정렬 (위아래 중앙)
    alignItems: 'center',
  },
});

export default StartGameScreen;
