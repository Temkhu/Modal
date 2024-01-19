import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  return (

    <View style={styles.container}>
      <StatusBar
        translucent={true}
      />
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
      <Modal
        transparent={false}
        visible={modalVisible}
        animationType='none'
        statusBarTranslucent={false}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centered}>
          <Text style={styles.text}>This is modal...</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '80%',
    marginTop: '60%',
    borderWidth: 0,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    paddingTop: '10%',
    fontSize: 25,
  },
  close: {
    fontSize: 25,
    paddingBottom: '10%',
    fontWeight: 'bold',
  },
});
