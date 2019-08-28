import { GpsListener } from './gps-listener';
import { Animal } from './animal';
export class Lion extends Animal implements GpsListener { // is a 
    size: number
    weight: number

    run() {
        console.log(`Tiger is runnig`)
    }
    walk() {
        console.log(`Lion is Walking`)
    }
    eat() {
        console.log(`Lion is Eating`)
    }
    locate(lat: number, lng: number) {
        console.log(`Lat is ${lat} Lng is ${lng}`)
    }
}

let lion = new Lion()
lion.run()
lion.locate(56, 89)

lion.cont = 'India'
lion.food = 'carn'
lion.isRpt = false
lion.size = 50
lion.weight = 150


