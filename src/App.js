import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Expenses from './components/Expenses/Expenses'

const App = () => {

  return (
    <div className="App">
      <div className="container">
      <h1>Let's Get Started!</h1>
      <Expenses/> 
      </div>
    </div>
  );
}

export default App;
