from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/")
def index():
    return jsonify({ "msg": "custom-request-header-size-python" })


@app.route("/api/log/headers")
def headers():
    return jsonify({ "msg": dict(request.headers) })

                                             