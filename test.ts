// 在此处添加您的代码
coloursensorsim.initTest()

let baselineValue = coloursensorsim.readLightSensorValue()

coloursensorsim.switchLed(coloursensorsim.LedColour.Red, true)
let redRelectionValue = coloursensorsim.readLightSensorValue()
coloursensorsim.switchLed(coloursensorsim.LedColour.Red, false)

coloursensorsim.switchLed(coloursensorsim.LedColour.Green, true)
let greenRelectionValue = coloursensorsim.readLightSensorValue()
coloursensorsim.switchLed(coloursensorsim.LedColour.Green, false)

coloursensorsim.switchLed(coloursensorsim.LedColour.Blue, true)
let blueRelectionValue = coloursensorsim.readLightSensorValue()
coloursensorsim.switchLed(coloursensorsim.LedColour.Blue, false)

let deltaRed = redRelectionValue - baselineValue
let deltaGreen = greenRelectionValue - baselineValue
let deltaBlue = blueRelectionValue - baselineValue

if (deltaRed > 100 && deltaGreen > 100 && deltaBlue > 100) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Black)
} else {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Red)
}