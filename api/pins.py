from pinlist import PinList
import uuid

pins = {"pins" :[{'number' : pin.value, 'id': uuid.uuid4() } for pin in sorted(PinList)]}
 

def read_all():
    """
    This function responds to a request for /api/pins
    with the complete lists of application/json
    :return:        json string of list of application/json
    """
    return pins