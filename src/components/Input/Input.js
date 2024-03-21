import {Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from "./Input.style"


export default function Input({label, placeholder, onChangeText, keyboardType}) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} keyboardType={keyboardType}/>
      </View>
      
    </View>
  )
}
