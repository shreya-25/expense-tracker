import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

function App() {
  const expenses=[
    {title:"Car Insurance", amount: 294.67, date: new Date(2021, 2 , 28)},
    {title:"House Insurance", amount: 994.87, date: new Date(2021, 2 , 17)},
    {title:"Medical Insurance", amount: 204.55, date: new Date(2021, 2 , 10)}
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem title={expenses[0].title}  amount={expenses[0].amount}  date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title}  amount={expenses[1].amount}  date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title}  amount={expenses[2].amount}  date={expenses[2].date}/>
      </header>
    </div>
  );
}

export default App;
