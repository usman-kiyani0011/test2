import { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls row">
                <div className="new-expense__control col">
                    <label>Title</label>
                    <input className='form-control' value={enteredTitle} type="text" onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control col">
                    <label>Amount</label>
                    <input className='form-control' value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control col">
                    <label>Date</label>
                    <input className='form-control' value={enteredDate} type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} required />
                    </div>
                </div>
            <div className="new-expense__actions">
                    <button className='form-control mt-4' type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;