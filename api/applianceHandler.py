from pinlist import PinList
from appliance import Appliance

# 3rd party modules
from flask import make_response, abort
import time
import json

switch1 = Appliance(4, "Lamp")
switch = Appliance(2, "Pump")


APPLIANCES = [
        switch,
        switch1
    ]

def read_all():
    """
    This function responds to a request for /api/switches
    with the complete lists of switches
    :return:        json string of list of switches
    """
    print(len(APPLIANCES))
    return {"appliances" : list(appliance.__dict__ for appliance in APPLIANCES)}
        
def read_one(id): 
    appliance = findById(id)
    if appliance == False:
        abort(404, "Unable to find record".format(id=id))        
    return appliance.__dict__

def create(appliance):
    appliance = Appliance(appliance.get("pin", None), appliance.get("label", None))    
    if PinList.has_value(appliance.get_pin()) and appliance.get_label() is not None:
        APPLIANCES.append(appliance)
        return appliance.__dict__, 201
    else:
        abort(406, "Unable to save")
        
def update(id, appliance):
    appRec = findById(id)
    if appRec != False:
        if PinList.has_value(appliance.get('pin')):
            appRec.set_pin(appliance.get('pin'))
            appRec.set_label(appliance.get('label'))
        else: 
            abort(406, "pin output does not exists")
        return appRec.__dict__,200
    else:
        abort(404, "appliance not found")
        
def delete(id):    
    appRec = findById(id)
    if appRec != False:
        APPLIANCES.remove(appRec)
        return make_response(
            "{id} successfully deleted", format(label=label),200
        )
    else:
        abort(404, "swtich {id} not found")
        
def toggle(id):
    appRec = findById(id)
    if appRec != False:
        appRec.toggle_state()
        return appRec.__dict__
    else:
        abort(404, "swtich {id} not found")            

def findById(id):          
    appliance=False    
    applianceFiltered  = list(filter(lambda x: x.get_id() == id, APPLIANCES))
    if len(applianceFiltered)>0:
        appliance = applianceFiltered[0]
        
    return appliance
                