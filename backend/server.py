from flask import Flask

app = Flask(__name__)# the first set up

@app.route("/userinput",methods=['POST'])
    return json.loads(request.data)['request']

@app.route("/")
def serverRunner():
    return "<p>test test</p>"