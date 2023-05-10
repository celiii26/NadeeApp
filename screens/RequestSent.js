import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, 
  SafeAreaView,
  FlatList, Alert,
  ScrollView,
  Button,
} from 'react-native'
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf'
import { useFonts } from '@use-expo/font';

const RequestSent = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation()
  const [isLoaded] = useFonts({
    PoppinsLight: PoppinsLight,
  });

  if (!isLoaded) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10}}> Permintaan Taaruf Telah Terkirim. </Text>
    <TouchableOpacity
    key={item.id}
    onPress={() =>
      navigation.navigate('DetailScreen', {
        item: item,
      })
    }>
    <View
      style={[
        styles.popularCardWrapper,
        {
          marginTop: item.id == 1 ? 10 : 20,
        },
      ]}>
      <View>
        <View>
          <View style={styles.popularTitlesWrapper}>

            <Text style={styles.popularTitlesTitle}>
              {item.name}
            </Text>
            <Text style={styles.popularTitlesTitle}>
              {item.age} tahun  
            </Text>
            <Text style={styles.popularTitlesTitle}>
              {item.profesi}
            </Text>
            <Text style={styles.popularTitlesTitle}>
              {item.domisili}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.popularCardRight}>
        <Image source={item.image} style={styles.popularCardImage} />
      </View>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('Progress')}>
    <Text style={styles.buttonText}>
      Lihat Progress
      </Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.detailButtonBack} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTextBack}>Batalkan Taaruf</Text>
      </TouchableOpacity>
  </View>
  );

}
export default RequestSent;
const styles = StyleSheet.create({
  detailButtonBack: {
    backgroundColor: "#F5F5F5",
    borderColor: '#6E485B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10,
    marginRight: 5,
    marginTop:10,
  },
  buttonTextBack: {
    color: '#6E485B',
    fontWeight: '500',
    fontSize: 14,
  },
    buttonCancel: {
      backgroundColor: '#D81818',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      color: '#FFFFF'
    },
    detailButton: {
        backgroundColor: "#85586F",
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: 10,
      },
    buttonProfile: {
      backgroundColor: '#85586F',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
  
    },
    container: {
      flex: 1,
      backgroundColor: '#D8CBBB',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 98,
      height: 94,
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 14,
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
    titlesSubtitle: {
      fontFamily: 'arial',
      fontSize: 16,
      color: 'black',
    },
    titlesTitle: {
      fontFamily: 'arial',
      fontSize: 32,
      color: 'black',
      marginTop: 5,
    },
    searchWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 30,
    },
    search: {
      flex: 1,
      marginLeft: 10,
      borderBottomColor: "white",
      borderBottomWidth: 2,
    },
    searchText: {
      fontFamily: 'arial',
      fontSize: 14,
      marginBottom: 5,
      color: "black",
    },
    
    popularWrapper: {
      paddingHorizontal: 20,
    },
    popularTitle: {
      fontFamily: 'arial',
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
    popularTopText: {
      marginLeft: 10,
      fontFamily: 'arial',
      fontSize: 14,
    },
    popularTitlesWrapper: {
      marginTop: 10,
      flexDirection: 'column',
    },
    popularTitlesTitle: {
      fontFamily: 'PoppinsLight',
      fontSize: 12,
      color: 'black',
      flexDirection: 'column',
    },
    popularCardBottom: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 5,
    },

    buttonName: {
      color: "#F5F5F5",
      fontSize: 12,
      fontFamily: 'arial',
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 20,
    },
    rating: {
      fontFamily: 'arial',
      fontSize: 12,
      color: 'black',
      marginLeft: 5,
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
    asalDaerah: {
      fontFamily: 'arial',
      fontSize: 12,
      color: 'black',
      flexDirection: 'column',
    }
  })


