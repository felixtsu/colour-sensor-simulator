function testUnderBlue () {
    coloursensorsim.switchLed(coloursensorsim.LedColour.Blue, true)
    蓝灯照射下的光敏传感器的值 = coloursensorsim.readLightSensorValue() - 环境基线
    coloursensorsim.switchLed(coloursensorsim.LedColour.Blue, false)
}
function testUnderRed () {
    coloursensorsim.switchLed(coloursensorsim.LedColour.Red, true)
    红灯照射下的光敏传感器数值 = coloursensorsim.readLightSensorValue()  - 环境基线
    coloursensorsim.switchLed(coloursensorsim.LedColour.Red, false)
}
function testUnderGreen () {
    coloursensorsim.switchLed(coloursensorsim.LedColour.Green, true)
    绿灯照射下的光敏传感器的值 = coloursensorsim.readLightSensorValue() - 环境基线
    coloursensorsim.switchLed(coloursensorsim.LedColour.Green, false)
}
let 绿灯照射下的光敏传感器的值 = 0
let 红灯照射下的光敏传感器数值 = 0
let 蓝灯照射下的光敏传感器的值 = 0
coloursensorsim.initTest()
let 环境基线 = coloursensorsim.readLightSensorValue()
testUnderRed()
testUnderGreen()
testUnderBlue()
if (蓝灯照射下的光敏传感器的值 < 50 && 绿灯照射下的光敏传感器的值 < 50 && 红灯照射下的光敏传感器数值 < 50) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Black)
} else if (蓝灯照射下的光敏传感器的值 > 50 && 绿灯照射下的光敏传感器的值 > 50) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Yellow)
} else if (红灯照射下的光敏传感器数值 > 100) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Red)
} else if (绿灯照射下的光敏传感器的值 > 100) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Green)
} else if (蓝灯照射下的光敏传感器的值 > 100) {
    coloursensorsim.giveAnswer(coloursensorsim.Colour.Blue)
}
