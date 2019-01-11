"""
Main module of the server file
"""

# 3rd party moudles
import os
from flask import render_template
from flask_cors import CORS
import connexion
"""
import RPi.GPIO as GPIO
uncomment this at raspberry pi 
GPIO.setmode(GPIO.BCM)
""" 


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


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.getenv('PORT', 3000) ,debug=True)