"use strict"



let req = new XMLHttpRequest();
req.open('GET', 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json');
req.send();

let counter = 0;


// 建立取得景點資訊的函式
function picsRender(){

	let data = JSON.parse(req.response);
	
	for (let i = counter; i < counter + 8 ; i++ ) {
		
		if(i < data.result.results.length){

			let picsContainer = document.getElementById('pics_container');
			let picsBlock = document.createElement('div');
			let picsContent = document.createElement('img');
			let picsTitle = document.createElement('p');
			let sceneriesTitle = data['result']['results'][i]['stitle']
			let titleTextNode = document.createTextNode(sceneriesTitle);
			let picsUrl = 'https'+data['result']['results'][i]['file'].split('https',2)[1];
	

			picsTitle.setAttribute('style','padding: 5px;color:black;margin:0px;display:none');
			picsTitle.appendChild(titleTextNode);
			picsContent.setAttribute('src', picsUrl);

			picsContent.setAttribute('style','width:100%;aspect-ratio:16/9;display:none');
			picsContent.setAttribute('title',sceneriesTitle);

			picsBlock.setAttribute('style', 'width: 100%;text-align:center;background-color:#ddeef8;display:none');
			picsBlock.appendChild(picsContent);
			picsBlock.appendChild(picsTitle);
			picsContainer.appendChild(picsBlock);

			picsBlock.style.display = "block";
			picsContent.style.display = "block";
			picsTitle.style.display = "block";

		} else {
			let loadMoreButton = document.getElementById('lomo');
			loadMoreButton.style.display='none';
			break;
		};

	};

	counter += 8;
	
};

// 網頁載入時顯示前八個景點
req.onload = function() {
	picsRender()
};



// 載入更多按鈕
function lomo(){
	picsRender();

};


// 下拉式選單
function dropDown() {
  		let x = document.getElementById("mbnav");
  		if (x.style.display === "none") {
    	x.style.display = "block";
  		} 
  		else {
    	x.style.display = "none";
  		}
}

