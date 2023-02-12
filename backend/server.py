
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, json, request, Response
import spacy
app = Flask(__name__)
import cohere

from cohere.classify import Example

examples=[
  Example("How old is my son?", "bad"),
  Example("Mechanics nearby", "good"),
  Example("Why the heck do I can think", "bad"),
  Example("What is the meaning of existence?", "good"),
  Example("where can I find the closest treasure?","bad"),
  Example("Why did my car started making weird noises?","bad"),
  Example("Where can find a place to crash tonight?","bad"),
  Example("what is a wrench useful for?","bad"),
  Example("How far is Toronto?", "good"),
  Example("What can I do today in my town?","good"),
  Example("How can I copy paste in vim?","good"),
  Example("Why is Vim not working?","bad"),
  Example("Why does my heart hurt?","bad"),
  Example("My headaches is getting worse, where can I find help?","good"),
  Example("height of the tallest building?","good"),
  Example("Why is the sky blue?","good"),
  Example("How about now?","bad"),
  Example("Drinking age in Canada?","good"),
  Example("Keyboard keys under 50 dollars?","bad"),
  Example("Computer Keyboard switches under 50 dollars?","good"),
  Example("How to push a change in git?","good"),
  Example("where is the park with an old statue?","bad"),
  Example("Why?","bad"),
  Example("Hotels near me?","good"),
  Example("How much does a large cost me?","bad"),
  Example("where can I find help?","bad")
]

@app.route('/entity', methods=['POST'])
def entityRecognize():
    sentence = request.args.get('sentence')
    nlp = spacy.load("en_core_web_sm")
    doc = nlp(sentence)
    return [str(ent) for ent in doc.ents]


@app.route('/userinput', methods=['POST'])
def queryBuild():
    sentence = request.args.get('sentence')
    co = cohere.Client('')

    #response = co.generate(
    #    prompt = prompt,
    #)

    response = co.classify(
    model='large',
    inputs=[sentence],
    examples=examples
    )
    resObj = {
        'prediction': response.classifications[0].prediction,
        'confidence': response.classifications[0].confidence
    }
    res = Response(response = json.dumps(resObj),status = 200, mimetype="text/plain")
    res.headers["Access-Control-Allow-Origin"] = '*'
    res.headers["Access-Control-Expose-Headers"] = '*'
    return res


@app.route('/')
def hello_world():
    return 'Hello from Flask!'

