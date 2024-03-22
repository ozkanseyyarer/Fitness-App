import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MemberResul({route}) {

    const {user} = route.params;
  return (
    <View style={{alignItems:"center"}}>
      <Text style={{fontWeight:"bold", fontSize:60, textAlign:"center", color:"black", marginVertical:50}}>KAYIT TAMAMLANDI</Text>
      <Text style={{fontWeight:"bold", fontSize:30}}>Üye Adı : {user.userName}</Text>
      <Text style={{fontWeight:"bold", fontSize:30}}>Üye Soyadı : {user.userSurname}</Text>
      <Text style={{fontWeight:"bold", fontSize:30}}>Üye Yaşı : {user.userAge}</Text>
      <Text style={{fontWeight:"bold", fontSize:30}}>Üye Maili : {user.userMail}</Text>
      <Text style={{fontWeight:"bold", fontSize:30}}>Üye Memleketi : {user.userHometown}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})