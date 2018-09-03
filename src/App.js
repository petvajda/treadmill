import sol from './solfege';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let bflat = new sol.Scale("Bb", 1);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Threadmill App For Music Learning</Text>
        <Text style={styles.normal}>3 7 2 4 6 1 5</Text>
        <Text style={styles.header}>Key is Bb</Text>
        <Text style={styles.normal}>{bflat.toString()}</Text>
        <Text style={styles.normal}>1. Note</Text>
        <Text style={styles.normal}>2. Where is it on the bass</Text>
        <Text style={styles.normal}>(all strings or 1 string, high to low)</Text>
        <Text style={styles.normal}>3. The mode name and its notes</Text>
        <Text style={styles.normal}>4. The chord name and its notes</Text>
        <Text style={styles.normal}>5. The pentatonic name and its notes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0288d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
  },
  normal: {
    color: '#000000',
    fontSize: 16,
    paddingTop: 10,
  },
});
