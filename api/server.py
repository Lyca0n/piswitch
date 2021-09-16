"""
Main module of the server file
"""

# 3rd party moudles
import os
from flask import render_template
from flask_cors import CORS
import connexion
import RPi.GPIO as GPIO
from pinlist import PinList

GPIO.setmode(GPIO.BCM)



# Create the application instance
app = connexion.App(__name__, specification_dir="./spec")
#enable CORS
CORS(app.app)

# Read the swagger.yml file to configure the endpoints
app.add_api("swagger.yml")


# create a URL route in our application for "/"
@app.route("/")
def home():
    """
    This function just responds to the browser URL
    localhost:8080/
    :return:        the rendered template "home.html"
    """
    return render_template("home.html")

def setup():
    for pin in PinList:
        GPIO.setup(pin.value, GPIO.OUT)
        GPIO.output(pin.value, GPIO.HIGH)

if __name__ == "__main__":
    setup()
    app.run(host='0.0.0.0', port=os.getenv('PORT', 8080) ,debug=True)