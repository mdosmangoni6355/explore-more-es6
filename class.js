const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'Dell', price: 45000},
    {id: 3, name: 'HP', price: 40000},
    {id: 4, name: 'Mac book', price: 125000}
]

// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('Walton');
// console.log(lenovo);
// lenovo.speak('Kemon Acho');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const myName = new Teacher('Osman', 'Math');
console.log(myName);

const rashid = new Teacher('Rashid', 'ICT');
console.log(rashid);