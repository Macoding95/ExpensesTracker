import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterExpenseHandler = (yearData) => {
    setFilteredYear(yearData);
  }

  const filteredExpenses = props.expenses.filter(element => element.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSwitchYear={filterExpenseHandler}
          selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses;