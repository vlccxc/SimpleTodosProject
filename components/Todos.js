import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Todos({item, pressHandler}){
  return(
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <FontAwesome5 name={'trash'} size={16} color={'#333'}/>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    margin: 16,
    borderColor: '#bbb',
    borderWidth: 1, 
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  }
});