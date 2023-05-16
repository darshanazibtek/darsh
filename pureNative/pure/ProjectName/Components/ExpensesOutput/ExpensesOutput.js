import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../Constants/Styles';
import {useExpenseData} from '../../Store/ExpenseContext';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

const ExpensesOutput = ({expenses, expensesPeriod, fallbackText}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} periodName={expensesPeriod} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100,
    backgroundColor: GlobalStyles.colors.primary700,
  },

  infoText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 32,
    fontWeight: 'bold',
  },
});
