//
// Object destructuring
//

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
// Array Destructuring
//

// const address = ["1299 S Juniper Street", "San Diego", "California", "92101"];
// const [, city = "Manhattan", state = "New York"] = address;
// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
