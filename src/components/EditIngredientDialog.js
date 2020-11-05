import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/AntDesign';

export const EditIngredientDialog = ({model, controller}) => {
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
    <View>
      <Dialog
        visible={editModalVisible}
        onTouchOutside={() => setEditModalVisible(false)}
        animationType="slide"
        dialogStyle={styles.dialog}
        keyboardShouldPersistTaps="always">
        <View>
          <View>
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
            <Icon.Button
              name="check"
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
              <Text style={styles.buttonText}>{t('save_ingredient')}</Text>
            </Icon.Button>
            <Icon.Button
              name="delete"
              style={styles.negativeButtonStyle}
              onPress={() => {
                setEditModalVisible(false);
                removeIngredientTouchable(recipe.id, ingredient.id);
              }}>
              <Text style={styles.buttonText}>{t('delete_ingredient')}</Text>
            </Icon.Button>
          </View>
        </View>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 20,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  positiveButtonStyle: {
    backgroundColor: '#499A5E',
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
  negativeButtonStyle: {
    backgroundColor: '#D83B31',
    justifyContent: 'center',
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
    paddingLeft: 15,
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
    marginBottom: 15,
  },
  touchableWrapper: {
    backgroundColor: '#DF5C12',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    borderRadius: 15,
    marginVertical: 10,
  },
});
