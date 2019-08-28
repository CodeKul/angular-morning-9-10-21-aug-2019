export abstract class Animal {
    isRpt: boolean
    food: string
    cont: string

    abstract run() : void 
    abstract eat() : void 
    abstract walk() : void 
}