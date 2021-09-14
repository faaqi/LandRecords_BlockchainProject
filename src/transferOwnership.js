import React from 'react';
import { Button } from 'react-bootstrap'
import './App.css'
const transferOwnership = () =>{
    return (
       <main role = "main" >
          <div className = "container-fluid">
        <   div className = "row">
              <div id ="content" >
                <form>
                    <spacer role ="spacer"></spacer>
                    <input id="addrLand" type = "text" className = "form-control" placeholder ="Enter public address of Owner like (0xf..23)" required />
                    <spacer role ="spacer"></spacer>
                    <input id="ownerName" type = "text" className = "form-control" placeholder ="Enter Name of Buyer" required/>
                    <spacer role ="spacer"></spacer>
                    <input id="ownerID" type = "text" className = "form-control" placeholder ="Enter CNIC of Buyer"required />
                    <spacer role ="spacer"></spacer>
                    <input id="price" type = "text" className = "form-control" placeholder ="Enter street address of land" required/>
                    <spacer role ="spacer"></spacer>
                    <input id="ownerAddr" type = "text" className = "form-control" placeholder ="Enter public address of Buyer like (0xFwe...45e)" required/>
                    <main role = "main">
                    <Button variant = "success">Transfer Ownership</Button>
                    <p>Only Owner of land is allowed</p>
                    </main>   
                </form>
            </div>
        </div>
      </div>
   </main>
    )
}

export default transferOwnership;