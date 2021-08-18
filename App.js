import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import AddTodos from './components/AddTodos';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != id);
    });
  };

  const onSubmit = res => {
    if (res.length > 6) {
      setTodos(prevTodos => {
        return [{text: res, key: Math.random.toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('Task too small', 'Todos must be 6 chars long', [
        {text: 'Got It', onPress: () => console.log('Alert Closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={
        ()=>{
          Keyboard.dismiss();
        }
      }
    >
      <View style={styles.container}>
        {/* Header  */}
        <Header />
        <View style={styles.content}>
          <AddTodos onSubmit={onSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
