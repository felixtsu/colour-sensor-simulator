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

    let speed = 1;

    export function setSpeed(speed:number) {
        speed = speed
    }
    
    export function giveAnswer(colour:Colour) {
        console.log("receiving answer:" + colour + ", actual answer: " + currentBoxColour)
        if (colour == currentBoxColour) {
            game.over(true)
        } else {
            game.over(false)
        }
    }

    export function initTest() {
        currentBoxColour = Math.pickRandom([Colour.Red, Colour.Green,
         Colour.Black, Colour.Blue, Colour.Yellow])
         redLedOn = false
         greenLedOn = false
         blueLedOn = false
    }

    export function pause(millis:number) {
        pause(millis * speed)
    }

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

    export function readLightSensorValue() :number {
        let result = randint(0, 1000)
        console.log("light sensor under [RGB]:[" + redLedOn + "|" + greenLedOn +  "|"  + blueLedOn + "]=" + result)
        return result
    }

}
