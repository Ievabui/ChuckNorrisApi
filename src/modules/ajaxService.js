const ajaxService = (term)=>{
    const url = 'https://api.chucknorris.io/jokes/search?query='
    return fetch(`${url}${term}`)
        .then(response=>response.json())
}

export  default ajaxService