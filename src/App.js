import './App.css';

function App() {
  const username = 'Adam';
  const age = 18;

  const employee = {
    username: 'John',
    age: 20,
  };

  return (
    <div className="App">
      <h1>
        Hello: {username} - {age}
      </h1>
      <br />
      <h2>
        Employe: {employee.username} - {employee.age}
      </h2>
    </div>
  );
}

export default App;
