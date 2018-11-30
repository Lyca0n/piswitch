from pinlist import PinList

# 3rd party modules
from flask import make_response, abort
import time

SWITCHES = {
    "Pump": {
        "state": False,
        "pin": int(PinList.pin1),
    },
    "lamp": {
        "state": False,
        "pin":  int(PinList.pin2),
    },
    "sensor": {
        "state": False,
        "pin":  int(PinList.pin3),
    },
}


def read_all():
    """
    This function responds to a request for /api/switches
    with the complete lists of switches
    :return:        json string of list of switches
    """
    return [SWITCHES[key] for key in sorted(SWITCHES.keys())]
        
def read_one(label):
    if label in SWITCHES:
        switch  = SWITCHES.get(label)
        
    else:
        abort(404, "Unable to find record".format(label=label))
        
    return switch    

def create(switch):
    switchName =  switch.get("label", None)
    pin = switch.get("pin", None)
    
    if switchName not in SWITCHES and PinList.has_value(pin) and switchName is not None:
        SWITCHES[switchName] = {
            "state" : False,
            "pin": pin,
        }
        return SWITCHES[switchName], 201
    else:
        abort(406, "unable to save")
        
def update(label, switch):
    
    if label in SWITCHES:
        if PinList.has_value(switch.get('pin')):
            SWITCHES[label]["pin"] = switch.get('pin')
        else: 
            abort(406, "pin output does not exists")
        SWITCHES[label]["state"] = switch.get('state')
        
        return SWITCHES[label]
    else:
        abort(404, "switch not found")
        
def delete(label):
    if label in SWITCHES:
        del SWITCHES[label]
        return make_response(
            "{label} successfully deleted", format(label=label),200
        )
    else:
        abort(404, "swtich {label} not found")
        
    