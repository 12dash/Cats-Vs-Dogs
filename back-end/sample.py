from PIL import Image
import os
import numpy as np
import matplotlib.pyplot as plt
from models import make_predictions
from io import BytesIO


def make_prediction(a):
    i = Image.open(BytesIO(a))
    i = np.asarray(i.resize((128, 128)))
    res = (make_predictions(i))
    return res


def sample_start(a):
    return make_prediction(a)
