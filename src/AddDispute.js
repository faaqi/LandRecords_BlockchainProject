import React from 'react';
import { Button } from 'react-bootstrap'
import './App.css'
const AddDispute = () =>{
    return (
       <main role = "main" >
          <div className = "container-fluid">
        <   div className = "row">
              <div id ="content" >
                <form>
                
                    <spacer role ="spacer"></spacer>
                    <input id="landAddr" type = "text" className = "form-control" placeholder ="Enter the same street address of land to add dispute" required/>
                    <main role = "main">
                    <Button variant = "success">Add Dispute </Button>

                    </main>   
                </form>
            </div>
        </div>
      </div>
   </main>
    )
}

export default AddDispute;