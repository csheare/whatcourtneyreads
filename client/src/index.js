import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';

function Book(){
	return(
		<p> This is a great book! </p>
	);
}

class Timeline extends React.Component {
	render() {
		return (
			<div>
				<div>	
					<h1>
						<Book />
					</h1>
				</div>
				<div>
					<button onClick={() => alert('click')}>
						click me
					</button>
				</div>
			</div>
		);
	}
}
    // axios
    //   .get("http://localhost:5000/", {
    //     params:{
    //       player: currentPlayer,
    //       move: squares[i]
    //     },
    //     cancelToken: this.lastRequestCancelSource.token
    //   });

// ========================================



ReactDOM.render(
	<Timeline />,
	document.getElementById('root')
);