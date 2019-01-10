from enum import IntEnum
class PinList(IntEnum):
    pin1 = 2
    pin2 = 3
    pin3 = 4
    pin4 = 17
    pin5 = 27
    pin6 = 22
    pin7 = 10
    pin8 = 9

    @classmethod     
    def has_value(cls, value):
        return any(value == item.value for item in cls)