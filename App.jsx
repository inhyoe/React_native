import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{ height: 50 }}></View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.appContainer}>
          <View style={[styles.firstColor, styles.boxSize]}>
            <Text>1</Text>
          </View>
          <View
            style={[styles.secondColor, styles.boxSize]}
          >
            <Text>2</Text>
          </View>
          <View style={[styles.thirdColor, styles.boxSize]}>
            <Text>3</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    flexDirection: 'row',
    width: '80%',
    height: '30%',
    justifyContent: 'space-around',
  },
  boxSize: {
    // width: 100,
  },
  firstColor: {
    flex: 3,
    backgroundColor: 'red',
  },
  secondColor: {
    flex: 2,
    backgroundColor: 'green',
  },
  thirdColor: {
    backgroundColor: 'blue',
  },
});
