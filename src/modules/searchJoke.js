import ajaxService from "./ajaxService";
import createText from "./createText";


const searchJoke = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(() => console.log(searchResponse))
            .then(() => {
                if (searchResponse.total > 0) {
                    document.querySelector('main .result').innerHTML = '<span></span>'
                    searchResponse.result.forEach(res => {
                        document.querySelector('main .result').appendChild(createText(res))
                    })
                } else {
                    document.querySelector('main .result').innerHTML = '<span>No results</span>'
                }
            })
    })
}


export default searchJoke

