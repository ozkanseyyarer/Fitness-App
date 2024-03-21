import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../components/Button/Button';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <Button text="Üye Kaydı Oluştur" onPress={null} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"#FFFFFF", 

  },
  header:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    margin:10
  }
});
