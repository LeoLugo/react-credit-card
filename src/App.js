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
		maybe: "yes"
	}

	check = (e) => {
		
	}


	manageCardNum = (e) => {
		let val = e.target.value
		console.log()
		let obj = valid.number(val)
		if(obj.card !== null){
		this.setState({
			card : e.target.value,
			cardtype: obj.card.type,
			maybe: obj.isValid
		})} else {
			this.setState({
				card: e.target.value,
				cardtype: "logo",
				maybe: obj.isPotentiallyValid
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
		
		if(obj.isValid) {
			this.setState({
				exp : e.target.value,
				maybe: "yes"
			})
		}else {
			this.setState({
			exp: e.target.value,
			maybe: obj.isValid
			})
		}
	}

	manageCardCode = (e) => {
		let val = e.target.value
		let obj = valid.cvv(val)

		if(obj.isValid) {
			this.setState({
				code: e.target.value,
				maybe: "yes"
			})
		} else {
			this.setState({
				code: e.target.value,
				maybe: obj.isValid
			})
		}

	}



  render() {
  	const maybevalid = this.state.maybe
    return (
      <div className="App">
      <div><h1>Enter Info:</h1></div>
      	<div className={maybevalid ? "yes" : "no"}>
      		<div className="num" >{this.state.card}</div>
      		<div className="nam" >{this.state.name}</div>
      		<div className="exp" >{this.state.exp}</div>
      		<div className={this.state.cardtype}></div>
      		<div className="good">VALID THRU</div>
      	  <div className="cod" >{this.state.code}</div>
      	</div>
      	<div className="info">
      		<form>
      			<input onBlur={this.check} maxLength="16" placeholder="Card Number" className="large" onChange={this.manageCardNum} value={this.state.card} type="text" name="card" />
      			<input placeholder="Full Name" className="large" onChange={this.manageCardName} value={this.state.name} type="text" name="name"/>
      			<input maxLength="5" placeholder="Exp Date 06/19" className="small" onChange={this.manageCardExp} value={this.state.exp} type="text" name="exp"/>
      			<input maxLength="3" placeholder="CVV" className="small" onChange={this.manageCardCode} value={this.state.code} type="text" name="code"/>
      			<input className="small" type="submit"/>
      		</form>
      	</div>

      </div>
    );
  }
}

export default App;
