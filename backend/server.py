
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, json, request
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
  Example("Where can find a place to crash tonight?","good"),
  Example("what is a wrench useful for?","bad"),
  Example("How far is Toronto?", "good"),
  Example("What can I do today in my town?","good"),
  Example("How can I copy paste in vim?","good"),
  Example("Why is Vim not working?","bad"),
  Example("Why does my heart hurt?","bad"),
  Example("Why do I crave death?","bad"),
  Example("My headaches is getting worse, where can I find help?","good")
]



@app.route('/userinput', methods=['GET'])
def queryBuild():
    co = cohere.Client('')

    #response = co.generate(
    #    prompt = prompt,
    #)

    response = co.classify(
    model='large',
    inputs=["this is a test"],
    examples=examples
    )
    return response.classifications


@app.route('/')
def hello_world():
    return 'Hello from Flask!'