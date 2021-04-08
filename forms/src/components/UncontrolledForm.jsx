import React from "react";


class UncontrolledForm extends React.Component {
  constructor() {
    super();

    // рефы похожи на стейты но находятся не в реакте
    // а в DOM и поэтому их изменения не вызывают перерендер
    // использовать их стоит при неконтролируемых компонентах
    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (event) => {
    // если хотим предварительную проверку
    // чтобы наша форма не отправлялась
    event.preventDefault();

    if (this.cardRef.current.value.length < 16) {
      alert('cringe detected');
      return;
    }

    // send (for example)
    this.cardRef.current.value = '';
    this.emailRef.current.value = '';

  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="card"
        placeholder="card"
        ref={this.cardRef}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        ref={this.emailRef}
      />
      <button>Send!</button> 
    </form>
  }
}

export { UncontrolledForm }