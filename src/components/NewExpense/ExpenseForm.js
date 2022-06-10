import { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls row">
                <div className="new-expense__control col">
                    <label>Title</label>
                    <input className='form-control' type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control col">
                    <label>Amount</label>
                    <input className='form-control' type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control col">
                    <label>Date</label>
                    <input className='form-control' type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
            <div className="new-expense__actions">
                    <button className='form-control mt-4' type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;