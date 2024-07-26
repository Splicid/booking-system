from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from os import environ
from firebase_admin import auth, credentials
import firebase_admin
import asyncio
import database
import datetime
import os

app = Flask(__name__)
CORS(app)
cred = credentials.Certificate("./firebase-creds.json")
default_app = firebase_admin.initialize_app(cred)

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
    # Set session expiration to 1 days.
    expires_in = datetime.timedelta(days=1)
    try:
        # Create the session cookie. This will also verify the ID token in the process.
        # The session cookie will have the same claims as the ID token.
        session_cookie = auth.create_session_cookie(id_token, expires_in=expires_in)
        response = jsonify({'status': 'success'})
        # Set cookie policy for session cookie.
        expires = datetime.datetime.now() + expires_in
        response.set_cookie(
            'session', session_cookie, expires=expires, httponly=True, secure=True)
        return response
    except Exception as inst:
        return print(401, f'Failed to create a session cookie {inst}')