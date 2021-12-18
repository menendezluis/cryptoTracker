import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import GraphCoin from "../GraphCoin";



const CoinItem = ({ coin }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
     <Modal
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        pageSheet   ={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{coin.name}</Text>
            <View>
            <GraphCoin coin={coin} />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setModalVisible(true)}
      >
      
        <View style={styles.containerItem}>
          <View style={styles.coinName}>
            <Image style={styles.image} source={{ uri: coin.image }} />
            <View style={styles.containerNames}>
              <Text style={styles.text}>{coin.name}</Text>
              <Text style={styles.textSymbol}>{coin.symbol}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textPrice}>${coin.current_price}</Text>
            <Text
              style={[
                styles.pricePercentage,
                coin.price_change_percentage_24h > 0
                  ? styles.priceUp
                  : styles.priceDown,
              ]}
            >
              %{coin.price_change_percentage_24h}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      
    </>
  );
};

const styles = StyleSheet.create({
  coinName: {
    flexDirection: "row",
  },
  containerItem: {
    backgroundColor: "#fcfeff",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  containerNames: {
    marginLeft: 10,
  },
  text: {
    color: "#fa0",
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  image: {
    width: 30,
    height: 30,
  },
  pricePercentage: {
    textAlign: "right",
  },
  textPrice: {
    color: "#222",
    textAlign: "right",
  },
  priceUp: {
    color: "#2ecc71",
  },
  priceDown: {
    color: "#fc4422",
  },
  touchable: {
    borderRadius: 10,
    borderWidth: .5,
    borderStyle: "solid",
    borderColor: "#ef3340",
    backgroundColor: "#fcfeff",
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: "100%",
    height: "100%",
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CoinItem;
