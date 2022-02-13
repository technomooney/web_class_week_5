function f_to_c (f, decimalPlaces) {
    let celsius = (f - 32) * 5/9
    if (decimalPlaces) {
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}


let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)