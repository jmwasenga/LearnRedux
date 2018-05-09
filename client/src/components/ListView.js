
import React from 'react';

const ListView = ({data}) => {
	console.log(data);
    const {id, title, description } = data;
	return (
		<div>
		   <div>{id}. {title}</div>
		   <div>{description}</div>
	    </div>  
		);
	
	
};

export default ListView;