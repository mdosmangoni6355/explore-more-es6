class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}
const kodom = new Person('Kodom', 27);
console.log(kodom);
kodom.sleep();
const atik = new Person('Atik', 22);
console.log(atik);
atik.sleep();
