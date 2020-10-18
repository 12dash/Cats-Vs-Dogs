import tensorflow as tf

def make_predictions(t):
    model = tf.keras.models.load_model('saved_model')    
    output = list(model.predict(t.reshape(1,t.shape[0],t.shape[1],t.shape[2]))[0])
    label = output.index(max(output))
    if label == 0:
        res = ("Cat")
    else:
        res = ("Dog")
    return res
    