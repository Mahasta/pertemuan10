
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