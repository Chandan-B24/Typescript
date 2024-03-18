type Class = new (...args : any) => any;


function FatherMixin<Base extends Class>(base : Base){
    return class extends base{
        fatherName : string = ''
        displayFatherName(){
        return this.fatherName
    }

    }
}

function MotherMixin<Base extends Class>(base : Base){
    return class extends base{
        motherName : string = ''
        displayMotherName(){
            return this.motherName
        }

    }
}

let MixinFatherMother = FatherMixin(MotherMixin(class{

}));



// class Father {
//     fatherName : string = ''
//     displayFatherName(){
//         return this.fatherName
//     }

//     constructor(fatherName : string){
//         this.fatherName = fatherName;
//     }
// }

// class Mother {
//     motherName : string = ''
//     displayFatherName(){
//         return this.motherName
//     }

//     constructor(motherName : string){
//         this.motherName = motherName;
//     }
// }


class child extends MixinFatherMother{
    childname :string
    constructor(fatherName:string,motherName : string,childName:string){
        super()
        this.childname = childName;
        this.fatherName = fatherName;
        this.motherName = motherName;
    }

    displayFather(){
        return super.displayFatherName()
    }

    displayMother(){
        return super.displayMotherName()
    }

    displayChild(){
        return this.childname;
    }
}

let obj10 = new child('John','Joe','Deep');
console.log(obj10.displayFather());
console.log(obj10.displayMother());
console.log(obj10.displayChild());