import { useState } from 'react';
import './App.css';

function App() {
  const [statement, setStatement] = useState({
    title: '',
    amount: '',
    type: ''
  });

  const handleInputUpdate = (e) => {
    setStatement({
      ...statement,
      [e.target.name]: [e.target.value]
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
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleInputUpdate}
            value={statement.amount}
          />
          <select
            name="type"
            onChange={handleInputUpdate}
            value={statement.type}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button>+</button>
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
