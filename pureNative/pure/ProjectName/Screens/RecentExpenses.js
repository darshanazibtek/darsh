import React from 'react';
import {View, Text} from 'react-native';
import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {useExpenseData} from '../Store/ExpenseContext';
import {minusDays} from '../Util/Date';

const RecentExpenses = () => {
  const {expenses} = useExpenseData();

  console.log('exp', expenses);

  const RecentExpenses = expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = minusDays(today, 7);
    console.log(`${expense.date} > ${date7DaysAgo}`);
    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <View>
      <ExpensesOutput
        expenses={RecentExpenses}
        expensesPeriod="Last 7 days"
        fallbackText="No Expenses"
      />
    </View>
  );
};

export default RecentExpenses;
