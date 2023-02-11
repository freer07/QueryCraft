import cohere
import os

def queryBuilder(prompt):
    co = cohere.Client(os.environ['COHERE_API_KEY'])

    response = co.generate(
        prompt = prompt,
    )
    return response