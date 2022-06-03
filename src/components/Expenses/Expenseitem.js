import React, {useState} from 'react';
import "./Expenseitem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expenseitem = (props) => {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}  />
            <div className="expense-item__description">
                <div><h2>{props.title}</h2></div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default Expenseitem;