class Human{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    introduce(){
        console.log( `Hello, my name is ${this.name}!`)
    }

    work(){
        console.log(`Working....`)
    }
}

class Programmer extends Human{
    constructor(name,address, programmingLanguages){
        super(name,address);
        this.programmingLanguages = programmingLanguages;
    }
    // override
    introduce(){
        console.log( `Halo, nama saya adalah ${this.name}!`)
    }

    //overload
    introduce(withDetail){
        super.introduce()
        console.log(withDetail ? 'i can do '+ withDetail: 'input salah!')
    }

    _call(){

    }
    code(){
        console.log(`Code some `+ this.programmingLanguages[Math.floor(Math.random()*this.programmingLanguages.length)])
    }
}

let be  = new Programmer("Alif", "Jakarta", ["Javascript","CSS","HTML"])
console.log(be);
console.log(be.name)
console.log(be.address)
console.log(be.programmingLanguages)
be.introduce('kayang')
be.code()


class BackendDeveloper extends Programmer{
    constructor(name,address, programmingLanguages, framework){
        super(name,address, programmingLanguages);
        this.framework = framework;
    }

    code(endpoint){
        console.log(`${this.name} build ${endpoint}`)
        this.#encrypt(`password 123`)
    }

    #encrypt(password){
        console.log(password)
    }
}

let luthfi = new BackendDeveloper('Luthfi',`Jepang`,`js`)
luthfi.code('api/v1/users')

// make a recursive function except factorial
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8))