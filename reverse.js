function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map((word) => word.split("").reverse().join(""));
    return reversedWords.join(" ");
}

const input = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(input);

console.log(reversedSentence);
