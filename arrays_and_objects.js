
let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2013",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}


/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

//  Extract the latitude value, and log it to the console.
console.log(iss_location.iss_position.latitude)
//  Extract the longitude value, and log it to the console.
console.log(iss_location.iss_position.longitude)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

//  write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates["CHF"] = 1.1782

//  if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
console.log(`100 Euro in AUD is ${(rates["AUD"] * 100).toFixed(2)}`)

//  write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
function maxValueKeyInObject(jsonObjectWithNumbers) {
    let maxKey = null
    let currentMax = null
    Object.entries(jsonObjectWithNumbers).forEach(function ([key,value]) {
        if (value > currentMax) {
            currentMax = value;
            maxKey = key
        }
    })
    return [maxKey,currentMax]
}

console.log(`the currency symbol that has the highest exchange rate is ${maxValueKeyInObject(rates)[0]} with a rate of ${maxValueKeyInObject(rates)[1].toFixed(2)}`)




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
console.log(`Gary Oldman's cat name is "${cats_and_owners["Gary Oldman"]}"`)
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners["Taylor Swift"] = "Meredith"
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach(function (element) {
    console.log(`The name of ${element.name}'s cat is "${element.cat}:`)
})



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */
let extractInfo = function (object, requestedData, year) {
    let objectPrizeList = object["prizes"]
    if (requestedData === "litLaureates") {
        return `${object.prizes[3].laureates[0].firstname} ${object.prizes[3].laureates[0].surname}`
    } else if (requestedData === "physicsLaureates") {
        let data = objectPrizeList[0]
        let idList = []
        data.laureates.forEach(function (element) {
            idList.push(element.id)
        })

        return 'IDs of the Physics Nobel laureates: ' + idList.join(", ")
    } else if (requestedData === "prizeCategories") {
        let prizeCategories = []
        objectPrizeList.forEach(function (item) {
            prizeCategories.push(item.category)
        })
        return prizeCategories
    } else if (requestedData === "numOfPrizeCategories") {
        let prizeCategories = []
        objectPrizeList.forEach(function (item) {
            prizeCategories.push(item.category)
        })
        return prizeCategories.length
    } else if (requestedData === "numOfPrizeForYear") {
        let yearDataObject = {}
        objectPrizeList.forEach(function (item) {
            let prizeYear = item.year
            if (yearDataObject[prizeYear] === undefined){
                yearDataObject[prizeYear] = 1
            } else {
                yearDataObject[prizeYear]++
            }
        })
        if (year === undefined){
            return yearDataObject
        } else {
            return yearDataObject[year]
        }
    }
}


//  print the full name of the Literature Nobel laureate.
console.log(extractInfo(nobel_prize_winners_2017,"litLaureates"))

//  print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
console.log(`IDs of the Physics Nobel laureates: ${extractInfo(nobel_prize_winners_2017,"physicsLaureates")}`)

//  write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
console.log(`Prize Categories: ${extractInfo(nobel_prize_winners_2017,"prizeCategories").join(", ")}`)

//  write code to print the total number of prize categories
console.log(`Number of prize categories: ${extractInfo(nobel_prize_winners_2017,"numOfPrizeCategories")}`)

//  write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
console.log(extractInfo(nobel_prize_winners_2017,"numOfPrizeForYear"))
console.log(extractInfo(nobel_prize_winners_2017,"numOfPrizeForYear",2017))

