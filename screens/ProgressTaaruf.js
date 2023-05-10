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
import popularData from '../assets/Data/popularData';
import { useFonts } from '@use-expo/font';
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf'

const ProgressTaaruf = () => {
  const navigation = useNavigation()

  const [isLoaded] = useFonts({
    PoppinsLight: PoppinsLight,
  });

  if (!isLoaded) {
    return <View />;
  }
  const handleSignOut = () => {
      signOut(auth)
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.cardheader}>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        
      <View style={styles.popularWrapper}>


        <View
          style={styles.popularCardWrapper}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.tanggal}>7 Mei 2023</Text>
                <Text style={styles.popularTitlesTitle}>Permintaan taaruf sedang diproses.</Text>
              </View>
          
        </View>
        <View
          style={styles.popularCardWrapper}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.tanggal}>10 Mei 2023</Text>
                <Text style={styles.popularTitlesTitle}>Permintaan taaruf diterima.</Text>
              </View>
          
        </View>
        <View
          style={styles.popularCardWrapper}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.tanggal}>13 Mei 2023</Text>
                <Text style={styles.popularTitlesTitle}>Sedang dialokasikan pendamping taaruf.</Text>
              </View>
          
        </View>
        <View
          style={styles.popularCardWrapper}
        >
          
              <View style={styles.popularTitlesWrapper}>
                <Text style={styles.tanggal}>14 Mei 2023</Text>
                <Text style={styles.popularTitlesTitle}>Pendamping taaruf (Iwan: 0899999999) telah menghubungi anda melalui WhatsApp.</Text>
              </View>
          
        </View>

        </View>
        </ScrollView>
      
    </View>
  )
}

export default ProgressTaaruf

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
    fontFamily: 'arial',
    fontSize: 32,
    color: 'black',
    marginTop: 5,
  },
  
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'arial',
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTitlesWrapper: {
    flexDirection: 'column',
  },
  popularTitlesTitle: {
    fontFamily: 'PoppinsLight',
    fontSize: 10,
    color: 'black',
    flexDirection: 'column',
  },
  tanggal: {
    fontFamily: 'PoppinsLight',
    fontSize: 10,
    color: '#6E485B',
    flexDirection: 'column',
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
    resizeMode: 'contain',
    position: 'abosulte',
    borderRadius: 75,
    marginRight:15,

  },
})