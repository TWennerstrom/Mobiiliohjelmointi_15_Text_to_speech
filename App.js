import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
const [text, setText] = useState(''); 

const speak = () => {
    Speech.speak(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Type something'
        onChangeText={text => setText(text)}
        value = {text}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  input: {
    textAlign: 'center',
  }
});
