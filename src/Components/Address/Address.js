import React from 'react';
import './Address-style.css';


function addAddress() {
    var query = document.querySelector('#query_address').value;
    if (query === '') {
        return false
    }
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    var token = "e6f6de7a9fc833726b945d0ba47c1ebc74a9ad99";

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
            query: query
        })
    }

    fetch(url, options)
        .then(response => response.text())
        .then(result => {
            let suggestions = JSON.parse(result).suggestions;
            let template = '<li>{data}</li>';
            const addresses = suggestions.map((item) => template.replace('{data}', item.value));
            document.querySelector('#address_wrapper').innerHTML = addresses.join('')
        })
        .catch(error => console.log("error", error));

}



const Address = (props) => {
    return (
        <div className='address'>

            <h2 className='address__title'>Поиск адресов</h2>

            <div className='address__instruction'>Введите интересующий вас адрес</div>

            <div className='address__block'>
                <input className='address__input' placeholder='Введите интересующий вас адрес' id='query_address'></input>
                <button className='address__button' onClick={addAddress} >
                    <img className='address__button-img' src='./AddressImg/search.svg'></img>
                    <div className='address__button-text'>Поиск</div>
                </button>
            </div>


            <ul id="address_wrapper" className='address__ul'><h1></h1></ul>


        </div>
    );
}

export default Address;