from flask import Flask
from pipeline import queryBuilder

app = Flask(__name__)# the first set up

@app.route("/userinput",methods=['POST'])
    return queryBuilder(json.loads(request.data)['request'])

@app.route("/")
def serverRunner():
    return "<p>test test</p>"