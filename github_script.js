
let analyzeButton = document.querySelector('#analyze')
let usernameInput = document.querySelector('#github-username')

let statusMessage = document.querySelector('#status-message')

let repoList = document.querySelector('#repository-list')
//  - your script will display a list of repositories here
let repoStats = document.querySelector('#repository-statistics')
// - your script will display the number of repositories with each programming language
let hideToggle = document.querySelectorAll(".hide-toggle")




// Use JavaScript to display list of languages and frequencies


analyzeButton.addEventListener('click', function() {
    let username = usernameInput.value
    let publicRepoCount = null
    let page = 1
    let url = `https://api.github.com/users/${username}/repos?per_page=50&page=${page}`
    // get all repos using pages and process them
    statusMessage = document.querySelector('#status-message')
    statusMessage.outerHTML = '<div id="status-message">Please wait...</div>'

    fetch(url)   // make request to URL
        .then(response => response.json())  // extract the JSON from the response
        .then(githubJson => {
                publicRepoCount = githubJson.length
                displayRepositoriesOnPage(githubJson)
        })
        .catch(error => {    // handle errors that occur when requesting data or processing the response
            console.log(error)
            alert('Error fetching data from GitHub. Verify you are connected to the internet and the username is correct.')
        })
        .finally( () => {
            // used the user ghost for testing this
            if (publicRepoCount === 0) {
                statusMessage = document.querySelector('#status-message')
                statusMessage.outerHTML = `<h1 id="status-message">${username} has no public repos!</h1>`
                hideToggle.forEach(item => item.setAttribute("id" ,"hidden"))

            }else {
                hideToggle.forEach(item => item.removeAttribute("id"))
                statusMessage = document.querySelector('#status-message')
                statusMessage.innerHTML = ''  // clear status message. Code in the finally handler always runs, regardless if the request works or failed.
            }
        })
})

function displayRepositoriesOnPage(githubJson) {

    // console.log(githubJson)   // just to show you that the JSON is available here

    // use the JSON to display a list of the user's repositories
    //  can you create a link to that repository at GitHub?
    //   Hint: you can make a new a element, and set that element's src attribute like this
    //   myNewAElement.src = 'https://whatever.the.url.is'   // in this code, your URL will most likely be a variable

    // found a quick way to remove all children here
    // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (repoList.firstChild) {
        repoList.removeChild(repoList.lastChild)
    }
    while (repoStats.firstChild) {
        repoStats.removeChild(repoStats.lastChild)
    }
    let languageCount = {}
    let listHTMLElement = document.createElement("div")
    let repoStatisticsDIV = document.querySelector("#repository-statistics")
    let repoStatisticsUL = document.createElement("ul")

    githubJson.forEach(function (repo) {
        let repoName = document.createElement("h3")
        repoName.innerHTML = repo["name"]
        let repoLang = repo["language"]
        let htmlURL = document.createElement("a")
            htmlURL.setAttribute("href",`${repo["html_url"]}`)
            htmlURL.setAttribute('target',"_blank")
            htmlURL.setAttribute('rel','noreferrer noopener')
            htmlURL.innerHTML = "view on GitHub"
        if (languageCount[repoLang] === undefined) {
            languageCount[repoLang] = 1
        } else {
            languageCount[repoLang]++
        }
        listHTMLElement.appendChild(repoName)
        listHTMLElement.appendChild(htmlURL)
    })

    // learned about .entries() here
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    // had an error and found a solution here:
    // https://beamtic.com/foreach-is-not-a-function-javascript

    Object.entries(languageCount).forEach(function ([lang, count]) {
        let repoStatisticsLI = document.createElement("li")
        console.log(lang + count)
        repoStatisticsLI.innerHTML = `${lang} has ${count} repos`
        repoStatisticsUL.appendChild(repoStatisticsLI)
    })
    repoList.appendChild(listHTMLElement)
    repoStatisticsDIV.appendChild(repoStatisticsUL)

    // what happens if you search for one user, then another user? Clear previous search results before displaying new list of repositorites

    // What if the user doesn't have any repositories? Display an appropriate message - you can decide how you'll display this.

    // analyze the response and count the number of repositories in each programming language.
    // create elements on page to display the languages used and each languages' frequency

}

