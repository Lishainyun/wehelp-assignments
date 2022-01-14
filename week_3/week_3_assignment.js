"use strict"



let req = new XMLHttpRequest();
req.open('GET', 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json');
req.send();
req.onload = function() {
	let data = JSON.parse(this.response);
	
	// data['result']['results'][i]['file'].length

	for (let i = 0; i < 8 ; i++ ) {
		
		let picsContainer = document.getElementById('pics_container');
		let picsBlock = document.createElement('div');
		let picsContent = document.createElement('img');
		let picsTitle = document.createElement('p');
		let titleTextNode = document.createTextNode(data['result']['results'][i]['stitle']);
		let picsUrl = 'https'+data['result']['results'][i]['file'].split('https',2)[1];

		picsTitle.setAttribute('style','padding: 5px;color:black;margin:0px;');
		picsTitle.appendChild(titleTextNode);
		picsContent.setAttribute('src', 'https'+data['result']['results'][i]['file'].split('https',2)[1])
		picsContent.setAttribute('style','width:100%;aspect-ratio:16/9');
		picsContent.setAttribute('title',data['result']['results'][i]['stitle']);

		picsBlock.setAttribute('style', 'width: 100%;text-align:center;background-color:#ddeef8;');
		picsBlock.appendChild(picsContent);
		picsBlock.appendChild(picsTitle);
		picsContainer.appendChild(picsBlock);
	};
}

function lomo(){
	let data = JSON.parse(req.response);
	// console.log(data['result']['results'].splice(0,1)[0]['stitle'])
	// data['result']['results'][i]['file'].length

	let counter = 0;

	for (let i = 8; i < data['result']['results'][i]['file'].length ; i++ ) {


		let picsContainer = document.getElementById('pics_container');
		let picsBlock = document.createElement('div');
		let picsContent = document.createElement('img');
		let picsTitle = document.createElement('p');
		let titleTextNode = document.createTextNode(data['result']['results'][i]['stitle']);
		let picsUrl = 'https'+data['result']['results'][i]['file'].split('https',2)[1];

		// picsTitle.setAttribute('id',i);	
		picsTitle.setAttribute('style','padding: 5px;color:black;margin:0px;display:none');
		picsTitle.appendChild(titleTextNode);
		picsContent.setAttribute('src', 'https'+data['result']['results'][i]['file'].split('https',2)[1])
		// picsContent.setAttribute('id','a'+i);
		picsContent.setAttribute('style','width:100%;aspect-ratio:16/9;display:none');
		picsContent.setAttribute('title',data['result']['results'][i]['stitle']);
		// picsBlock.setAttribute('id', 'b'+i);
		picsBlock.setAttribute('style', 'width: 100%;text-align:center;background-color:#ddeef8;display:none');
		picsBlock.appendChild(picsContent);
		picsBlock.appendChild(picsTitle);
		picsContainer.appendChild(picsBlock);


		if (i < 16){
			picsBlock.style.display = "block";
			picsContent.style.display = "block";
			picsTitle.style.display = "block";
		}
	};


}

function dropDown() {
  		let x = document.getElementById("mbnav");
  		if (x.style.display === "none") {
    	x.style.display = "block";
  		} 
  		else {
    	x.style.display = "none";
  		}
}

