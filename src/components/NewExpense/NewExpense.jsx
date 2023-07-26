import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const expenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      amount: +expenseData.amount,
      date: new Date(expenseData.date),
      id: Math.random().toString()
    };
    props.onAddExpense(data);
    setIsEditing(false)
  }
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onExpenseData={expenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;