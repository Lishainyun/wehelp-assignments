"use strict"

let seachBtn = document.getElementById('searchBtn');

seachBtn.addEventListener('click', () => {

    let input = document.getElementById('searchName').value
    let searchApiUrl = 'http://127.0.0.1:3000/api/members'

    fetch(searchApiUrl + "?username=" + input, {
        method:'GET'
    })
    .then(response => response.json())
    .then((data) => {

        let resData = data["data"]
        let resultDiv = document.getElementById('result')

        while (resultDiv.firstChild) {
            resultDiv.removeChild(resultDiv.firstChild);
        }

        if (resData !== null) {
            let resName = data["data"]["name"]
            let resMessage = document.createElement('p')
            let resTextNode = document.createTextNode(resName)
            resultDiv.appendChild(resMessage);
            resMessage.appendChild(resTextNode)
            resMessage.setAttribute('style', 'font-size:20px')
            resultDiv.style.display = 'block';
        }else{
            let err = document.createElement('p')
            let errMessage = "查無資料";
            let errTextNode = document.createTextNode(errMessage);
            resultDiv.appendChild(err);
            err.appendChild(errTextNode)
            err.style.display = 'block';
        }
    })
    

})