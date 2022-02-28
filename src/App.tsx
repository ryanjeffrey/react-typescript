import logo from './logo.svg';
import './App.css';

function App() {

  // ******* BASIC TYPES *******
  // let firstValue: string = 'Ryan'
  // let firstValue: number = 92520
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2, 3, 56]
  let firstValue: Array<string> = ['2','3','Ryan']

  // Tuple
  let aTuple: [string, number] = ['Ryan', 120983]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        <p>
          The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>
      </header>
    </div>
  );
}

export default App;
