import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from '../utils/common/localisation';

export const ServingsDropDown = ({servings, setServings}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.servings}>
      <Text style={styles.text}>{t('numberOfServings') + ':'}</Text>
      <DropDownPicker
        items={[
          {
            label: '1',
            value: '1',
          },
          {
            label: '2',
            value: '2',
          },
          {
            label: '3',
            value: '3',
          },
          {
            label: '4',
            value: '4',
          },
          {
            label: '5',
            value: '5',
          },
          {
            label: '6',
            value: '6',
          },
          {
            label: '7',
            value: '7',
          },
          {
            label: '8',
            value: '8',
          },
          {
            label: '9',
            value: '9',
          },
          {
            label: '10',
            value: '10',
          },
        ]}
        defaultValue={servings}
        containerStyle={styles.dropDownContainer}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        labelStyle={{fontSize: 18}}
        onChangeItem={(item) => setServings(item.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownContainer: {
    height: 40,
    width: 60,
    alignSelf: 'flex-end',
  },
  servings: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    marginRight: 3,
  },
});
