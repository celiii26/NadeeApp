import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{ uri: 'https://dummyimage.com/300x300/000/fff' }}
        />
        <Text style={styles.name}></Text>
        <View style={styles.biodata}>
            <Text style={styles.attribute}>
            Nama
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
            Budi Aselole
              </Text>
            </View>

            <Text style={styles.attribute}>
            Umur
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
            26
            </Text>
            </View>

            <Text style={styles.attribute}>
            Asal Daerah
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
            Surabaya, Jawa Timur
            </Text>
            </View>


            <Text style={styles.attribute}>
            Profesi
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
            Software Engineer
            </Text>
            </View>

            <Text style={styles.attribute}>
            Deskripsi
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              Saya adalah seorang pekerja keras yang sangat menghargai wanita. Saya mencari pasangan hidup yang mengerti agama dan mengerti saya.
            </Text>
            </View>
            <Button style={styles.buttonProfile}
        title="SAVE" 
      />
          

        </View>
      </View>
    );
}
export default ProfileScreen
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