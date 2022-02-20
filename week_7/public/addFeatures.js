"use strict"

let apiUrl = 'http://127.0.0.1:3000/api/members'
let urlParams = new URLSearchParams(window.location.search)

async function getData(url){
    const response = await fetch(url, {
        method: 'GET'
    })
    return await response.json()
}

getData(apiUrl + '?' + urlParams)
    .then((data) => {

        let resData = data["data"]
        let formDiv = document.getElementById('searchForm')
        let resDiv = document.createElement('div')

        formDiv.appendChild(resDiv);
        resDiv.setAttribute('style','text-align:center; padding: 5px; font-size:20px');
        resDiv.style.display = 'block';

        if (resData !== null) {
            let resName = data["data"]["name"]
            let resMessage = document.createElement('p')
            let resTextNode = document.createTextNode(resName)
            resDiv.appendChild(resMessage);
            resMessage.appendChild(resTextNode)
            resMessage.setAttribute('style', 'font-size:20px')
            resDiv.style.display = 'block';
        }else if(urlParams === null) {
            let errMessage = "查無資料";
            let errTextNode = document.createTextNode(errMessage);
            resDiv.appendChild(errTextNode);
            resDiv.style.display = 'block';
        }

    })
