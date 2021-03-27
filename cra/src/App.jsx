import React, {Component} from 'react'

class App extends Component {

  // // automatic native code
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  // }

  // compact better code
  state = {
    count: 0,
    textCount: 0,
  };

  // ключи стейта считаются константами
  // реакт работает по принципу иммутабельности
  // при изменении каких-либо объектов, он их меняет, но при отрисовке это не отслеживается
  // для отслеживания изменений в отрисовке используем методы меняющие состояние setState с ключами, которые хотим изменить!

  // при обращении к объявленным методам, переменным и ключам, не забывать this
  // мы работаем в классе
  handleClick = () => {
    // async work // отрабатывает после главного кода
    this.setState({count: this.state.count+1});

    // перезапишет прошлый сет
    this.setState({count: this.state.count+1});

    //отработает после прошлого сета! (редко нужно)
    this.setState((prevState) => ({count: prevState.count+1}));

    // добавление колбека после отработки
    this.setState((prevState) => ({count: prevState.count+1}), () => {
      console.log('setState complete')
    });
    
    // works first
    console.log('handle complete')
  }

  addClick = () => {
    this.setState({textCount: this.state.textCount+1})
  }
  subClick = () => {
    this.setState({textCount: this.state.textCount-1})
  }

  render() {
    return (
      <div className="App">
        Hello World
        <button onClick={this.handleClick}>
          {this.state.count}
        </button>
        .......
        <button className="add" onClick={this.addClick}>
          +
        </button>
        {">"} {this.state.textCount} {"<"}
        <button className="sub" onClick={this.subClick}>
          -
        </button>
      </div>
    );
  }
}

export default App;
