import { Alert, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'

export default function MemberSign({navigation}) {


  const [userName, setUserName] =useState(null);
  const [userSurname, setUserSurname] =useState(null);
  const [userAge, setUserAge] =useState(null);
  const [userMail, setUserMail] =useState(null);
  const [userHometown, setUserHometown] =useState(null);

  function handleSubmit(){ 

     if(!userName || !userMail || !userSurname || !userAge || !userHometown){
      Alert.alert("İstanbul Fitness","Lütfen Tüm Alanları Doldurunuz")
      return;
    }
    const user ={
      userName,
      userSurname,
      userAge,
      userMail,
      userHometown
    }

    navigation.navigate('memberresult',{user});
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