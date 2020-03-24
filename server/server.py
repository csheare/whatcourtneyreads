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

# @app.route('/', methods=['POST'])
# def test():
# 	body = json.loads(request.data)
# 	player, move = body['player'], body['move']
# 	print(f'Player {player} played an {move}')
# 	return jsonify(body)

@app.route('/new_book', methods=['GET'])
def new_books():
	body = json.loads(request.data)
	# print the book
	print(body)
	# write the book to the db 
	#return jsonify(body)



@app.route('/books', methods=['GET'])
def get_books():
	books = Book.query.all()
	results = [ 
	{
		'title': book.title,
		'author': book.author,
		'start': book.start,
		'end': book.end
	}
	for book in books]
	return {'books': results}

@app.route('/')
def hello():
	return "hello"