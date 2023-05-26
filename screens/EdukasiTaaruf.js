import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EdukasiTaaruf = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tata Cara Taaruf dengan Nadee
      </Text>
      <Text style={styles.numberedText}>
        1. Daftarkan akun Nadee
      </Text>
      <Text style={styles.numberedText}>
        2. Lengkapi Profile Anda
      </Text>
      <Text style={styles.numberedText}>
        3. Buka laman Home untuk melihat calon pasangan taaruf yang bisa Anda pilih
      </Text>
      <Text style={styles.numberedText}>
        4. Ajukan Taaruf pada seseorang yang Anda ingin kenali
      </Text>
      <Text style={styles.numberedText}>
        5. Tunggu admin untuk mengalokasikan perantara taaruf untuk Anda
      </Text>
      <Text style={styles.numberedText}>
        6. Anda juga dapat melihat progress kegiatan taaruf Anda
      </Text>
      <Text style={styles.numberedText}>
        7. Anda bisa membatalkan pengajuan taaruf selama calon yang Anda pilih belum menerima Anda
      </Text>
      <Text>
      </Text>
      <Text>
      </Text>
      <Text style={styles.text}>
        Keunggulan Taaruf
      </Text>
      <Text style={styles.numberedText}>
        1. Kita bisa berusaha mengenal calon dan mengumpulkan informasi sebanyak-banyaknya dalam waktu yang sesingkat-singkatnya.
      </Text>
      <Text style={styles.numberedText}>
        2. Melalui ta’aruf kita boleh mengajukan kriteria calon yang kita inginkan
      </Text>
      <Text style={styles.numberedText}>
        3. Kalau memang ada kecocokan, biasanya jangka waktu taaruf ke khitbah (lamaran) dan ke akad nikah tidak terlalu lama
      </Text>
      <Text style={styles.numberedText}>
        4. Dalam taaruf, tetap dijaga adab berhubungan antara laki-laki dan perempuan
      </Text>
      <Text style={styles.numberedText}>
        5. Menghindari kemaksiatan yang tidak disukai Allah SWT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  numberedText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EdukasiTaaruf;