import React, {useState} from 'react';
import "./Expenseitem.css";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const Expenseitem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}  />
            <div className="expense-item__description">
                <div><h2>{title}</h2></div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button className="btn btn-dark ms-1" onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default Expenseitem;