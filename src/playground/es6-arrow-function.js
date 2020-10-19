

const user = {
    name: 'Debbie',
    cities: ['Vancouver', 'Sydney', 'St Catherines'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 7,
    printMultiply() {
        return this.numbers.map((number) => 'The array multipled is ' + (number * this.multiplyBy));
    }
}

console.log(multiplier.printMultiply());