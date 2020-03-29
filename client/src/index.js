import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button} from "react-bootstrap";
import axios from "axios";
import './index.css';

function Book(){
	return(
		<p> This is a great book! </p>
	);
}

class BookForm extends React.Component {
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
      .post("http://localhost:5000/new_book", {
        params:{
          title: this.state.title,
          author: this.state.author,
          start: this.state.start,
          end: this.state.end
        },
        cancelToken: this.lastRequestCancelSource.token
      }).then(res => {
        console.log(res);
        console.log(res.data);
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label for="title">Book Title: </Form.Label>
              <Form.Control type="text" onChange={this.handleTitleChange} placeholder="The Hobbit" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label for="author">Author Name: </Form.Label>
              <Form.Control type="text" onChange={this.handleAuthorChange} placeholder="J. R. R. Tolkien" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label for="start">Start: </Form.Label>
              <Form.Control type="date" onChange={this.handleStartChange} />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label for="end">End: </Form.Label>
              <Form.Control type="date" onChange={this.handleEndChange} />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> 
				</div>
			</div>
		);
	}
}

class BookCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ''
    };

    this.getBooks = this.getBooks.bind(this);
  }

  getBooks(event) {
    this.lastRequestCancelSource = axios.CancelToken.source();
    axios
      .get("http://localhost:5000/books"
      ).then(res => {
        const books = res.data;
        this.setState({books: books});
        console.log(res);
        console.log(res.data);
      });
    event.preventDefault();
  }

  render() {
    //this.getBooks()
    return (
      <div>
        <p>
        <Button onClick={this.getBooks}>
          Get Books
        </Button>
        {this.state.books[0]}
        </p>
      </div>
    )
  };

}



class Timeline extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div>
        <BookForm />
        <BookCards />
      </div>
    )
  }
}


// ========================================



ReactDOM.render(
	<Timeline />,
	document.getElementById('root')
);