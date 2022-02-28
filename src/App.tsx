import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css';
import Message from './Message.tsx'

class App extends Component<any> {

  componentDidMount() {
    console.log("It worked!");
  }


  // // ******* BASIC TYPES *******
  // // let firstValue: string = 'Ryan'
  // // let firstValue: number = 92520
  // // let firstValue: boolean = true;
  // // let firstValue: number[] = [2, 3, 56]
  // let firstValue: Array<string> = ['2','3','Ryan']

  // // Tuple
  // let aTuple: [string, number] = ['Ryan', 120983]

  // // Enum
  // enum Codes {first = 1, second = 2}

  // // Any
  // let firstName: any = true

  // // Void
  // const warning = (): void => {
  //   console.log('Warning')
  // }
  // warning()


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message='This is a simple message'/>
      </header>
    </div>
  );
}
}
export default App;
