import React, {Component} from 'react';
import Web3 from 'web3'

import {RELIEFFUND_ADDRESS,RELIEFFUND_ABI} from './config.js'

class Account extends Component {


	constructor() {
		super()

		this.state = { account: '',data:[], relieffund:'', value:'' , email:'',email1:''}
	}
	componentDidMount() {
	  this.loadBlockchainData()
	}
	async loadBlockchainData() {	
	  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
	  const accounts = await web3.eth.getAccounts()
	  const relieffund = new web3.eth.Contract(RELIEFFUND_ABI, RELIEFFUND_ADDRESS);
	  this.setState({ relieffund : relieffund  })
	  this.changeEmailHandler =(event) => {this.setState({email:event.target.value})
	  }	 
	  
	  this.changeEmail1Handler =(event) => {this.setState({email1:event.target.value})
	  }	 

	  this.setState({ value: '' });  
	  
	  
	  
	  
	  var arr=[]		
	  const len=await relieffund.methods.applyfundLength().call();
	  
	  
		  
	  for (let i = 0; i < len; i++) {
		  
		const item = await this.state.relieffund.methods.ApplyFund(i).call();					  
		
		arr.push({name:item});
	  }		
	  
	  this.setState({data: arr})

	}


	 
	render() {
		
		let finalComponent;

        if (this.state.data.length>0 ){ // i-e first time
		
			finalComponent=<div>
			
					<p>				
					<h><b>Admin Adding Verified And Deserving People' Accounts</b><br/></h> 
					
					<p> <b> Admin please add your Account address first : </b></p>	
					< form onSubmit= {(event) => {
							event.preventDefault()
							const valueField = new FormData(event.target).get("valueField");
							
							this.setState({ account: valueField })
							
							}} >
							<input id="field" value= {this.state.email1} onChange={this.changeEmail1Handler}  name ="valueField" type="text" required />
							< input type= "submit" hidden="" />
					</form>
	
					
					<p> <b> Please input account address to add: </b></p>		
					< form onSubmit= {(event) => {
							event.preventDefault()
							const valueField = new FormData(event.target).get("valueField");
							this.state.relieffund.methods.add(valueField).send({ from:this.state.account})
							this.loadBlockchainData()
							}} >
							<input id="field" value= {this.state.email} onChange={this.changeEmailHandler}  name ="valueField" type="text" required />
							< input type= "submit" hidden="" />
					</form>

				    <h><br/><b>Following are the accounts who have applied for funding</b></h>
					<h>
						{this.state.data.map(d => <p key={d.name}>{d.name}</p>)}
					</h>	
					</p>											

			 </div>

		}
		else if (this.state.data.length==0 ){
			finalComponent=<div>
			
					<p>				
					<h><b>Admin Adding Verified And Deserving People' Accounts</b><br/></h> 
					
					<p> <b> Admin please add your Account address first : </b></p>	
					< form onSubmit= {(event) => {
							event.preventDefault()
							const valueField = new FormData(event.target).get("valueField");
							
							this.setState({ account: valueField })
							
							}} >
							<input id="field" value= {this.state.email1} onChange={this.changeEmail1Handler}  name ="valueField" type="text" required />
							< input type= "submit" hidden="" />
					</form>
	
					
					<p> <b> Please input account address to add: </b></p>		
					< form onSubmit= {(event) => {
							event.preventDefault()
							const valueField = new FormData(event.target).get("valueField");
							this.state.relieffund.methods.add(valueField).send({ from:this.state.account})
							this.loadBlockchainData()
							}} >
							<input id="field" value= {this.state.email} onChange={this.changeEmailHandler}  name ="valueField" type="text" required />
							< input type= "submit" hidden="" />
					</form>
				  </p>
					
				</div>
	
		}			
		
	
	return (
			< div>
				<h>
				{finalComponent}
				</h>				
	
			</div>
	 ); }
}

export default Account;

