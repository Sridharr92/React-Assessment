import React,{Component} from 'react';
import api from "./api";

const candidates = api.candidates;

class NewData extends Component{
	render(){
		return(
			<div>
				
				<ul>
					{candidates.map(cand => (<li>
						<span>{cand.id}</span>
						<h5>{cand.name}</h5>
						<p>{cand.applicationId}</p>

					</li>))}
				</ul>
			</div>
		)
	}
}

export default NewData;