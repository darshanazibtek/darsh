import React from 'react';
import { View , FlatList, Text} from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile';
import { CATEGORIES } from '../Data/DummyData';

const Category = () => {

  function renderCategoryItem(item) {
    return <CategoryGridTile/> 
    
  }
  return (
      <View>
      <FlatList data={CATEGORIES}
        keyExtractor={(item)=> item.id}
        renderItem={renderCategoryItem} />
    </View>
  )
}

export default Category