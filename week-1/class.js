class Tiger{
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.energy = 100;
        this.isDangerous = true;
    }

    roar(){
        return 'Roarrrrr';
    }

    die(){
        return this.isDangerous = false;
    }

}

class Cat extends Tiger{
    constructor(name, height, weight){
        super(name, height, weight);
        this.energy = 10;
        this.isDangerous = false;
    }

    roar(){
        return 'Meoww';
    }

    die(){
        return this.isDangerous = false;
    }
}

const tiger = new Tiger('Macan Kumbang', 70, 50);
const kucing = new Cat('Garfille', 30, 20);

console.log(tiger);
tiger.die();
console.log(tiger);
console.log(tiger.roar());


console.log(kucing);


/**
 * 1. Buatlah class dengan nama Tiger, yang mana class Tiger memiliki:
 *  attributes:
 *    - name          = (mengambil input dari constructor)
 *    - height        = (mengambil input dari constructor)
 *    - weight        = (mengambil input dari constructor)
 *    - energy        = 100
 *    - isDangerous   = true
 *  method:
 *    - roar          = mengeluarkan output/return "Roarrrrr"
 *    - die           = merubah isDangerous menjadi false
 */


/**
 * 2. Buatlah class dengan nama Cat yang mana adalah child dari class Tiger (extent Tiger)
 *  attributes:
 *    - name          = (mengambil input dari constructor)
 *    - height        = (mengambil input dari constructor)
 *    - weight        = (mengambil input dari constructor)
 *    - energy        = 10
 *    - isDangerous   = false
 *  method:
 *    - roar          = mengeluarkan output/return "Meoww"
 *    - die           = merubah isDangerous menjadi false
 */