import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import Icon from 'react-native-vector-icons/AntDesign';

export const AddIngredientDialog = ({model, controller}) => {
  const [visible, setVisible] = useState(false);

  const [ingredientName, setIngredientName] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState('');
  const [ingredientUnit, setIngredientUnit] = useState('');

  const {t} = model;
  const {addIngredientButton} = controller;

  return (
    <View>
      <Dialog
        visible={visible}
        onTouchOutside={() => setVisible(false)}
        animationType="slide"
        dialogStyle={styles.dialog}
        keyboardShouldPersistTaps="always">
        <View>
          <View>
            <Text style={styles.newIngredientDialog}>
              {t('new_ingredient')}
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
                value={ingredientAmount}
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
              name="pluscircleo"
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
              }}>
              <Text style={styles.buttonText}>
                {t('add_ingredient_button')}
              </Text>
            </Icon.Button>
            <Icon.Button
              name="closecircleo"
              style={styles.negativeButtonStyle}
              onPress={() => setVisible(false)}>
              <Text style={styles.buttonText}>{t('alert_cancel')}</Text>
            </Icon.Button>
          </View>
        </View>
      </Dialog>
      <TouchableOpacity
        style={styles.touchableWrapper}
        onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('add_ingredients_dialog')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {
    borderRadius: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positiveButtonStyle: {
    backgroundColor: '#499A5E',
    paddingHorizontal: 20,
    // borderRadius: 20,
  },
  negativeButtonStyle: {
    backgroundColor: '#D83B31',
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
    // paddingLeft: 15,
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
