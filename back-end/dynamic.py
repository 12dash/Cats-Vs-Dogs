from PIL import Image
import numpy as np
from io import BytesIO
import urllib
import tensorflow as tf

def softmax(x):
    e_x = np.exp(x)
    return e_x / e_x.sum()

def make_predictions(t):
    model = tf.keras.models.load_model('saved_model')
    val = model.predict(t.reshape(1, t.shape[0], t.shape[1], t.shape[2]))[0]
    print(val)
    val = softmax(val)
    output = list(val)
    label = output.index(max(output))
    if label == 0:
        res = ("Cat")
    else:
        res = ("Dog")
    return res, (output[0], output[1])


def dynamic_image(url):
    fd = urllib.request.urlopen(url)
    i = Image.open(BytesIO(fd.read()))
    i = np.asarray(i.resize((128, 128)))
    res, output = (make_predictions(i))
    return  res, output
