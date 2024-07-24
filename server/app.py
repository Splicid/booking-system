from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from firebase_admin import auth
import asyncio
import database
import datetime

app = Flask(__name__)
CORS(app)



@app.route('/hotels', methods=["GET"])
async def db_lookup():
    table = await database.lookup()
    return jsonify([dict(record) for record in table])


@app.route('/book', methods=["GET"])
async def r_booking():
    return {"Code": 200}

@app.route('/sessionLogin', methods=['POST'])
def session_login():
    # Get the ID token sent by the client
    id_token = request.form.get('idToken')
    print(id_token)
    # Set session expiration to 5 days.
    expires_in = datetime.timedelta(days=5)
    try:
        # Create the session cookie. This will also verify the ID token in the process.
        # The session cookie will have the same claims as the ID token.
        session_cookie = auth.create_session_cookie(id_token, expires_in=expires_in)
        response = app.jsonify({'status': 'success'})
        # Set cookie policy for session cookie.
        expires = datetime.datetime.now() + expires_in
        response.set_cookie(
            'session', session_cookie, expires=expires, httponly=True, secure=True)
        return response
    except exceptions.FirebaseError:
        return app.abort(401, 'Failed to create a session cookie')