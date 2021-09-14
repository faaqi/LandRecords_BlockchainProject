import React, {Component} from 'react';
import { BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";

function Nav(){
	
	return(
	   <nav >
	     <h3> Corona Relief Fund App made by: Ahmad Nawaz(i160020) and Zeeshan Waheed(i160315) </h3>
		 <ul>
			<Link to={"/Account"}><li>Add Account</li></Link>
			<Link to={"/Give_Funds"}><li>Give Us Donations</li></Link>							
			<Link to={"/Apply_Funds"}><li>Apply For Relief Fund</li></Link>	
			<Link  to={"/Get_Funds"}><li>Get Relief Fund</li></Link>
			<Link to={"/Result"}><li>Check Overall Status</li></Link>	

		 </ul>
		 
		 
	   </nav>
 	
	);
}

export default Nav;