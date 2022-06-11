import React,{useState} from 'react';
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItems = (props) => {
    const [title, setTitle] =  useState(props.title);

    const clickhandler = () => {
        setTitle('Updated!');
    }

    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickhandler} className='btn btn-dark ms-2'>Change Title</button>
        </Card>
    )
} 

export default ExpenseItems;