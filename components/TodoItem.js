import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const TodoItem = props => {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
      <View style={styles.container}>
        <Text style={styles.item}>{props.item.text}</Text>
        <FontAwesome5 name={'trash'} size={15}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 0,
    marginRight: 'auto'
  },
  container:{
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
  }
});

export default TodoItem;
