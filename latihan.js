
class Human {
    constructor(props) {
        let { name, address, profession } = props;
        this.name = name;
        this.address = address;
        this.profession = profession;
    }

    work() {
        console.log('Working...');
    }

    inroduce() {
        console.log('hello, my name is ' + this.name);
    }
}

const PublicServer = Base => class extends Base {
    save() {
        console.log('SFX: terima kasih!');
    }
};

const Military = Base => class extends Base {
    shoot() {
        console.log('SFX: dor!');
    }
};

class Doctor extends PublicServer(Human) {
    constructor(props) {
        super({ ...props, profession: 'doctor' });
    }

    work() {
        super.work();
        super.save();
    }
}

class Police extends Military(PublicServer(Human)) {
    constructor(props) {
        super({ ...props, profession: 'police' });
        this.rank = props.rank;
    }

    work() {
        super.work();
        super.save();
        super.shoot();
    }
}

class Army extends Military(PublicServer(Human)) {
    constructor(props) {
        super({ ...props, profession: 'army' });
        this.rank = props.rank;
    }

    work() {
        super.work();
        super.save();
        super.shoot();
    }
}

const writer = new Human({
    name: 'kadek',
    address: 'bali',
    profession: 'writer'
});
console.log(writer);
writer.work();

const doctor = new Doctor({
    name: 'fitri',
    address: 'Padang',
});
console.log(doctor);
doctor.work();

const police = new Police({
    name: 'satria',
    address: 'palembang',
    rank: 'Ipda'
});
console.log(police);
police.work();

const army = new Army({
    name: 'John',
    address: 'Jambi',
    rank: 'Letkol'
});
console.log(army);
army.work();


// Latihan:
// Abstract -> Animal (dilarang membuat object langsung menggunakan kelas animal)
// Helper Jenis Habitat -> Terrestrial, Aquatic, dan Amphibious
/*  Terrestrial:
    Ini mengacu pada makhluk atau organisme yang hidup
    di darat atau di lingkungan daratan.
*/
/*  Aquatic:
    Ini merujuk pada makhluk atau organisme
    yang hidup di dalam air.
*/
/*  Amphibious:
    Ini adalah kata sifat yang digunakan untuk menggambarkan
    makhluk atau kendaraan yang dapat bergerak
    baik di darat maupun di air.
*/
// buat sub-class dari Animal menggunakan helper
// buat 4 object baru

// Kelas abstrak Animal
class Animal {
    constructor(nama, habitat) {
        if (this.constructor === Animal) {
            throw new Error("Tidak bisa membuat objek langsung dari kelas abstrak Animal.");
        }
        this.nama = nama;
        this.habitat = habitat;
    }

    // Metode abstrak
    bersuara() {
        throw new Error("Metode abstrak bersuara() harus diimplementasikan.");
    }
}

// Kelas bantuan untuk jenis habitat
const Terrestrial = Base => class extends Base {
    constructor(props) {
        super({...props, habitat : "Teresstrial"});
    }
    berlari() {
        console.log(`${this.nama} sedang bergerak di darat.`);
    }
}

const Aquatic = Base => class extends Base {
    constructor(props) {
        super({...props, habitat : "Aquatic"});
    }

    berenang() {
        console.log(`${this.nama} sedang berenang di air.`);
    }
}

class Amphibious extends Terrestrial(Aquatic(Animal)) {
    constructor(nama) {
        super(nama, "Amphibious");
    }

    bergerak() {
        console.log(`${this.nama} bisa bergerak di darat dan di air.`);
    }
}

// Sub-kelas dari Animal
class Singa extends Terrestrial(Animal) {
    constructor(nama) {
        super(nama);
    }

    bersuara() {
        console.log(`${this.nama} mengaum.`);
    }
}

class Ikan extends Aquatic {
    constructor(nama) {
        super(nama);
    }

    bersuara() {
        console.log(`${this.nama} mengeluarkan suara berdesir.`);
    }
}

class Katak extends Amphibious {
    constructor(nama) {
        super(nama);
    }

    bersuara() {
        console.log(`${this.nama} mengeluarkan suara "krok-krok".`);
    }
}

class Platipus extends Amphibious {
    constructor(nama) {
        super(nama);
    }

    bersuara() {
        console.log(`${this.nama} mengeluarkan suara unik.`);
    }
}

// Membuat objek
const singa = new Singa("Simba");
const ikan = new Ikan("Nemo");
const katak = new Katak("Kermit");
const platipus = new Platipus("Perry");

// Menguji objek-objek
singa.bergerak();
singa.bersuara();

ikan.berenang();
ikan.bersuara();

katak.bergerak();
katak.berenang();
katak.bersuara();

platipus.bergerak();
platipus.berenang();
platipus.bersuara();
