// 在此处添加您的代码
namespace coloursensorsim {

    export enum Colour {
        Red, 
        Green,
        Black,
        Blue,
        Yellow
    }

    export enum LedColour {
        Red, Green, Blue
    }

    let currentBoxColour :Colour
    let redLedOn : boolean
    let greenLedOn : boolean
    let blueLedOn : boolean
    let environmentLight : number

    let speed = 1;

    //%block
    //%blockid=coloursensorsimsetspeed block="set simulator speed to %speed"
    export function setSpeed(speed:number) {
        speed = speed
    }
    
    //%block
    //%blockid=coloursensorsimgiveanswer block="give answer %colour"
    export function giveAnswer(colour:Colour) {
        console.log("receiving answer:" + colour + ", actual answer: " + currentBoxColour)
        if (colour == currentBoxColour) {
            game.over(true)
        } else {
            game.over(false)
        }
    }

    //%block
    //%blockid=coloursensorsiminit block="init new test"
    export function initTest() {
        currentBoxColour = Math.pickRandom([Colour.Red, Colour.Green,
         Colour.Black, Colour.Blue, Colour.Yellow])
         redLedOn = false
         greenLedOn = false
         blueLedOn = false

         environmentLight = randint(100,200) // mimic random environment light level;
    }

    //%block
    //%blockid=coloursensorsimpause block="pause %millis"
    export function pause(millis:number) {
        pause(millis * speed)
    }

    //%block
    //%blockid=coloursensorsimswitchled block="switch %ledColour LED to %on"
    export function switchLed(ledColour : LedColour, on:boolean) {
        switch(ledColour) {
            case LedColour.Red: 
                redLedOn = on; 
                break;
            case LedColour.Green: 
                greenLedOn = on; 
                break;
            case LedColour.Blue: 
                blueLedOn = on; 
                break;
        }
    }

    //%block
    //%blockid=coloursensorsimreadlightsensor block="read current light sensor value under LEDs status"
    export function readLightSensorValue() :number {
        // TODO: sim return value according to RGB on/off and box colour combinations

        let result = environmentLight

        if (redLedOn && currentBoxColour == Colour.Red) {
            result += randint(100, 200) // led:box colour match
        }

        if (greenLedOn && currentBoxColour == Colour.Green) {
            result += randint(100, 200) // led:box colour match
        }

        if (blueLedOn && currentBoxColour == Colour.Blue) {
            result += randint(100, 200) // led:box colour match
        }

        if (blueLedOn && currentBoxColour == Colour.Yellow) {
            result += randint(50, 100)
        }

        if (greenLedOn && currentBoxColour == Colour.Yellow) {
            result += randint(50, 100)
        }

        console.log("light sensor under [RGB]:[" + redLedOn + "|" + greenLedOn +  "|"  + blueLedOn + "]=" + result)
        return result
    }

}
