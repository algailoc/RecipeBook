import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const RecipeLoader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color="#F35227" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
