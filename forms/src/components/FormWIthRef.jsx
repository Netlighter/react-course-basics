import React from "react";


class FormWithRef extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      email: '',
    }
    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    // этот колбек нужен чтобы выполнять проверку ПОСЛЕ обновления стейта
    this.setState(() => ({ [event.target.name]: event.target.value }), () => {
      if (this.state.card.length === 16) 
        this.emailRef.current.focus();
    })
  }

  componentDidMount() {
    console.log(this.cardRef)
    this.cardRef.current.focus()
  }

  render() {
    const { card, email, } = this.state;

    return <div>
      <input
        type="text"
        name="card"
        placeholder="card"
        value={card}
        onChange={this.handleChange}
        ref={this.cardRef}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={this.handleChange}
        ref={this.emailRef}
      />
    </div>
  }
}

export { FormWithRef }