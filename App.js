import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const YourApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerResult}>
        <Text style={styles.textResult}>0</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.textButtonClear}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton}>
          <Text style={styles.textButton}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.textNumberButton}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.divideButton}>
          <Text style={styles.textButton}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerResult: {
    backgroundColor: '#433333',
  },
  textResult: {
    height: 250,
    textAlign: 'right',
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'white',
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
  },
  clearButton: {
    width: '75%',
    height: 130,
    backgroundColor: 'white',
    borderColor: '#920F29',
  },
  divideButton: {
    width: '25%',
    height: 130,
    backgroundColor: '#F2274F',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  numberButton: {
    width: '25%',
    height: 130,
    backgroundColor: 'white',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  textButtonClear: {
    color: 'black',
    fontSize: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: '#920F29',
    borderWidth: 1,
  },
  textButton: {
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'white',
    textAlign: 'center',
  },
  textNumberButton: {
    fontSize: 100,
    textAlignVertical: 'center',
    color: 'black',
    textAlign: 'center',
  },
});
export default YourApp;
