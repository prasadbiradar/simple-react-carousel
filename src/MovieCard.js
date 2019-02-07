import React, { Component } from 'react';

class MovieCard extends Component {


  	render() {
    	return (
			<div className="card">
	        	<div className="img-div">
	          		<img src={this.props.url} className="img" alt={this.props.title} />
	          	</div>
	          	<div className="detail-div">
	          		<div className="txt-header"> 
	            		{this.props.title}
	          		</div>
	          		<p className="txt">
	            		{this.props.text}
	            	</p>

	            	<div className="button-blue">
	            		Buy now
	            	</div>
	            	<div className="button-grey">
	            		Play Trailer
	            	</div>
	            </div>
			</div>


    	);
  	}
}

export default MovieCard;