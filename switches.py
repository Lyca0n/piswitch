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
        
def read_one(label):
    swtich=False
    if label in [item.get_label() for item in SWITCHES]:
        switch  = findByName(label)
    else:
        abort(404, "Unable to find record".format(label=label))
        
    return switch.__dict__

def create(switch):
    switch = Switch(switch.get("pin", None), switch.get("label", None))
    
    if PinList.has_value(switch.get_pin()) and switch.get_label() is not None:
        SWITCHES.append(switch)
        return switch.__dict__, 201
    else:
        abort(406, "unable to save")
        
def update(label, switch):
    
    switchRec = findByName(label)
    if switchRec != False:
        if PinList.has_value(switch.get('pin')):
            switchRec.set_pin(switch.get('pin'))
            switchRec.set_label(switch.get('label'))
        else: 
            abort(406, "pin output does not exists")
        return switchRec.__dict__
    else:
        abort(404, "switch not found")
        
def delete(label):
    
    switchRec = findByName(label)
    if switchRec != False:
        SWITCHES.remove(switchRec)
        return make_response(
            "{label} successfully deleted", format(label=label),200
        )
    else:
        abort(404, "swtich {label} not found")
        
def toggle(label):
    switchRec = findByName(label)
    if switchRec != False:
        switchRec.toggle_state()
        return switchRec.__dict__
    else:
        abort(404, "swtich {label} not found")
            
            
def findByName(label):          
    swtich=False
    switchFiltered  = filter(lambda x: x.get_label() == label, SWITCHES)
    if len(switchFiltered)>0:
        switch = switchFiltered[0]
        
    return switch
        