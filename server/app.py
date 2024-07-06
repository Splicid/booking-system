from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import asyncio
import database

app = Flask(__name__)
CORS(app)



@app.route('/hotels', methods=["POST"])
async def db_lookup():
    table = await database.lookup()
    return jsonify([dict(record) for record in table])


@app.route('/book', methods=["POST"])
async def r_booking():
    return {"Code": 200}