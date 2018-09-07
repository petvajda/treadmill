import solfege from './solfege';
import React from 'react';
import { Alert, Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const ExerciseText = (props) => {
  return (
    <View>
      <Text style={styles.keyname}>{props.keyname}</Text>
      <Text style={styles.sequence}>{props.sequence}</Text>
    </View>
  );
};

const ExerciseSteps = (props) => {
  return (
    <View>
      <Text style={styles.normal}>1. Note</Text>
      <Text style={styles.normal}>2. Where is it on the bass</Text>
      <Text style={styles.normal}>(all strings or 1 string, high to low)</Text>
      <Text style={styles.normal}>3. The mode name and its notes</Text>
      <Text style={styles.normal}>4. The chord name and its notes</Text>
      <Text style={styles.normal}>5. The pentatonic name and its notes</Text>
    </View>
  );
};

export default class App extends React.Component {

  static initialState = () => ({
    sequence: solfege.randomModesSequence().join(' '),
    keyname:  solfege.randomKey(),
  });

  state = App.initialState();
  resetGame = () => this.setState(App.initialState());
  help = () => {
    let s = new solfege.Scale(this.state.keyname, 1);
    Alert.alert(s.notes.join(' '));
  };

  render() {
    const {
      sequence,
      keyname,
    } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Threadmill App For Music Learning</Text>
        </View>
        <TouchableHighlight onPress={this.help} underlayColor="white">
          <View style={styles.buttonContainer}>
            <ExerciseText keyname={keyname}
                          sequence={sequence} />
            <ExerciseSteps />
          </View>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.resetGame}
            title="New Exercise"
            color="#000000"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0288d1',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 18,
  },
  normal: {
    color: '#000000',
    fontSize: 16,
    padding: 4,
    textAlign: 'center',
  },
  keyname: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  sequence: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor:'#5eb8ff',
    borderRadius:10,
    width: '80%',
  },
});
