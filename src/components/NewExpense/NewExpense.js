import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showHideNewExpense, setShowHideNewExpense] = useState(false);

  const setShowHideNewExpenseHandler = () => {
    setShowHideNewExpense(!showHideNewExpense);
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
        <button onClick={setShowHideNewExpenseHandler}>Add New Expense</button>
      )}
      {showHideNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          show={showHideNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
