from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

import json
import os

from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)


from book import Book

@app.route('/new_book', methods=['POST'])
def new_books():
	body = json.loads(request.data)
	title, author, start, end = body['params']['title'],\
								body['params']['author'],\
								body['params']['start']
	# print the book
	new_book = Book(title, author, start, end)
	db.session.add(new_book)
	db.session.commit()
	# write the book to the db 

	return jsonify(body)



@app.route('/books', methods=['GET'])
def get_books():
	books = Book.query.all()
	results = [ 
	{
		'title': book.title,
		'author': book.author,
		'month': book.start.month,
		'year' : book.start.year,
		'day' : book.start.day
	}
	for book in books]
	return {'books': results}

@app.route('/')
def hello():
	return "hello"