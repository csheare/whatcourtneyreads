import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import './index.css';

class Timeline extends React.Component {
	render() {
		return (
			<button onClick={function() { alert('click'); }}>
			click me
			</button>
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