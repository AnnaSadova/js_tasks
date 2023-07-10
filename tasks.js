console.log("~~~Task 1~~~");

function calculateDiff(arr) {
  if (arr.length <= 1) {
    return 0;
  } else {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1] - sortedArr[0];
  }
}

console.log(calculateDiff([1, 2, 3, -4]));
console.log(calculateDiff([-165, 123, 233, 23]));
console.log(calculateDiff([123958]));

//////////////////////////////////////////////

console.log("\n ~~~Task 2~~~");

function wordsLengthChecker(word, num) {
  let wordsArr = [];
  if (word.length > num) {
    wordsArr.push(word);
    return wordsArr;
  }
}

console.log(wordsLengthChecker("Milka", 3));
console.log(wordsLengthChecker("Ivan", 2));
console.log(wordsLengthChecker("Roman", 6));

//////////////////////////////////////////////

console.log("\n~~~Task 3~~~");

const ifEndsWith = (mainStr, checkStr) => mainStr.endsWith(checkStr);

console.log(ifEndsWith("abc", "bc"));
console.log(ifEndsWith("abc", "d"));

//////////////////////////////////////////////

console.log("\n~~~Task 4~~~");

function averageNum(arrOfNum) {
  let results = [];
  for (let i = 0; i < arrOfNum.length - 1; i++) {
    let average = (arrOfNum[i] + arrOfNum[i + 1]) / 2;
    results.push(average);
  }
  return results;
}

console.log(averageNum([2, -2, 2, -2, 2]));
console.log(averageNum([1, 3, 5, 1, -10]));

//////////////////////////////////////////////

console.log("\n~~~Task 5~~~");

function countVowels(stringWithVowels) {
  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let letter of stringWithVowels.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

//////////////////////////////////////////////

console.log("\n~~~Task 5.2~~~");

function removeABC(unformattedString) {
  let result = "";
  let strWithABC = false;
  for (let i = 0; i < unformattedString.length; i++) {
    let letter = unformattedString.charAt(i);
    if (letter === "a" || letter === "b" || letter === "c") {
      strWithABC = true;
    } else {
      result += letter;
    }
  }
  if (strWithABC) {
    return result;
  } else {
    return null;
  }
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

//////////////////////////////////////////////

console.log("\n~~~Task 6~~~");

function numbers(arrOfNum, arrWithNum) {
  const uniqeElements = [];
  let duplicates = {};
  const stringifyArr = arrOfNum.concat(arrWithNum);
  for (let i = 0; i < stringifyArr.length; i++) {
    let currentElement = stringifyArr[i];
    if (!duplicates[currentElement]) {
      duplicates[currentElement] = true;
      uniqeElements.push(currentElement);
    }
  }
  return uniqeElements;
}

console.log(numbers([1, 2, 3], [100, 2, 1, 10]));
console.log(numbers([11, 44, 7], [1, 7, 7, 1]));

//////////////////////////////////////////////

console.log("\n~~~Task 7~~~");

function objectCopy(obj) {
  const updatedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    updatedObj[value] = key;
  });
  return updatedObj;
}

console.log(objectCopy({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));

//////////////////////////////////////////////

console.log("\n~~~Task 8~~~");

function calculateDifference(stolenItems, insurance) {
  let sumOfStolenItems = Object.values(stolenItems).reduce((acc, cur) => {
    return acc + cur;
  });
  return sumOfStolenItems - insurance;
}
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//////////////////////////////////////////////

console.log("\n~~~Task 9~~~");

const doesBrickFit = (a, b, c, w, h) => {
  return (a <= h && b <= w) ||
    (a <= w && b <= h) ||
    (a <= h && c <= w) ||
    (a <= w && c <= h) ||
    (b <= h && c <= w) ||
    (b <= w && c <= h)
    ? true
    : false;
};

console.log(doesBrickFit(1, 2, 3, 4, 5));
console.log(doesBrickFit(1, 2, 3, 2, 5));
console.log(doesBrickFit(1, 2, 3, 1, 1));

//////////////////////////////////////////////

console.log("\n~~~Task 10~~~");

function findFileName(fullPath) {
  let arrPath = Array.from(fullPath);
  let lastSlash = arrPath.lastIndexOf("\\");
  let fileName = arrPath.slice(lastSlash + 1);
  return fileName.slice(0, fileName.indexOf(".")).join("");
}

console.log(findFileName("c:\\WebServers\\home\\testsite\\www\\myfile.txt"));
// Prettier видаляє одинарний слеш :(

//////////////////////////////////////////////

console.log("\n~~~Task 11~~~");

function ifIncludes(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }
  let uptatedSecondString = secondString + secondString;
  if (uptatedSecondString.includes(firstString)) {
    return true;
  } else {
    return false;
  }
}

console.log(ifIncludes("ghjkl", "klghj"));
console.log(ifIncludes("abcde", "deabc"));
console.log(ifIncludes("conac", "cona"));
console.log(ifIncludes("ghjkl", "klghf"));

