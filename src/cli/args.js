//args.js - implement function that parses command line arguments
//(given in format --propName value --prop2Name value2, you don't need to validate it)
// and prints them to the console in the format propName is value, prop2Name is value2

const parseArgs = () => {
    const arrayOfArguments = process.argv;
    const propsArray = [];
    const valuesArray = [];
    for (let i = 2; i < arrayOfArguments.length; i += 2) {
      propsArray.push(arrayOfArguments[i].substring(2));
    }
    for (let i = 3; i < arrayOfArguments.length; i += 2) {
      valuesArray.push(arrayOfArguments[i]);
    }
    let result = "";
    for (let i = 0; i < propsArray.length; i++) {
      result += `${propsArray[i]} is ${valuesArray[i]}, `;
    }
    console.log(result.substring(0, result.length - 2));
    return result.substring(0, result.length - 2);
  };
  
  parseArgs();
  