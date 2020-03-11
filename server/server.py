from flask import Flask, request
from flask_cors import CORS
import json
from flask import jsonify

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def test():
	body = json.loads(request.data)
	player, move = body['player'], body['move']
	print(f'Player {player} played an {move}')
	return jsonify(body)