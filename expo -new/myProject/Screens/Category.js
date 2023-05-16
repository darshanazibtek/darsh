import React from 'react';
import { View , FlatList, Text} from 'react-native';
import { CATEGORIES } from '../Data/DummyData';

const Category = () => {
  return (
      <View>
          <FlatList data={CATEGORIES} renderItem={({ item }) => {
              console.log(item);
          } } />
    </View>
  )
}

export default Category