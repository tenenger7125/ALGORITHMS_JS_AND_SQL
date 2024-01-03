/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let testedDevice = 0;
    
    batteryPercentages.forEach(batteryPercentage => {
        return batteryPercentage - testedDevice > 0 ? batteryPercentage - testedDevice++ : batteryPercentage - testedDevice;
    })
    
    return testedDevice
};