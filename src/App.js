import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <div className="container">
      <h1>Let's Get Started!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses /> 
      </div>
    </div>
  );
}

export default App;
