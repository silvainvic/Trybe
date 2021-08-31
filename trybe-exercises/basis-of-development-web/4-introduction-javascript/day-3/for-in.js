let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let i in names) {
    console.log("Ola, %s", names[i])
}

for (let i in names) {
    console.log("%s = %s", i, names[i]); 
}

for (let i in car) {
    formatToJson(car, "Car");
}

// Funcao simples para formatacao e identacao da string.
function formatToJson(obj, name) {
    let string = new String(),
        inf = [];
    string += (name + " {");
    for (let i in obj) {
        inf = [i, obj[i]];
        string += "\n  \"" + inf[0] + "\": \"" + inf[1] + "\"";
    }
    string += "\n}"
    console.log(string);
}
