import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showHideNewExpense, setShowHideNewExpense] = useState(false);

  const setShowHideNewExpenseHandler = () => {
    setShowHideNewExpense(true);
  };

  const setShowHide = () => {
      return setShowHideNewExpense(!showHideNewExpense);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense" onLoad={setShowHideNewExpenseHandler}>
      {!showHideNewExpense && (
        <button onClick={setShowHide}>Add New Expense</button>
      )}
      {showHideNewExpense && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
