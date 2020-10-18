from flask import Flask, request
from flask_cors import CORS, cross_origin
from sample import sample_start
from dynamic import dynamic_image


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "<h1>This is the backend server for the Cats vs Dogs Prediction models</h1>"


@app.route("/sample_images", methods=['POST'])
def samples():
    print("Samples has been called ... ")
    pic = (request.data)
    a = sample_start(pic)
    return a

@app.route("/predict", methods=['POST'])
def predict_single():
    print("predict_single has been called ... ")
    pic = (request.get_json()['url'])
    a,b = dynamic_image(pic)
    return {"out" : a, "Cat" : str(b[0]*100), "Dog" : str(b[1]*100)}


if __name__ == "__main__":
    app.run(debug=True, use_reloader= False)

CORS(app, expose_headers='Authorization')
