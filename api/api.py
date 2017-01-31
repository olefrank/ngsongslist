from flask import Flask, request, session, jsonify
import json
from flask_cors import CORS, cross_origin
from songs import Songs


#Start the API
app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/songs', methods=['GET'])
def get_all_songs():
    skip = int(request.args.get('skip', 0))
    count = int(request.args.get('count', 20))

    songs_library = Songs(Songs.TEST_FILE)

    #return songs_library.get_songs(skip, count), {'Content-Type': 'application/json'}
    return jsonify(songs_library.get_songs(skip, count))

@app.route('/songs/avg/difficulty', methods=['GET'])
def get_songs_average_difficulty():
    songs_library = Songs(Songs.TEST_FILE)
    return songs_library.get_average_difficulty()


@app.route('/songs/search', methods=['GET'])
def search_songs():
    phrase = request.args.get('phrase', '')
    songs_library = Songs(Songs.TEST_FILE)
    return songs_library.search_songs(phrase)


'''
Gets a song's meta data. Meta is a simple string.
@return {"meta": "<songs meta data, if any>"}
'''
@app.route('/songs/<id>/meta', methods=['GET'])
def get_songs_meta(id):
    meta = session.get('songs_meta', {})

    #return json.dumps({'meta': meta.get(id, '')}), {'Content-Type': 'application/json'}
    return jsonify({'meta': meta.get(id, '')})

'''
Sets a song's meta data. The input is given as string in field "meta".
'''
@app.route('/songs/<id>/meta', methods=['PUT'])
def set_song_meta(id):
    meta = session.get('songs_meta', {})
    meta[id] = request.json['meta']
    session['songs_meta'] = meta
    
    #return json.dumps({})
    return jsonify({})
    #return jsonify({'meta': meta.get(id, '')})
    #return jsonify({'id': id})

app.secret_key = 'our secret!'
app.run(port=5005, debug=True, threaded=True)
