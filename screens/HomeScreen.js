import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, 
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from '@use-expo/font';
import { useEffect, useState } from "react";
import { onSnapshot, collection, getDoc } from "firebase/firestore";
import db from '../firebase'
import { auth, useAuth} from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation()
  const currentUser = useAuth();
  const [data, setData] = useState([{ name: "Loading...", id: "initial" }]);
  const [filteredDataP, setFilteredDataP] = useState([]);
  const [filteredDataL, setFilteredDataL] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'dataBaru'), (snapshot) => {
      const allData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
  
      const filteredDataL = allData.filter((item) => item.gender === 'Laki-laki');
      setFilteredDataL(filteredDataL);
  
      const filteredDataP = allData.filter((item) => item.gender === 'Perempuan');
      setFilteredDataP(filteredDataP);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  

  
  return (

    <View style={styles.container}>
      <View style={styles.cardheader}>
      </View>

      <ScrollView

        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() =>
                    navigation.navigate('EdukasiTaaruf')
                  }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Edukasi Taaruf</Text>
        </TouchableOpacity></View>
        <Text style={styles.jenisGender}>
          Akhwat (Perempuan)
        </Text>
      <View style={styles.popularWrapper}>
          {filteredDataP.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate('DetailScreen', {
            item: item,
          })
        }
      >
        <View
          style={[
            styles.popularCardWrapper,
            {
              marginTop: item.id == 1 ? 10 : 20,
            },
          ]}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.popularTitlesTitle}>{item.name}</Text>
                <Text style={styles.popularTitlesTitle}>{item.age} tahun</Text>
                <Text style={styles.popularTitlesTitle}>{item.profesi}</Text>
                <Text style={styles.popularTitlesTitle}>{item.domisili}</Text>
              </View>
          

          <View style={styles.popularCardRight}>
            <Image source={{ uri : item.photoURL }} style={styles.popularCardImage} />
          </View>
        </View>
      </TouchableOpacity>
    ))}

        </View>
        <Text style={styles.jenisGender}>
          Ikhwan (Laki-laki)
        </Text>
        <View style={styles.popularWrapper}>
          {filteredDataL.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={() =>
          navigation.navigate('DetailScreen', {
            item: item,
          })
        }
      >
        <View
          style={[
            styles.popularCardWrapper,
            {
              marginTop: item.id == 1 ? 10 : 20,
            },
          ]}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.popularTitlesTitle}>{item.name}</Text>
                <Text style={styles.popularTitlesTitle}>{item.age} tahun</Text>
                <Text style={styles.popularTitlesTitle}>{item.profesi}</Text>
                <Text style={styles.popularTitlesTitle}>{item.domisili}</Text>
              </View>
          

          <View style={styles.popularCardRight}>
            <Image source={{ uri : item.photoURL }} style={styles.popularCardImage} />
          </View>
        </View>
      </TouchableOpacity>
    ))}

        </View>

        </ScrollView>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8CBBB',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardheader: {
    flexDirection:'row' ,
    justifyContent: 'space-between',
   },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesTitle: {
    fontSize: 32,
    color: 'black',
    marginTop: 5,
  },
  
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: 'white',
    width: 250,
    height: 130,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    position: 'relative'
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTitlesWrapper: {
    marginTop: 10,
    flexDirection: 'column',
  },
  popularTitlesTitle: {
    fontSize: 10,
    color: 'black',
    flexDirection: 'column',
  },
  jenisGender: {
    color: '#6E485B',
    fontWeight: '700',
    fontSize: 20,
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  popularCardRight: {
    position: 'absolute', // Set the position property to 'absolute'
    right: 5, // Align the image to the right of the card
    top: 20, // Align the image to the top of the card
    bottom: 0, // Align the image to the bottom of the card// Set the width of the image to half of the card's width
    overflow: 'hidden',
  },
  popularCardImage: {
    width: 90,
    height: 90,
    borderRadius: 75,
    marginRight:15,

  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    width: 300,
  },
  button: {
    backgroundColor: '#85586F',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#85586F',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#85586F',
    fontWeight: '700',
    fontSize: 16,
  },
})