import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddIngredientModal = ({model, controller}) => {
  const [visible, setVisible] = useState(false);

  const [ingredientName, setIngredientName] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');

  const inputOne = useRef(null);

  const {t} = model;
  const {addIngredientButton} = controller;

  return (
    <View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={styles.centeredView}>
            <TouchableWithoutFeedback
              onPress={() => {}}
              touchSoundDisabled={true}>
              <View style={styles.modalView}>
                <View style={{marginHorizontal: 10}}>
                  <Text style={styles.newIngredientDialog}>
                    {t('new_ingredient')}
                  </Text>
                  <TextInput
                    style={styles.nameInput}
                    placeholder={t('ingredient_name')}
                    value={ingredientName}
                    onChangeText={(text) => setIngredientName(text)}
                    maxLength={25}
                    // autoFocus={true}
                    ref={inputOne}
                  />
                  <View style={styles.wrapper}>
                    <TextInput
                      style={styles.amountInput}
                      placeholder={t('ingredient_amount')}
                      value={String(ingredientAmount)}
                      onChangeText={(text) => setIngredientAmount(text)}
                      keyboardType="numeric"
                      maxLength={6}
                    />
                    <TextInput
                      style={styles.amountInput}
                      placeholder={t('ingredient_unit')}
                      value={ingredientUnit}
                      onChangeText={(text) => setIngredientUnit(text)}
                      maxLength={10}
                    />
                  </View>
                </View>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    style={styles.positiveButtonStyle}
                    onPress={() => {
                      addIngredientButton(
                        ingredientName,
                        ingredientAmount,
                        ingredientUnit,
                      );
                      setIngredientName('');
                      setIngredientAmount('');
                      setIngredientUnit('');
                      setVisible(false);
                    }}>
                    <Icon name="pluscircleo" size={20} style={{color: '#fff'}}>
                      <Text>{t('add_ingredient_button')}</Text>
                    </Icon>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.negativeButtonStyle}
                    onPress={() => {
                      setVisible(false);
                    }}>
                    <Icon name="closecircleo" size={20} style={{color: '#fff'}}>
                      <Text>{t('alert_cancel')}</Text>
                    </Icon>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.touchableWrapper}
        onPress={() => {
          setVisible(true);
          setTimeout(() => {
            inputOne.current.focus();
          }, 500);
        }}>
        <Text style={styles.buttonText}>{t('add_ingredients_dialog')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    // width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    borderWidth: 4,
    borderRadius: 15,
    borderColor: 'rgba(243, 82, 39, 0.7)',
    width: '100%',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  amountInput: {
    borderWidth: 4,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: 'rgba(243, 82, 39, 0.7)',
    width: '49%',
    paddingLeft: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  newIngredientDialog: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  positiveButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#499A5E',
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    width: '60%',
    padding: 10,
  },
  negativeButtonStyle: {
    justifyContent: 'center',
    backgroundColor: '#D83B31',
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    width: '40%',
    padding: 10,
  },
  touchableWrapper: {
    backgroundColor: '#DF5C12',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    marginLeft: '30%',
  },
});
