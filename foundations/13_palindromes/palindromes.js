const palindromes = function (string) {
    // Make lowercase and strip any non alphanumeric character (punctuation and whitespaces)
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/gu, '');

    // Reverse string
    const reversedString = cleanedString.split("").reverse().join("");

    // Compare cleaned string and reversed string and return result
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
