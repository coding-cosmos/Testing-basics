function reverseString(s) {
    let reverse = "";
    for (let index = s.length; index > 0; index--) {
        reverse += s[index-1];
    }
    return  reverse;
}

export default reverseString;