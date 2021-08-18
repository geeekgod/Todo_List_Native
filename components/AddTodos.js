import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

export const AddTodos = (props) => {
  const [text, setText] = useState('');

  const onChangeHandler = e => {
    setText(e);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task ..."
        onChangeText={onChangeHandler}
      />
      <Button onPress={()=> props.onSubmit(text)} title="Add Task" color="coral"/>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
});

export default AddTodos;
