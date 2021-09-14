import React from 'react';
import { Button } from 'react-bootstrap'
import './App.css'
const ViewMyLand = () =>{
    return (
       <main role = "main" >
          <div className = "container-fluid">
        <   div className = "row">
              <div id ="content" >
                <form>
                
                    <spacer role ="spacer"></spacer>
                    <input id="ownerAddr" type = "text" className = "form-control" placeholder ="Enter public address like (0xFwe...45e)" required/>
                    <main role = "main">
                    <Button variant = "success">Search </Button>

                    </main>   
                </form>
            </div>
        </div>
      </div>
   </main>
    )
}

export default ViewMyLand;