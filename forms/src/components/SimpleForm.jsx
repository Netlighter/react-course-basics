import { Component } from "react";

class SimpleForm extends Component {
  state = {
    email: '',
    isAgree: false,
    isEmailValid: false,
  }
  
  handleChange = (e) => {
    if(e.target.name.includes("is"))
      this.setState({[e.target.name]: e.target.checked})
    else 
      this.setState({[e.target.name]: e.target.value})
  }

  validateEmail = (email) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) 
      this.setState({isEmailValid: true})
    else {
      this.setState({isEmailValid: false})
      alert("You have entered an INVALID EMAIL address!")
    }
      
  }

  validateForm = () => {
    if(this.state.isEmailValid && this.state.isAgree) {
      alert("Congrats! You FOOL!")
      this.setState({
        email: '',
        isAgree: false,
        isEmailValid: false,
      })
    }
      
    else if(!this.state.isAgree && !this.state.isEmailValid)
      alert("NOTHING IS RIGHT HERE")

    else if(!this.state.isEmailValid) 
      alert("Wrong EMAIL!")

    else if(!this.state.isAgree) 
      alert("Please AGREE")
  }

  validateFormAlt = () => {
    // u can use such code var=regex.test
    // const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)
    const isValidEmail = this.state.isEmailValid
    const isValidCheckbox = this.state.isAgree

    if(!isValidEmail) {
      alert("EMAIL wrong")
      return
    }
    if(!isValidCheckbox) {
      alert("AGREE wrong")
      return
    }
    this.setState({
      email: '',
      isAgree: false,
      isEmailValid: false,
    })
    alert("Good!")
  }

  
  render() {
    const {
      email,
      isAgree,
    } = this.state

    return (
      <div>
        <input 
          type="email" 
          placeholder="Enter your Email" 
          name="email" 
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <br/>
        <label>
          <input 
            type="checkbox" 
            name="isAgree" 
            value={isAgree}
            onChange={this.handleChange}

          />
        </label>
        <span>I agree with losing my money!</span>
        <br/>
        <button onClick={this.validateForm}>Send 10000$</button>
      </div>
    )
  }
}

export { SimpleForm }