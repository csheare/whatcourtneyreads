import React from 'react';
import ReactDOM from 'react-dom';
import {Form, Button, Jumbotron, Container} from "react-bootstrap";
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from 'vertical-timeline-component-react';
import styled from 'styled-components'
import { space } from 'styled-system'

import axios from "axios";
import './index.css';


const Spacer = styled.div(space)

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
      .post("https://0.0.0.0:8081/new_book", {
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
						Add a Book Here!
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
          </Form> 
				</div>
			</div>
		);
	}
}


class Main extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books_list: ''
    };

  }

  componentDidMount() {
    this.lastRequestCancelSource = axios.CancelToken.source();
    axios
      .get("https://0.0.0.0:8081/books"
      ).then(res => {
        this.setState({
            isLoaded: true,
            books_list: res.data.books
          });
        console.log(res.data.books);
      });
  }
    render() {
      const { isLoaded, books_list } = this.state;

      if (!isLoaded) {
        return (<div>Loading...</div>);
      } else {
        return (
          <div>
            <Timeline>
              {books_list.map(book => (
                  <Content key={book.title}>
                    <ContentYear 
                      startMonth={book.month}
                      startDay={book.day}
                      startYear={book.year}
                    />
                    <ContentBody title={book.title}>
                      Author: {book.author}
                    </ContentBody>
                  </Content>
              ))}
            </Timeline>
          </div>
        );
      }
  };
}


class FullTimeline extends React.Component {
  render() {
    return (
      <div>
      
      <Jumbotron fluid  background-color="red">
        <Container>
          <h1>What Courtney Reads</h1>
          <p>
            "The future will belong not only to the educated [wo]man, but to the [wo]man whis is educated to use [her] leisure wisely"
          </p>
        </Container>
        </Jumbotron>
<Spacer mb={4} />

        <Main />
      </div>
    )
  }
}


// ========================================



ReactDOM.render(
	<FullTimeline />,
	document.getElementById('root')
);