import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {GlobalStyles} from '../../Constants/Styles';
import {getFormattedDate} from '../../Util/Date';

const ExpenseItem = ({id, description, amount, date}) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate('ManageExpense', {
      expenseId: id,
    });
  };
  console.log(date);
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>
            {getFormattedDate(new Date(date))}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    backgroundColor: GlobalStyles.colors.primary200,
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 10,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 17,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 100,
  },
  amount: {
    color: GlobalStyles.colors.accent500,
    fontWeight: 'bold',
  },
});
