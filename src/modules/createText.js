const createText = (response) => {
    let elementText = document.createElement('div');
    elementText.className = 'text-justify';
    elementText.innerHTML += `<p>${response.value}</p>`;
    document.querySelector('main .result').appendChild(elementText);

        return elementText;
}

export default createText

