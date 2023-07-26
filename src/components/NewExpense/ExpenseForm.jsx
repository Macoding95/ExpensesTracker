import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onExpenseData(form);
    setForm({
      title: '',
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm(prevState => ({ ...prevState, title: e.target.value }))}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={(e) => setForm(prevState => ({ ...prevState, amount: e.target.value }))}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={form.date}
            onChange={(e) => setForm(prevState => ({ ...prevState, date: e.target.value }))}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;