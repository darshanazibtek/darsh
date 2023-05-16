import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ExpenseItem from './ExpenseItem';

const renderExpenseData = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpenseList = ({expenses}) => {
  console.log(`expenses:`, expenses);
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseData}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ExpenseList;
