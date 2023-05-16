import React from 'react';
import {createContext, useReducer, useContext, useEffect} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';

const Dummy_Expenses = [
  {
    id: 'e1',
    description: 'Rent',
    amount: 6000,
    date: new Date('2023-1-1'),
  },
  {
    id: 'e2',
    description: 'FlipkartPaylater',
    amount: 11000,
    date: new Date('2023-1-5'),
  },
  {
    id: 'e3',
    description: 'Travel',
    amount: 1800,
    date: new Date('2023-1-15'),
  },
  {
    id: 'e4',
    description: 'Food',
    amount: 1000,
    date: new Date('2023-1-15'),
  },
  {
    id: 'e5',
    description: 'Tea',
    amount: 1000,
    date: new Date('2023-2-5'),
  },
  {
    id: 'e6',
    description: 'Clothes',
    amount: 1800,
    date: new Date('2023-2-15'),
  },
  {
    id: 'e7',
    description: 'Recharge',
    amount: 1000,
    date: new Date('2023-3-25'),
  },
  {
    id: 'e8',
    description: 'ElectricityBill',
    amount: 300,
    date: new Date('2023-3-25'),
  },
  {
    id: 'e9',
    description: 'Health',
    amount: 1000,
    date: new Date('2023-3-28'),
  },
];

export const ExpenseContext = createContext();

const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case 'addExpense':
      const newExpense = {...action.payload};
      // Generate a new ID only if this is a new expense
      if (!newExpense.id) {
        newExpense.id = new Date().toString() + Math.random().toString();
      }
      return [newExpense, ...state];
    case 'deleteExpense':
      return state.filter(expense => expense.id !== action.payload);
    case 'updateExpense':
      const updateableExpenseIndex = state.findIndex(
        expense => expense.id == action.payload.id,
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = {
        ...updateableExpense,
        ...action.payload.data,
      };
      const updateExpenses = [...state];
      updateExpenses[updateableExpenseIndex] = updatedItem;
      return updateExpenses;
    case 'loadExpense':
      return action.payload.map(expense => ({
        ...expense,
        id: new Date().toString() + Math.random().toString(),
      }));
    default:
      return state;
  }
};

const ExpenseContextProvider = ({children}) => {
  const [ExpenseState, dispatch] = useReducer(ExpenseReducer, []);

  function addExpense(expenseData) {
    dispatch({type: 'addExpense', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'deleteExpense', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: 'updateExpense',
      payload: {id: id, data: expenseData},
    });
  }

  useEffect(() => {
    // Load data from AsyncStorage when the component mounts
    AsyncStorage.getItem('myData')
      .then(ExpenseState => {
        if (ExpenseState !== null) {
          // Fix the typo here
          dispatch({
            type: 'loadExpense',
            payload: JSON.parse(ExpenseState),
          });
          console.log('My stored data:', ExpenseState);
        }
      })
      .catch(error => {
        console.log('Error retrieving data: ', error);
      });
  }, []);

  useEffect(() => {
    // Save data to AsyncStorage when the data changes
    AsyncStorage.setItem('myData', JSON.stringify(ExpenseState)).catch(
      error => {
        console.log('Error saving data: ', error);
      },
    );
  }, [ExpenseState]);

  AsyncStorage.getItem('myData')
    .then(data => {
      console.log('My stored data:', data);
    })
    .catch(error => {
      console.log('Error retrieving data:', error);
    });

  const value = {
    expenses: ExpenseState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  console.log(`val`, value);

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;

export const useExpenseData = () => useContext(ExpenseContext);
