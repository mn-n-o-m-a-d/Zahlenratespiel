
const randomNumber = Math.floor(Math.random * 100 + 1);
let inputNumber;


do {

    const inputString = prompt('Bitte geben Sie eine Zahl zwischen 1 und 100 ein:');

    if (inputString === null) {
        break;
    }

    inputNumber = parseInt(inputString);

    if (isNaN(inputNumber)) {
        alert(inputNumber + ' <- Bitte geben Sie eine gültige Zahl ein!');
        continue;
    }

    if (inputNumber < randomNumber) {
        alert(inputNumber + ' <- ist zu klein, bitte geben Sie eine größere Zahl ein!');
    } else if (inputNumber > randomNumber) {
        alert(inputNumber + ' <- ist zu groß, bitte geben Sie eine kleinere Zahl ein!');
    } else {
        alert(inputNumber + ' ist die richtige Zahl!');
    }


} while (inputNumber !== randomNumber);

