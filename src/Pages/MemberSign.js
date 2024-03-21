import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

export default function MemberSign() {


  const [userName, setUserName] =useState('');
  const [userSurname, setUserSurname] =useState('');
  const [userAge, setUserAge] =useState('');
  const [userMail, setUserMail] =useState('');
  const [userHometown, setUserHometown] =useState('');

  function handleSubmit(){
    const user ={
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown
    }
    console.log(user)
  }

  return (
    <View>
      <Input label="Üye Adı" placeholder="Ad..." onChangeText={setUserName}/>
      <Input label="Üye Soyadı" placeholder="Soyad..." onChangeText={setUserSurname}/>
      <Input keyboardType="number-pad" label="Üye Yaşı" placeholder="Yaş..." onChangeText={setUserAge}/>
      <Input keyboardType="email-address" label="Üye E-posta" placeholder="E-posta..." onChangeText={setUserMail}/>
      <Input label="Üye Kütük" placeholder="Kütük..." onChangeText={setUserHometown}/>
      <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({



})