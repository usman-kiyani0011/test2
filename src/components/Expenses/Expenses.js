import ExpenseItems from './ExpenseItems'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = ('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    } 

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                { props.items.map( expense => (
                    <ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}  />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;



    //  {
    //     propsList.map((value) => {
    //         console.log(value);
    //        return (
    //          <ExpenseItems title={value.title} amount={value.amount} date={value.date} />
    //        )
    //     })
    // }