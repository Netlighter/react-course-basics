import { Component } from "react";


class Form extends Component {
  state = {
    //соответствие name ивента и ключа стейта
    firstName: '',
    email: '',
    message: '',
  }

  handleChange = (event) => {
    // можно использовать динамические ключи для словаря
    // на месте ключа использовать [переменная]
    // названия инпутов мы задаем и стейтам прописываем такие же
    // тогда при подстановке в [] в стейте найдется та переменная
    this.setState({[event.target.name]: event.target.value})
  }

  validateName = () => {
    if (this.state.firstName.length < 4) {
      alert('name is too short...')
    }
  }

  validateEmail = () => {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test
    (this.state.email)){
      alert("You have entered an invalid email address!")
    }
  }

  render() {
    const {firstName, email, message} = this.state;
    return <div>
      <input 
        type="text" 
        name="firstName"
        placeholder="firstName"
        value={firstName}
        onChange={this.handleChange}
        onBlur={this.validateName}
      />
      <input 
        type="email" 
        name="email"
        placeholder="email"
        value={email}
        onChange={this.handleChange}
        onBlur={this.validateEmail}
      />
      <br />
      <textarea name="message" value={message} onChange={this.handleChange}/>
    </div>
  }
}

export {Form}