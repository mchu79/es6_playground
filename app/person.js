import {addToDom} from "./helpers";

class Person {
    constructor(name){
        this.name = name;
    }
    talk(message){
        addToDom("h1", `${this.name}: ${message}`);
    }
    greet(){
        this.talk(`Hello, my name is ${this.name}`);
    }
}

class SuperPerson extends Person {
    constructor(name, superpower){
        super(name);
        this.superpower = superpower;
    }
    saySuperpower(){
        this.talk(`My name is ${this.name} and my superpower is ${this.superpower}`);
    }
}

export default SuperPerson;