//////////////////////////////////////////////

console.log("\n~~~Task 12~~~");

function sortingArrays(arr) {
  if (arr.length % 2 !== 0) {
    return "Number of elements inside an array must be even";
  }
  const sortedArr = [...arr].sort((a, b) => a - b);
  const b = [];
  const c = [];
  for (let i = sortedArr.length - 1; i >= 0; i -= 2) {
    b.push(sortedArr[i - 1]);
    c.push(sortedArr[i]);
  }
  return {
    b,
    c,
  };
}

console.log(sortingArrays([1, 5, 3, 7, 2, 9, 6, 4]));
console.log(sortingArrays([1, 2, 3]));
console.log(sortingArrays([]));

//////////////////////////////////////////////

console.log("\n~~~Task 13~~~");

function updatingString(str) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const linkRegex = /https?:\/\/\S+/;
  const words = str.toLowerCase().split(" ");
  const modifiedWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    if (emailRegex.test(word)) {
      return "[контакти заборонені]";
    }
    if (linkRegex.test(word)) {
      return "[посилання заборонені]";
    }
    return word;
  });
  return modifiedWords.join(" ");
}

console.log(
  updatingString("Today magento.14@gmail.com has joined the https://react.net")
);

//////////////////////////////////////////////

console.log("\n~~~Task 14~~~");

function checkBrackets(str) {
  const amount = [];
  for (let i = 0; i < str.length; i++) {
    const unit = str[i];
    if (unit === "(") {
      amount.push(unit);
    } else if (unit === ")") {
      if (amount.length === 0) {
        return "Втрачено відкриваючу дужку '('";
      }
      amount.pop();
    }
  }
  if (amount.length > 0) {
    return "Втрачено закриваючу дужку ')'";
  }
  return "Баланс дужок вірний";
}

console.log(checkBrackets("((Test string)"));
console.log(checkBrackets("(Test string))"));
console.log(checkBrackets("((Test string))"));

//////////////////////////////////////////////

console.log("\n~~~Task 15~~~");

function generatePassword() {
  const minLength = 6;
  const maxLength = 20;
  const maxConsecutiveDigits = 1;
  const maxDigits = 5;
  const allowedChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
  let password = "";
  let consecutiveDigitsCount = 0;
  let uppercaseCount = 0;
  let underscoreExists = false;
  while (password.length < maxLength) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    const randomChar = allowedChars[randomIndex];
    if (randomChar === "_") {
      if (!underscoreExists && password.length < maxLength - 1) {
        password += randomChar;
        underscoreExists = true;
      }
    } else if (randomChar >= "A" && randomChar <= "Z") {
      if (uppercaseCount < 2 && password.length < maxLength - 1) {
        password += randomChar;
        uppercaseCount++;
      }
    } else if (randomChar >= "0" && randomChar <= "9") {
      if (
        consecutiveDigitsCount < maxConsecutiveDigits &&
        password.length < maxLength - 1
      ) {
        password += randomChar;
        consecutiveDigitsCount++;
      } else if (
        password.match(/\d/g) &&
        password.match(/\d/g).length < maxDigits &&
        password.length < maxLength - 1
      ) {
        password += randomChar;
        consecutiveDigitsCount = 1;
      }
    } else {
      if (password.length < maxLength) {
        password += randomChar;
      }
    }
    if (password.length >= minLength) {
      const consecutiveDigitsRegex = new RegExp(
        `\\d{${maxConsecutiveDigits + 1},}`
      );
      if (consecutiveDigitsRegex.test(password)) {
        password = "";
        consecutiveDigitsCount = 0;
        uppercaseCount = 0;
        underscoreExists = false;
      }
    }
  }
  return password;
}

console.log(generatePassword());

//////////////////////////////////////////////

console.log("\n~~~Task 16~~~");

function sortingArr(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const resultArr = [...sortedArr];
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      resultArr[left] = sortedArr[i];
      left++;
    } else {
      resultArr[right] = sortedArr[i];
      right--;
    }
  }
  return resultArr;
}

console.log(sortingArr([1, 2, 3, 4, 5]));

//////////////////////////////////////////////

console.log("\n~~~Task 17~~~");

function sortByFrequency(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  const charCountArray = [];
  for (let char in charCount) {
    charCountArray.push([char, charCount[char]]);
  }
  charCountArray.sort((a, b) => b[1] - a[1]);
  let result = "";
  for (let i = 0; i < charCountArray.length; i++) {
    const [char, count] = charCountArray[i];
    result += char.repeat(count);
  }
  return result;
}

console.log(sortByFrequency("aalllow"));
console.log(sortByFrequency("abbbbbgggggggds"));
console.log(sortByFrequency("bbgfffrrrr"));

//////////////////////////////////////////////

console.log("\n~~~Task 18~~~");

