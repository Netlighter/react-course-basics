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

/*
  for alternative method u need to use constructor and with `super();` line and write:
  this.sampleFunc() = this.sampleFunc.bind(this); //привязка контекста this к функции

  and then write func:
  sampleFunc () {
    return this.state.textCount
  }
*/
  


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
      <div className="App" style={{
        margin: 'auto',
        width: '80px'
      }}>
        Hello World

        <button style={{
          margin: '0 .4rem', 
          display: 'inline-block'
          }} 
          onClick={this.handleClick}
        >
          {this.state.count}
        </button>

        <button className="add" onClick={this.addClick}>
          +
        </button>

        <span style={{
          margin: '0 .75rem', 
          display: 'inline-block'
          }}
        >
            {this.state.textCount}
        </span>

        <button className="sub" onClick={this.subClick}>
          -
        </button>

        {/* third method is to use anon func like code snippet */}
        <button onClick={() => this.setState({count: this.state.count + 100})}>
          anon func here!
        </button>
        
      </div>
    );
  }
}

export default App;
