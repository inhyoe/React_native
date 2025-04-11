import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.TextInput}
          placeholder="Hi bro"
        />
        <Button title="add Goal" />
      </View>
      <View>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: '5%',
    // padding: 8,
    marginRight: '5%',
    // marginRight: 9,
  },
});
