#!/usr/bin/python
import RPi.GPIO as GPIO
import time

#soported on my setup [2, 3, 4, 17, 27, 22, 10, 9]

class GPIOPort:
    def __init__(self, pin):
        
        self.pin = pin
        GPIO.setup(pin, GPIO.OUT)
        GPIO.output(pin, GPIO.HIGH)

    def __del__(self):        
       GPIO.cleanup()

    def turnOn(self): 
        GPIO.output(self.pin, GPIO.LOW)
        return True

    def turnOff(self): 
        GPIO.output(self.pin, GPIO.HIGH) 
        return True