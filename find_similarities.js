const findDuplicates = (arr) => {
  const uniqueArr = Array.from(new Set(arr));
  const filteredArray = uniqueArr.filter(
    (element) => arr.indexOf(element) !== arr.lastIndexOf(element)
  );
  return filteredArray;
};

function findSimilarities(firstArray, secondArray) {
  const firstArrayFiltered = findDuplicates(firstArray);

  const secondArrayFiltered = findDuplicates(secondArray);

  return firstArrayFiltered.filter((element) =>
    secondArrayFiltered.includes(element)
  );
}

const array1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const array2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
console.log(`First array: [${array1}]`);
console.log(`Second array: [${array2}]`);
console.log("result:", findSimilarities(array1, array2));

//time spent - 8 minutes