const theLongestString = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    return "Incorrect data";
  const column = str1.length + 1;
  const row = str2.length + 1;
  const matrix = new Array(row).fill(0).map(() => new Array(column).fill(0));
  let maxLength = 0;
  let lastIndex = 0;
  for (let i = 1; i < row; i++) {
    if (str2[i - 1] === " ") continue;
    for (let j = 1; j < column; j++) {
      if (str1[j - 1] === " ") continue;
      if (str2[i - 1] === str1[j - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1;
      if (matrix[i][j] > maxLength) {
        maxLength = matrix[i][j];
        lastIndex = i;
      }
    }
  }
  return str2.slice(lastIndex - maxLength, maxLength);
};

console.log(theLongestString("mitelephone", "telephone")); // ericandre
console.log(theLongestString("asdfgdfuriousfg", "furious")); // ring

//////////////////////////////////////////////

console.log("\n~~~Task 19~~~");

const caesar = (str, number) => {
  if (typeof str !== "string" || isNaN(number)) return "Incorrect data";
  const mainStr = "abcdefghijklmnopqrstuvwxyz";
  return str.split("").reduce((acum, item, index) => {
    if (!mainStr.includes(item.toLowerCase())) return (acum += item);
    const indexValue = mainStr.indexOf(item.toLowerCase());
    const char = mainStr[(indexValue + number) % mainStr.length];
    return str[index] === str[index].toUpperCase()
      ? (acum += char.toUpperCase())
      : (acum += char);
  }, "");
};
console.log(
  caesar(
    "Alaska is the largest by territory and the most complete state of the USA",
    11
  )
);

//////////////////////////////////////////////

console.log("\n~~~Task 20~~~");

const anagramma = (firstLine, secondLine) => {
  if (firstLine.length !== secondLine.length) return false;
  while (firstLine.length) {
    if (secondLine.includes(firstLine[0])) {
      secondLine = secondLine.replace(firstLine[0], "");
      firstLine = firstLine.slice(1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(anagramma("debit card", "bad credit"));
console.log(anagramma("eleven plus two", "twelve plus one"));
console.log(anagramma("eleven plus two", "two plus one"));

//////////////////////////////////////////////

console.log("\n~~~Task 21~~~");

const University = {
  students: [],

  addStudent(student) {
    this.students.push(student);
  },

  deleteStudent(studentId) {
    this.students = this.students.filter((student) => student.id !== studentId);
  },

  getStudentById(studentId) {
    return this.students.find((student) => student.id === studentId);
  },

  getStudentsByCourse(course) {
    return this.students.filter((student) => student.course === course);
  },

  getStudentsByFaculty(faculty) {
    return this.students.filter((student) => student.faculty === faculty);
  },
};

University.addStudent({
  id: 1,
  name: "Mary Mart",
  course: "Draw",
  faculty: "Architect",
});

University.addStudent({
  id: 2,
  name: "Anete Fary",
  course: "Chemistry",
  faculty: "Science",
});

University.addStudent({
  id: 3,
  name: "Andrew Bone",
  course: "Surgery",
  faculty: "Science",
});

console.log(University.students);
console.log("\n2---------");
console.log(University.getStudentById(1));
console.log("\n3---------");
console.log(University.getStudentsByCourse("Draw"));
console.log("\n4---------");
console.log(University.getStudentsByFaculty("Science"));
University.deleteStudent(2);

//////////////////////////////////////////////

console.log("\n~~~Task 22~~~");

function analyzeText(text) {
  text = text.replace(/\s+/g, " ").trim();
  const charCount = text.length;
  const wordCount = text.split(" ").filter((word) => word !== " ").length;
  const sentenceCount = text
    .split(/[.?!]/g)
    .filter((sentence) => sentence !== "").length;
  return {
    charCount,
    wordCount,
    sentenceCount,
  };
}
function findMostFrequentWords(text, count) {
  const cleanText = text.replace(/[^\w\s]/g, "").toLowerCase();
  const words = cleanText.split(/\s+/g).filter((word) => word !== "");
  const wordCount = {};
  words.forEach((word) => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });
  const wordCountPairs = Object.entries(wordCount);
  wordCountPairs.sort((a, b) => b[1] - a[1]);
  const filteredWordCountPairs = wordCountPairs.slice(0, count);
  filteredWordCountPairs.forEach(([word, count]) => {
    console.log(word, "-", count, "occurrences");
  });
}
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper consequat nibh, et cursus ante pretium at. Integer mattis nunc elit, at placerat leo gravida et. Donec sagittis volutpat vestibulum. Duis gravida lectus et dolor tempor, eget finibus ligula cursus. Sed pellentesque consectetur orci, vitae consequat felis efficitur et. Nullam vestibulum libero non metus pharetra eleifend. Duis iaculis massa eu ultrices tincidunt.";

console.log(analyzeText(text));
console.log("\n2---------");
console.log(findMostFrequentWords(text, 3));
