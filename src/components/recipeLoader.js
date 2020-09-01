import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const RecipeLoader = ({styles}) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="#F35227" size="large" />
    </View>
  );
};
