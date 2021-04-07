import { Component } from "react";


class Form extends Component {
  state = {
    //соответствие name ивента и ключа стейта
    firstName: '',
    email: '',
    message: '',
    subscription: false,
    gender: ''
  }

  handleChange = (event) => {
    // можно использовать динамические ключи для словаря
    // на месте ключа использовать [переменная]
    // названия инпутов мы задаем и стейтам прописываем такие же
    // тогда при подстановке в [] в стейте найдется та переменная
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked })
  }

  validateName = () => {
    if (this.state.firstName.length < 4) {
      alert('name is too short...')
    }
  }

  validateEmail = () => {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test
      (this.state.email)) {
      alert("You have entered an invalid email address!")
    }
  }

  render() {
    const { firstName, email, message, select, subscription, gender } = this.state;

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
      <textarea name="message" value={message} onChange={this.handleChange} />
      <br />
      <select name="select" value={select} onChange={this.handleChange}>
        <option value="" disabled></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <label>
        <input
          type="checkbox"
          name="subscription"
          checked={subscription}
          onChange={this.handleCheckboxChange}
        />
        Lost your money!
      </label>
      <br />
      <input type="radio" name="gender" value="male"
        onChange={this.handleChange} checked={gender === "male"} /> Male
      <input type="radio" name="gender" value="female"
        onChange={this.handleChange} checked={gender === "female"} /> Female
    </div>
  }
}

export { Form }