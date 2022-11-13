//
//  Object destructuring
//

// const person = {
//   name: "Kyle",
//   age: 29,
//   location: {
//     city: "San Diego",
//     temp: 65,
//   },
// };

// const { name: firstName = "Anonymous", age = "69" } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
//  Array destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

// grab first and third items using array destructuring

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
