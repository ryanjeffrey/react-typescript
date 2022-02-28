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

  // Enum
  enum Codes {first = 1, second = 2}

  // Any
  let firstName: any = true

  // Void
  const warning = (): void => {
    console.log('Warning')
  }
  warning()



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
        <p>
          The value {firstName} is of {typeof firstName} type!
        </p>
      </header>
    </div>
  );
}

export default App;
