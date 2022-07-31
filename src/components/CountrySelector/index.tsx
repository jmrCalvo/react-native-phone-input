import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { FlagImage } from '../FlagImage';
import countries from '../../data/countries.json';

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: Dimensions.get('screen').height * 0.8,
    width: Dimensions.get('screen').width * 0.8,
    top: Dimensions.get('screen').height * 0.1,
    left: Dimensions.get('screen').width * 0.1,
  },
  itemCountry: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryCode: {
    fontSize: 20,
    marginLeft: 10,
  },
  itemCountryText: {
    fontSize: 20,
    flex: 0.6,
  },
  visualInformation: {
    flexDirection: 'row',
    flex: 0.3,
    alignItems: 'center',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backgroundModal: {
    backgroundColor: '#9e9e9ea7',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  searchInput: {
    borderColor: '#9d9d9d',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export const CountrySelector = ({
  setModalVisible,
  modalVisible,
  setSelectedCountry,
}: any) => {
  const [modalCountries, setCountries] = useState(countries);

  const searchCountry = (countryName: string) => {
    const countriesSearched = countries.filter((country) =>
      country.country_name.includes(countryName)
    );
    setCountries(countriesSearched);
  };

  useEffect(() => {
    setCountries(countries);
  }, [modalVisible]);

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          setModalVisible(false);
          setSelectedCountry(item.flag);
        }}
      >
        <View style={styles.itemCountry}>
          <View style={styles.visualInformation}>
            <FlagImage flagCode={item.flag} />
          </View>
          <Text style={styles.itemCountryText}>{item.country_name}</Text>
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <>
          <TouchableOpacity
            style={styles.backgroundModal}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalView}>
            <TextInput
              style={styles.searchInput}
              onChangeText={searchCountry}
              placeholder="search your country"
            />
            <ScrollView>
              {modalCountries.map((country: any) => renderItem(country))}
            </ScrollView>
          </View>
        </>
      </Modal>
    </>
  );
};

export default CountrySelector;
