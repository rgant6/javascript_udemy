const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`)
    if (response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }else{
        throw new Error(`Unable to fetch the country`)
    }   
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=82102276a94b17`)
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error(`Unable to fetch your location`)
        }
}


// Could also use the below instead of a forEach loop
// const country = data.find((country) => country.alpha2Code === countryCode)
// return country.name

// Promises without Async/Await
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }