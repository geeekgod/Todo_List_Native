import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const TodoItem = (props) => {
    return (
       <TouchableOpacity
        onPress={() => props.pressHandler(props.item.key)}
       >
           <Text style={styles.item}>{props.item.text}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'rgba(0,0,0,0.2)',
        borderWidth:1,
        borderRadius:10
    }
})

export default TodoItem;