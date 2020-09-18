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

  const {t} = model;
  const {addIngredientButton} = controller;

  return (
    <View>
      <Dialog
        visible={visible}
        onTouchOutside={() => setVisible(false)}
        animationType="slide"
        dialogStyle={styles.dialog}>
        <View>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.nameInput}
              placeholder={t('ingredient_name')}
              value={ingredientName}
              onChangeText={(text) => setIngredientName(text)}
            />
            <TextInput
              style={styles.amountInput}
              placeholder={t('ingredient_amount')}
              value={ingredientAmount}
              onChangeText={(text) => setIngredientAmount(text)}
            />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Icon.Button
              name="pluscircleo"
              style={{backgroundColor: '#73C1A7'}}
              onPress={() => {
                addIngredientButton(ingredientName, ingredientAmount);
                setIngredientName('');
                setIngredientAmount('');
              }}>
              <Text style={styles.buttonText}>
                {t('add_ingredient_button')}
              </Text>
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
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameInput: {
    borderWidth: 4,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#A5F7DB',
    width: '60%',
    paddingLeft: 15,
    fontSize: 18,
  },
  amountInput: {
    borderWidth: 4,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#A5F7DB',
    width: '37%',
    paddingLeft: 15,
    fontSize: 18,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  touchableWrapper: {
    backgroundColor: '#73C1A7',
    height: 50,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    borderRadius: 50,
    marginVertical: 10,
  },
});
