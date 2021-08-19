import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet} from 'react-native';

export const AddTodos = (props) => {
  const [text, setText] = useState('');

  const onChangeHandler = e => {
    setText(e);
  };

  const checkKey = e =>{
    if(e.key === "Enter"){
      props.onSubmit(text);
    }
  }

  const submitTodo = (text) =>{
    props.onSubmit(text);
    setText("");
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task ..."
        onChangeText={onChangeHandler}
        onKeyPress={checkKey}
        value={text}
      />
      <Button onPress={()=> submitTodo(text)} title="Add Task" color="coral"/>

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
