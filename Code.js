const arr1 = ["The Fish", "The Wise Woman", " The Goat"];
const arr2 = ["rises in the East.", "looks over the Wall.", "is Free."];
const arr3 = [
  "The Moral is, 'Never use wax to soothe enraged lobsters.'",
  "The Moral is, 'Do not do Today, what can be done Tomorrow.'",
  "The Moral is, Wubba Lubba Dub Dub.",
];

const subject = () => {
  let subjectSelector = Math.floor(Math.random() * 100);
  if (subjectSelector < 33) {
    subjectSelector = 0;
  } else if (subjectSelector < 66) {
    subjectSelector = 1;
  } else {
    subjectSelector = 2;
  }
  return arr1[subjectSelector];
};

const predicate = () => {
  let predicateSelector = Math.floor(Math.random() * 100);
  if (predicateSelector < 33) {
    predicateSelector = 0;
  } else if (predicateSelector < 66) {
    predicateSelector = 1;
  } else {
    predicateSelector = 2;
  }
  return arr2[predicateSelector];
};
const moral = () => {
  let moralSelector = Math.floor(Math.random() * 100);
  if (moralSelector < 33) {
    moralSelector = 0;
  } else if (moralSelector < 66) {
    moralSelector = 1;
  } else {
    moralSelector = 2;
  }
  return arr3[moralSelector];
};

const generateSentence = () => {
    subject();
    predicate();
    moral();
    return (`Here is your elucidation: ${subject} + ' ' + ${predicate} + ' ' + ${moral}`);
};

print(generateSentence());