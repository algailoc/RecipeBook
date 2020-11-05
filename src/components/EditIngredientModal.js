import React, {useEffect, useState} from 'react';
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

export const EditIngredientModal = ({model, controller}) => {
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');
  const [ingredient, setIngredient] = useState({});

  const {
    t,
    editModalVisible,
    setEditModalVisible,
    currentIngredient,
    recipe,
  } = model;
  const {removeIngredientTouchable, editIngredientButton} = controller;

  useEffect(() => {
    setIngredient(currentIngredient);
    if (ingredient !== undefined) {
      setIngredientName(ingredient.name);
      if (ingredient.amount !== null && ingredient.amount !== undefined) {
        setIngredientAmount(ingredient.amount);
      }
      setIngredientUnit(ingredient.unit);
    }
  }, [currentIngredient, ingredient]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}>
        <TouchableOpacity
          onPress={() => {
            setEditModalVisible(false);
          }}
          style={styles.centeredView}>
          <TouchableWithoutFeedback
            onPress={() => {}}
            touchSoundDisabled={true}>
            <View style={styles.modalView}>
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.newIngredientDialog}>
                  {t('edit_ingredient')}
                </Text>
                <TextInput
                  style={styles.nameInput}
                  placeholder={t('ingredient_name')}
                  value={ingredientName}
                  onChangeText={(text) => setIngredientName(text)}
                  maxLength={25}
                  autoFocus={true}
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
                    setIngredient(
                      ingredient.id,
                      ingredient.recipeId,
                      (ingredient.name = ingredientName),
                      (ingredient.amount = ingredientAmount),
                      (ingredient.unit = ingredientUnit),
                    );
                    editIngredientButton({
                      ingredient,
                    });
                    setEditModalVisible(false);
                  }}>
                  <Icon name="check" size={20} style={{color: '#fff'}}>
                    <Text>{t('save_ingredient')}</Text>
                  </Icon>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.negativeButtonStyle}
                  onPress={() => {
                    setEditModalVisible(false);
                    removeIngredientTouchable(recipe.id, ingredient.id);
                  }}>
                  <Icon name="delete" size={20} style={{color: '#fff'}}>
                    <Text>{t('delete_ingredient')}</Text>
                  </Icon>
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
});
