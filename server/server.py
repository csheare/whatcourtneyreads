from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

import json
import os

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


# @app.route('/books', methods=['GET'])
# def book():
# 	return Book()

@app.route('/')
def book():
	return "hello"