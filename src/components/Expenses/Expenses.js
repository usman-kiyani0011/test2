import "./Expenses.css";
import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = () => {

  const expense = [
    {
      id: 1,
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2021, 4, 22),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 5, 2),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2020, 7, 14),
    },
  ];

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expense.map((el, index) => (
        <Expenseitem
          title={expense[index].title}
          amount={expense[index].amount}
          date={expense[index].date}
          key={el.id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
