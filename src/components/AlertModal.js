import React from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export const AlertModal = ({model, removeOptional, textProp}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={model.modalVisible}>
        <TouchableOpacity
          onPress={() => {
            model.setModalVisible(false);
          }}
          style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={() => {}}
            touchSoundDisabled={true}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{textProp}</Text>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  style={{
                    ...styles.openButton,
                    backgroundColor: '#F0EBEA',
                    borderBottomLeftRadius: 20,
                  }}
                  onPress={() => {
                    model.setModalVisible(!model.modalVisible);
                  }}>
                  <Text style={{...styles.textStyle, color: 'black'}}>
                    {model.t('alert_cancel')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.openButton,
                    backgroundColor: '#D83B31',
                    borderBottomRightRadius: 20,
                  }}
                  onPress={() => {
                    model.navigation.goBack();
                    model.setModalVisible(!model.modalVisible);
                    removeOptional();
                  }}>
                  <Text style={{...styles.textStyle, color: 'white'}}>
                    {model.t('alert_confirm')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    padding: 10,
    elevation: 2,
    width: '50%',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
});
