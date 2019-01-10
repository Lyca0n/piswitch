export default(pins, switches)=>{
    const taken = switches.map(switchinfo => switchinfo.pin);
    return pins.filter((pin)=> !taken.includes(pin.number)).sort((a,b)=> a.number<b.number);
};