from port import GPIOPort

import json


class Switch(GPIOPort):
    def __init__(self, pin, label):
        GPIOPort.__init__(self,pin)
        self.state = False
        self.label = label        
        
    def set_label(self,label):
        self.label = label
        
    def get_label(self):
        return self.label               

    def set_pin(self,pin):
        self.pin = pin
        
    def get_pin(self):
        return self.pin

    def toggle_state(self):
        if self.state : 
            self.turnOff()
        else:
            self.turnOn()
        
        self.state = not self.state
    