from flask import Flask

app = Flask(__name__)# the first set up

@app.route("/")
def serverRunner():
    return "<p>test test</p>"