from flask import Flask, request, jsonify
import database

app = Flask(__name__)


@app.route('/')
def Test():
    return 'Hello World'