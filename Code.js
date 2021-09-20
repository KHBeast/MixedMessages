const arr1 = ["The Fish" , "The Wise Woman" , " The Goat"];
const arr2 = ["rises in the East." , "looks over the Wall." , "is Free."];
const arr3 = ["The Moral is, 'Never use wax to soothe enraged lobsters.'" , "The Moral is, 'Do not do Today, what can be done Tomorrow.'" , "The Moral is, Wubba Lubba Dub Dub."];


const button = () => {

    let subjectSelector = Math.floor(Math.random() * 100);
    if (subjectSelector < 33) {
        return subjectSelector = 0
    } else if (subjectSelector < 66) {
        return subjectSelector = 1
    } else {
        return subjectSelector = 2
    }
    let subject = arr1[subjectSelector];

    let predicateSelector = Math.floor(Math.random() * 100);
    if (predicateSelector < 33) {
        return predicateSelector = 0
    } else if (predicateSelector < 66) {
        return predicateSelector = 1
    } else {
        return predicateSelector = 2
    }
    let predicate = arr2[predicateSelector];

    let moralSelector = Math.floor(Math.random() * 100);
    if (moralSelectorr < 33) {
        return moralSelector = 0
    } else if (moralSelector < 66) {
        return moralSelector = 1
    } else {
        return moralSelector = 2
    }
    let moral = arr3[moralSelector];


    let randomSentence = print(`Here is your elucidation: ${subject} + ' ' + ${predicate} + ' ' + ${moral}`)
    return randomSentence
}

button();