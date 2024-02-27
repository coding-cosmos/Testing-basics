const alphabets = [ ' ','.', ',', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

function caesarCipher(string, key) {
    let cipher = '';
    for (let index = 0; index < string.length; index++) {
        cipher += shift(string[index],key);
    }
    return cipher;
}

function shift(letter, key) {
    let index = alphabets.findIndex((alphabet) => alphabet == letter);
    if (index < 0) {
        index = alphabets.findIndex((alphabet) => alphabet == letter.toLowerCase());
         let shiftedIndex = index + key;
         shiftedIndex =
           shiftedIndex >= alphabets.length
             ? shiftedIndex - alphabets.length
                : shiftedIndex;
        return alphabets[shiftedIndex].toUpperCase();
    }
    else {
        let shiftedIndex = index + key;
        shiftedIndex =
          shiftedIndex >= alphabets.length
            ? shiftedIndex - alphabets.length
            : shiftedIndex;
        return alphabets[shiftedIndex]; 
    } 
}

export default caesarCipher;