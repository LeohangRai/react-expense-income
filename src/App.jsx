import { useState } from 'react';
import './App.css';

function App() {
  const [statement, setStatement] = useState({
    title: '',
    amount: '',
    type: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    title: false,
    amount: false
  });

  const handleInputUpdate = (e) => {
    setStatement({
      ...statement,
      [e.target.name]: [e.target.value]
    });
  };

  const addNewStatement = () => {
    const { title, amount } = statement;
    if (!title) {
      return setValidationErrors({
        title: true,
        amount: false
      });
    }
    if (!amount) {
      return setValidationErrors({
        title: false,
        amount: true
      });
    }
    setValidationErrors({
      title: false,
      amount: false
    });
  };

  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputUpdate}
            value={statement.title}
            style={validationErrors.title ? { borderColor: 'red' } : null}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleInputUpdate}
            value={statement.amount}
            style={validationErrors.amount ? { borderColor: 'red' } : null}
          />
          <select
            name="type"
            onChange={handleInputUpdate}
            value={statement.type}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={addNewStatement}>+</button>
        </div>

        <div>
          <div className="card">
            <div className="card-info">
              <h4>Salary</h4>
              <p>July 27, 2024</p>
            </div>
            <p className="amount-text">+$4000</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
