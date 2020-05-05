import React,{Component} from 'react'
import api from "./api";

const questions = api.questions;

class Questions extends Component{
	render(){
		return(
			<div>
				<ul className="quest">
					{questions.map(ques => (<li>
						<span>{ques.id}</span>
						<p>{ques.question}</p>
					</li>))}
				</ul>
			</div>
		)
	}
}

export default Questions;
