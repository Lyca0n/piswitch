from pinlist import PinList
from switch import Switch

# 3rd party modules
from flask import make_response, abort
import time
import json

switch1 = Switch(4, "Lamp")
switch = Switch(2, "Pump")


SWITCHES = [
        switch,
        switch1
    ]

def read_all():
    """
    This function responds to a request for /api/switches
    with the complete lists of switches
    :return:        json string of list of switches
    """
    print(len(SWITCHES))
    return {"switches" : list(switch.__dict__ for switch in SWITCHES)}
        
def read_one(pin):
    swtich=False    
    if pin in [item.get_pin() for item in SWITCHES]:
        switch  = findByPin(pin)
    else:
        abort(404, "Unable to find record".format(label=label))        
    return switch.__dict__

def create(switch):
    switch = Switch(switch.get("pin", None), switch.get("label", None))    
    if PinList.has_value(switch.get_pin()) and switch.get_label() is not None:
        SWITCHES.append(switch)
        return switch.__dict__, 201
    else:
        abort(406, "Unable to save")
        
def update(pin, switch):
    print(pin)
    switchRec = findByPin(pin)
    if switchRec != False:
        if PinList.has_value(switch.get('pin')):
            switchRec.set_pin(switch.get('pin'))
            switchRec.set_label(switch.get('label'))
        else: 
            abort(406, "pin output does not exists")
        return switchRec.__dict__,200
    else:
        abort(404, "switch not found")
        
def delete(pin):    
    switchRec = findByPin(pin)
    if switchRec != False:
        SWITCHES.remove(switchRec)
        return make_response(
            "{pin} successfully deleted", format(label=label),200
        )
    else:
        abort(404, "swtich {pin} not found")
        
def toggle(pin):
    switchRec = findByPin(pin)
    if switchRec != False:
        switchRec.toggle_state()
        return switchRec.__dict__
    else:
        abort(404, "swtich {pin} not found")            

def findByPin(pin):          
    swtich=False
    switchFiltered  = list(filter(lambda x: x.get_pin() == int(pin), SWITCHES))
    if len(switchFiltered)>0:
        switch = switchFiltered[0]
        
    return switch
                