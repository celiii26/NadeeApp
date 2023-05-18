import { setDoc, collection, doc } from 'firebase/firestore';
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput } from 'react-native';
import db from "../firebase"
import { auth, useAuth, upload } from '../firebase'
import { updateProfile } from "firebase/auth"
import { useEffect, useState } from 'react';

const EditProfileScreen = () => {
  const currentUser = useAuth();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [domisili, setDomisili] = useState('');
  const [profession, setProfession] = useState('');
  const [description, setDescription] = useState('');
  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false);

  const handleNewProfile = async () => {
    const collectionRef = doc(db, "dataBaru", currentUser.uid);
    const payload = { name: name, age: age, domisili: domisili, profesi: profession, deskripsi: description, photoURL: photoURL, userID: currentUser.uid };
    await setDoc(collectionRef, payload);
    upload(photo, currentUser, setLoading);
  };

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  function handleBrowse(e){
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }
  useEffect(() => {
    if (currentUser?.photoURL){
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])
  
  return (
      <View style={styles.container}>
      <Image
        style={styles.profilePic}
        source={{ uri: photoURL }}
      />
      <input type='file' onChange={handleBrowse} />
      <Text style={styles.name}></Text>
      <View style={styles.biodata}>
          <Text style={styles.attribute}>
          Nama
          </Text>
          <View style={styles.valuebox}>
            <TextInput
            placeholder="nama"
            value={name}
            onChangeText={text => setName(text)}
            />
          </View>
          <Text style={styles.attribute}>
          Umur
          </Text>
          <View style={styles.valuebox}>
          <TextInput
            placeholder="Umur"
            value={age}
            onChangeText={text => setAge(text)}
            />
          </View>
          <Text style={styles.attribute}>
          Asal Daerah
          </Text>
          <View style={styles.valuebox}>
          <TextInput
            placeholder="Domisili"
            value={domisili}
            onChangeText={text => setDomisili(text)}
            />
          </View>
          <Text style={styles.attribute}>
          Profesi
          </Text>
          <View style={styles.valuebox}>
          <TextInput
            placeholder="Profesi"
            value={profession}
            onChangeText={text => setProfession(text)}
            />
          </View>
          <Text style={styles.attribute}>
          Deskripsi
          </Text>
          <View style={styles.valuebox}>
          <TextInput
            placeholder="Deskripsi singkat tentang anda"
            value={description}
            onChangeText={text => setDescription(text)}
            style={styles.attributeval}
            />
          </View>
          <Button style={styles.buttonProfile}
            disabled={loading || !photo}
            title="SAVE" 
            onPress={handleNewProfile}
    />
        
      </View>
    </View>
  );
}
export default EditProfileScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    bio: {
      fontSize: 16,
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    filecontainer: {

    },
    valuebox: {
      backgroundColor: "#EFF0F2",
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      width: 300,
      marginBottom: 10,
      
    },
    attribute: {
      font: "Poppins",
      fontSize: 15,
      fontWeight: 500,
      textAlign: 'left',
      marginBottom: 3,
    },
    attributeval: {
      font: "Poppins",
      fontSize: 15,
      fontWeight: 300,
      textAlign: 'left',
    },
    biodata: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'right',
    },
    buttonProfile: {
      backgroundColor: "#85586F",
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      width: 300,
    }

  });