import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  return (
    <main>
      <div>
        <h1 className="total-text">0</h1>
        <div className="input-container">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onClick={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
          <select
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
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
