from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def test():
	player, move = request.args['player'], request.args['move']
	print(f'Player {player} played an {move}')
	return ''