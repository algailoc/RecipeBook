import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const RecipeScreenView = ({model, styles}) => {
  const {ingredients, steps, t} = model;

  return (
    <ScrollView>
      <Text style={styles.section}>{t('ingredients_list')}</Text>
      <View>
        {ingredients.map((item, index) => {
          return (
            <View key={index} style={styles.items}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAmount}>{item.amount}</Text>
            </View>
          );
        })}
      </View>
      <Text style={styles.section}>{t('recipe_description')}</Text>
      <Text style={styles.steps}>{steps}</Text>
    </ScrollView>
  );
};

export default RecipeScreenView;
