// best practice is to assign empty brackets instead of using the 'new' keyword
// let daysOfWeek = new Array();
// daysOfWeek = new Array(7);
// daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

let daysOfWeek = [];
daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysOfWeek.length);

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}