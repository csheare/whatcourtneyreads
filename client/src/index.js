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
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      start: '',
      end: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	this.lastRequestCancelSource = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/new_book", {
        params:{
          title: this.state.value
        },
        cancelToken: this.lastRequestCancelSource.token
      });
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

	render() {
		return (
			<div>
				<div>	
					<h1>
						<Book />
					</h1>
				</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label for="title">
              Book Title:
               <input type="text" value={this.state.title} onChange={this.handleChange}/>
            </label>
						<br></br>

            <label for="author">
                Author Name:
               <input type="text" value={this.state.author} onChange={this.handleChange}/>
            </label>
            <br></br>

            <label for="start">
                Start:
               <input type="text" value={this.state.start} onChange={this.handleChange}/>
            </label>
            <br></br>

            <label for="end">
                End:
               <input type="text" value={this.state.end} onChange={this.handleChange}/>
            </label>
            <br></br>

  						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

  						// <label for="author">Author:</label><br></br>
  						// <input type="text" id="author" name="author"/><br></br>
  						// <label for="start">Start:</label><br></br>
  						// <input type="date" id="start" name="start"/><br></br>
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