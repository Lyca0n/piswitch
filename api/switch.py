from port import GPIOPort

import json


class Switch(GPIOPort):
    def __init__(self, pin, label):
        GPIOPort.__init__(self,pin)
        self._state = False
        self._label = label
        
    def set_label(self,label):
        self._label = label
        
    def get_label(self):
        return self._label               

    def set_pin(self,pin):
        self._pin = pin
        
    def get_pin(self):
        return self._pin

    def toggle_state(self):
        if self._state : 
            self.turnOff()
        else:
            self.turnOn()
        
        self._state = not self._state
    