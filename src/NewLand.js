import React from 'react';
import { Button } from 'react-bootstrap'
import './App.css'
const NewLand = () =>{
    return (
       <main role = "main" >
          <div className = "container-fluid">
        <   div className = "row">
              <div id ="content" >
                <form>
                    <spacer role ="spacer"></spacer>
                    <input id="addrLand" type = "text" className = "form-control" placeholder ="Enter street address of land" required />
                    <spacer role ="spacer"></spacer>
                    <input id="ownerName" type = "text" className = "form-control" placeholder ="Enter Name of owner" required/>
                    <spacer role ="spacer"></spacer>
                    <input id="ownerID" type = "text" className = "form-control" placeholder ="Enter CNIC of owner"required />
                    <spacer role ="spacer"></spacer>
                    <input id="price" type = "text" className = "form-control" placeholder ="Enter price of land" required/>
                    <spacer role ="spacer"></spacer>
                    <input id="ownerAddr" type = "text" className = "form-control" placeholder ="Enter public address of owner like (0xFwe...45e)" required/>
                    <main role = "main">
                    <Button variant = "success">Add New Land</Button>
                    <p>Only Owner is allowed to add new Land </p>
                    </main>   
                </form>
            </div>
        </div>
      </div>
   </main>
    )
}

export default NewLand;