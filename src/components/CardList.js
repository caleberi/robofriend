import React from 'react';
import Card from "./Card";
const  Cardlist = ({robots})=>{
	const cardsArray = robots.map((user,idx)=>{
		return  <Card  
		key ={idx} 
		id={robots[idx].id}  
		name={robots[idx].name} 
		email={robots[idx].email}/>
	})
	return(
			<div> 
				{cardsArray}
			</div>
		)
}

export default Cardlist;