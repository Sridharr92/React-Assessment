import React ,{Component} from 'react';
import api from "./api";

class Applications extends Component{
		
	render(){
		return(
			<div>
				{
					api.applications.map((app,index) => {
						return(
							<div key={index}>
								<div className="vedios">
									<span>{app.id}</span>
									{app.videos.map(function (video,index){
										return <div key={index}>
											<video width="350" height="200" controls >
										      <source src="{video.src}" type="video/mp4"/>
										    </video>
											<p>{video.questionId}</p>
               								<input type="text" placeholder={video.comments} className="form-control" />
											

											
										</div>
									})

									}
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default Applications;