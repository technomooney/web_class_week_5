function isMNZip (code) {
    return code >= 55001 && code <= 56763;
}

console.log(isMNZip(55412))

function isValidGPA (gpa) {
    return gpa >=0 && gpa <= 4;
}

console.log(isValidGPA(5))
console.log(isValidGPA(-2))
console.log(isValidGPA(3))

function cityStateAddr (city, state) {
    // learned how to do this here:
    // https://similargeeks.com/code/js/capitalize-the-first-letter-of-a-string-in-javascript/

    if (state.length >2) {
        return `${city.charAt(0).toUpperCase() + city.slice(1)}, ${state.charAt(0).toUpperCase() + state.slice(1)}`
    } else {
        return city.charAt(0).toUpperCase() + city.slice(1) + ", " + state.toUpperCase()
    }

}

console.log(cityStateAddr("minneapolis", "minnesota"))
console.log(cityStateAddr("minneapolis", "mn"))