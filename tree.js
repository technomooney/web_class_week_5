

let homeownerNameInput = document.querySelector('#homeowner-name')
let homeownerHouseNumberInput = document.querySelector('#homeowner-house-number')
let homeownerStreetNameInput = document.querySelector('#homeowner-street-name')
let treeTypeSelect = document.querySelector('#tree-type')
let cityInput = document.querySelector("#city")
let zipCodeInput = document.querySelector("#zipcode")
// create a variable for city input element
// create a variable for zip code input element

let submitButton = document.querySelector('#submit-order')

let orderSummaryParagraph = document.querySelector('#order-summary')

submitButton.addEventListener('click', function (object) {

    let name = homeownerNameInput.value
    let houseNumber = homeownerHouseNumberInput.value
    let streetName = homeownerStreetNameInput.value
    let treeType = treeTypeSelect.value
    let city = cityInput.value;
    let zipcode = zipCodeInput.value;

    let errors = []
    //  get the value from the input#city
    //  get the value from the input#zipcode
    if (!name) {
        errors.push("You need to enter a name!")
    }
    // found how to do this here
    // https://www.geeksforgeeks.org/number-validation-in-javascript/
    if (!houseNumber || isNaN(houseNumber)) {
        console.log(typeof houseNumber)
        errors.push("Please enter a valid house number!")
    }
    if (!streetName) {
        errors.push("Please enter a street name!")
    }
    if (!treeType) {
        errors.push("Please select a tree type!!")
    }
    if (!city) {
        errors.push("Please enter city!")
    }
    if (!zipcode || zipcode < 55001 || zipcode > 56763) {
        errors.push("Please enter a valid zip code for Minnesota, a number between 55001 and 56763")
    }
    // Validate that all six input and select elements have been completed

    // Validate the zipcode is in the range 55001 and 56763. This will check that the zip code is in Minnesota.
    console.log(errors)
    // If a form element has not been completed, add an error message to the errors array (use push)
    if (errors.length !== 0) {
        let error_messages = errors.join("\n")
        alert(error_messages)
        return
    }
    let orderSummery = `Thanks for your order!\nA ${treeType} tree will be sent to ${name} located at ${houseNumber} ${streetName} ${city}, Minnesota, ${zipcode}.`
    orderSummaryParagraph.innerHTML = orderSummery

    // If there are any errors after checking all of the elements,
    // display an alert with all of the error messages (use join)
    // and then return from this function to prevent further processing


    // - If there are no errors, use a template string to display an order summary in the order summary paragraph



})

