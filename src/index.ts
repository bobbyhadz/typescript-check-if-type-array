export {};

// EXAMPLE 1 - Check if a Value is an Array (of type) in TypeScript

const arr: string[] = ['bobby', 'hadz', 'com'];

const isArray = Array.isArray(arr); // 👉️ true

if (Array.isArray(arr)) {
  const isStringArray =
    arr.length > 0 &&
    arr.every((value) => {
      return typeof value === 'string';
    });

  console.log(isStringArray); // 👉️ true
}

// ---------------------------------------------------

// // EXAMPLE 2 - Checking if a value is an array of a specific type in TypeScript

// const arr: string[] = ['bobby', 'hadz', 'com'];

// if (Array.isArray(arr)) {
//   const isStringArray =
//     arr.length > 0 &&
//     arr.every((value) => {
//       return typeof value === 'string';
//     });

//   console.log(isStringArray); // 👉️ true
// }
