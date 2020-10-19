var nameVar = 'Debbie';
//CAN redefine causing hard to debug situations
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
//cannot redefine
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//cannot redefine
console.log('nameConst', nameConst);

const fullName = 'Debbie Dang';
if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);