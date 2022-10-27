function capitalizeFirstLetter(stringToCapitalize) {
  let finalString =
    stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1);
  return finalString;
}

function concatenateStrings(stringOne, stringTwo) {
  return stringOne.concat("", stringTwo);
}

function returnSecondWord(stringWithAllWords) {
  let stringArray = stringWithAllWords.split(" ");
  return stringArray[1];
}

export { capitalizeFirstLetter, concatenateStrings, returnSecondWord };
