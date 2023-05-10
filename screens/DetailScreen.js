import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Image, 
    SafeAreaView,
    FlatList,
    ScrollView,
    Button,
  } from 'react-native'
import popularData from '../assets/Data/popularData';
import { color } from 'react-native-reanimated';


const DetailScreen = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    return (
        <View>
          <ScrollView        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.container} key={item.id}>
        <Image
          style={styles.profilePic}
          source={item.image}
        />
        <Text style={styles.name}></Text>
        <View style={styles.biodata}>
            <Text style={styles.attribute}>
            Nama
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              {item.name}
              </Text>
            </View>

            <Text style={styles.attribute}>
            Umur
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              {item.age}
            </Text>
            </View>

            <Text style={styles.attribute}>
            Asal Daerah
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              {item.region}
            </Text>
            </View>


            <Text style={styles.attribute}>
            Profesi
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              {item.profesi}
            </Text>
            </View>

            <Text style={styles.attribute}>
            Deskripsi
            </Text>
            <View style={styles.valuebox}>
              <Text style={styles.attributeval}>
              {item.deskripsi}
            </Text>
            </View>
          
        </View>
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => navigation.navigate('Request Sent', { item: item })}
        >
          <Text style={styles.buttonText}>Ajukan Taaruf</Text>
        </TouchableOpacity>

       
      </View>
      </ScrollView>
    </View>
    )};

export default DetailScreen
const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  detailButton: {
    backgroundColor: "#85586F",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
    marginRight: 5,
    marginTop: 10
  },
  detailButtonBack: {
    backgroundColor: "#D8CBBB",
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
    marginRight: 5,
  },
  buttonTextBack: {
    color: '#6E485B',
    fontWeight: '500',
    fontSize: 14,
  },
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
      marginTop: 10,
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
  });
