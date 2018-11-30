#!/usr/bin/python
import RPi.GPIO as GPIO
import time

class manager:
    def __init__(self):
        self._pinList = [2, 3, 4, 17, 27, 22, 10, 9]
  # this should be enabled in pi
  # GPIO.setmode(GPIO.BCM)
  # loop through pins and set mode and state to 'low'
        for i in self._pinList: 
            print(i)
            #GPIO.setup(i, GPIO.OUT)
            # GPIO.output(i, GPIO.HIGH)

    def __del__(self):
        pass
       #GPIO.cleanup()

    def turnOn(self, pin): #GPIO.output(i, GPIO.LOW)
        return True

    def turnOff(self, pin): #GPIO.output(i, GPIO.HIGH)
        return True