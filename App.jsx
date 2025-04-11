import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hi there</Text>
      </View>
      <Text style={styles.dummyText}>
        Hello world
      </Text>
      <TextInput />
      <Button title="Tap Me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 12,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 12,
  },
});
