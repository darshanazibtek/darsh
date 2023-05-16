import React from 'react';
import {View, Text} from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {useExpenseData} from '../Store/ExpenseContext';

const AllExpenses = () => {
  const {expenses} = useExpenseData();
  console.log('exp', expenses);
  return (
    <View>
      <ExpensesOutput
        expensesPeriod="Total"
        expenses={expenses}
        fallbackText="No Expenses"
      />
    </View>
  );
};

export default AllExpenses;
