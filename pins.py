from pinlist import PinList

 

def read_all():
    """
    This function responds to a request for /api/pins
    with the complete lists of application/json
    :return:        json string of list of application/json
    """
    return {"pins" :[{pin.name : pin.value} for pin in sorted(PinList)]}