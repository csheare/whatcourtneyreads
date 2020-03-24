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

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value});
  }

  handleStartChange(event) {
    this.setState({start: event.target.value});
  }

  handleEndChange(event) {
    this.setState({end: event.target.value});
  }

  handleSubmit(event) {
  	this.lastRequestCancelSource = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/new_book", {
        params:{
          title: this.state.title.value,
          author: this.state.author.value,
          start: this.state.start.value,
          end: this.state.end.value
        },
        cancelToken: this.lastRequestCancelSource.token
      });
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
               <input type="text" onChange={this.handleTitleChange}/>
            </label>
						<br></br>

            <label for="author">
                Author Name:
               <input type="text" onChange={this.handleAuthorChange}/>
            </label>
            <br></br>

            <label for="start">
                Start:
               <input type="text" onChange={this.handleStartChange}/>
            </label>
            <br></br>

            <label for="end">
                End:
               <input type="text" onChange={this.handleEndChange}/>
            </label>
            <br></br>

  					<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		);
	}
}

// ========================================



ReactDOM.render(
	<Timeline />,
	document.getElementById('root')
);