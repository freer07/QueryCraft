import cohere


def queryBuilder(prompt):
    co = cohere.Client('api_key')

    response = co.generate(
        prompt = prompt,
    )
    return response