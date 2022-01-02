import form from "./form"

const renderForm = ()=>{
    let element = document.createElement('form');
    element.className = 'form-inline';
    element.innerHTML = form();
    document.querySelector('main .card-body').appendChild(element);
}

export default renderForm