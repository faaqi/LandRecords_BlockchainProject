import './App.css'
import react,{ Component } from 'react'
import Web3 from 'web3'
import NewLand from './NewLand'
import {LAND_RECORD_ADDRESS,LAND_RECORD_ABI} from './config'
import { Button} from 'react-bootstrap';
import ViewMyLand from './ViewMyLand'
import TransferOwnership from './transferOwnership'
import AddDispute from './AddDispute'
import HandleDispute from './HandleDispute'
import Properties from './Properties'



class App extends Component{

  componentWillMount() {
    this.loadBlockchainData()
  }

async loadBlockchainData(){
  const web3 = new Web3 ("http://localhost:7545")
  const network = await web3.eth.net.getNetworkType()
  const accounts = await web3.eth.getAccounts()
  this.setState ({account : accounts[0]})

  const landRecord = new web3.eth.Contract(LAND_RECORD_ABI,LAND_RECORD_ADDRESS)
  this.setState({landRecord})

}

constructor (props) {
  super (props);
  this.state = {account  : '', showAddLandForm : false , showViewMyLand : false , transOwnForm : false,

      propertiesForm : false  , addDisputeForm : false , handleDisputeForm : false
};

  // this.onClick = this.onClick.bind(this);
}


onClick= ()=>{

  this.setState({showAddLandForm: !this.state.showAddLandForm});
}

onViewLandClick = () => {
  this.setState({showViewMyLand : !this.state.showViewMyLand});
}

onTransOwnClick = () => {
  this.setState ({transOwnForm  : !this.state.transOwnForm});
}

onPropertiesClick = () => {
  this.setState ({propertiesForm : !this.state.propertiesForm});
}

onAddDisputeClick = () => {
  this.setState ({addDisputeForm : !this.state.addDisputeForm});
}

onHandleDisputeClick = () => {
  this.setState ({handleDisputeForm : !this.state.handleDisputeForm});
}


// showAddLandForm = () => {
//   return (
//     <div> 
//    <form id= "add-land">

//         <label>Owner Name : </label>
//         <input type="text"> </input>

//         <label> Owner id : </label>
//         <input type="text" ></input>

//         <label>Land Street Address : </label>
//         <input type = "text" ></input>

//         <button>Create</button>
//      </form>
//      </div>
//     );
// }

  render(){
    return (
      <div className ="container">

         
        <h1>
          Land Ownership and Transfer Records system Pakistan</h1>
    {/* <p>Your acount : {this.state.account}</p> */}


    <Button onClick= {this.onClick} variant="primary" size="sm">
      Add New Land Record (Only Owner)
    </Button>
    {this.state.showAddLandForm? <NewLand/>: ""}

    <Button onClick = {this.onViewLandClick} variant="success" size="sm">
    View My Land Record
  </Button>
  {this.state.showViewMyLand? <ViewMyLand/>: ""}


  <Button onClick = {this.onTransOwnClick} variant="dark" size="sm" >
    Transfer Ownership
  </Button>
  {this.state.transOwnForm ? <TransferOwnership/> : ""}


  <Button onClick = {this.onPropertiesClick} variant="info" size="sm" >
    Properties List
  </Button>
  {this.state.propertiesForm ? <Properties/> : ""}


  <Button onClick = {this.onAddDisputeClick} variant="danger" size="sm" active>
    Add Dispute on Land
  </Button>
  {this.state.addDisputeForm ? <AddDispute/> : ""}


  <Button onClick = {this.onHandleDisputeClick} variant="warning" size="sm" active>
    Handls Disputes (Only Owner)
  </Button>
  {this.state.handleDisputeForm ? <HandleDispute/> : ""}
  {}
      </div>
    );
  }
  
}

export default App;
