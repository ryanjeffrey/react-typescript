import logo from './logo.svg';
import './App.css';

function App() {

  // let firstValue: string = 'Ryan'
  // let firstValue: number = 92520
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 56]
  let firstValue: Array<string> = ['2','3','Ryan']
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
