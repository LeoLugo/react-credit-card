import React, { Component } from 'react';
import './App.css';
import valid from 'card-validator'


class App extends Component {

	state = {
		card: "",
		name: "",
		exp: "",
		code: "",
		cardtype: "logo",
		maybe: "yes",
		passed: true
	}

	check = (e) => {
		if(this.state.passed){
			this.setState({
				maybe: "yes"
			})
		} else {
			this.setState({
				maybe: "no"
			})
		}
	}


	manageCardNum = (e) => {
		let val = e.target.value
		let obj = valid.number(val)
		if(obj.card !== null){
		this.setState({
			card : e.target.value,
			cardtype: obj.card.type,
			passed: obj.isValid
		})} else {
			this.setState({
				card: e.target.value,
				cardtype: "logo",
				passed: obj.isValid
			})
		}
	}

	manageCardName = (e) => {
		this.setState({
			name : e.target.value
		})
	}

	manageCardExp = (e) => {
		let val = e.target.value
		let obj = valid.expirationDate(val)
			
			this.setState({
				exp : e.target.value,
				passed: obj.isValid
			})
	}

	manageCardCode = (e) => {
		let val = e.target.value
		let obj = valid.cvv(val)
			
			this.setState({
				code: e.target.value,
				passed: obj.isValid
			})
	}



  render() {
    return (
      <div className="App">
      <div><h1>Enter Info:</h1></div>
      	<div className={this.state.maybe}>
      		<div className="num" >{this.state.card}</div>
      		<div className="nam" >{this.state.name}</div>
      		<div className="exp" >{this.state.exp}</div>
      		<div className={this.state.cardtype}></div>
      		<div className="good">VALID THRU</div>
      		<div className="security">SECURITY CODE</div>
      	  <div className="cod" >{this.state.code}</div>
      	</div>
      	<div className="info">
      		<form>
      			<input onBlur={this.check} maxLength="16" placeholder="Card Number" className="large" onChange={this.manageCardNum} value={this.state.card} type="text" name="card" />
      			<input placeholder="Full Name" className="large" onChange={this.manageCardName} value={this.state.name} type="text" name="name"/>
      			<input onBlur={this.check} maxLength="5" placeholder="Exp Date 06/19" className="small" onChange={this.manageCardExp} value={this.state.exp} type="text" name="exp"/>
      			<input onBlur={this.check} maxLength="3" placeholder="CVV" className="small" onChange={this.manageCardCode} value={this.state.code} type="text" name="code"/>
      			<input className="small" type="submit"/>
      		</form>
      	</div>

      </div>
    );
  }
}

export default App;
