import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [statement, setStatement] = useState({
    title: '',
    amount: '',
    type: 'income'
  });

  const [statementList, setStatementList] = useState([]);

  const [validationErrors, setValidationErrors] = useState({
    title: false,
    amount: false
  });

  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    const newTotal = statementList.reduce((acc, curr) => {
      const { type, amount } = curr;
      if (type === 'income') {
        return acc + Number(amount);
      }
      return acc - Number(amount);
    }, 0);
    setTotal(newTotal);
  };

  useEffect(updateTotal, [statementList]);

  const renderTotal = () => {
    if (total > 0) {
      return <h1 className="total-text success">+{total}</h1>;
    }
    if (total < 0) {
      return <h1 className="total-text danger">-{Math.abs(total)}</h1>;
    }
    return <h1 className="total-text">{total}</h1>;
  };

  const handleInputUpdate = (e) => {
    setStatement({
      ...statement,
      [e.target.name]: e.target.value
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
    const newStatement = {
      ...statement,
      id: uuidv4(),
      date: new Date().toDateString()
    };
    setStatementList([...statementList, newStatement]);
    setStatement({
      title: '',
      amount: '',
      type: 'income'
    });
  };

  const renderCards = () => {
    return statementList.map(({ id, title, date, type, amount }) => (
      <div className="card" key={id}>
        <div className="card-info">
          <h4>{title}</h4>
          <p>{date}</p>
        </div>
        <p
          className={`amount-text ${type === 'income' ? 'success' : 'danger'}`}
        >
          {type === 'income' ? '+' : '-'}
          {`$${amount}`}
        </p>
      </div>
    ));
  };

  return (
    <main>
      <div>
        {renderTotal()}
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

        <div>{renderCards()}</div>
      </div>
    </main>
  );
}

export default App;
