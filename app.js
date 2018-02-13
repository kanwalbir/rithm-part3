

function genrateMeme (url, header, footer) {
	
	let divParent = document.createElement('div');
	let divHead = document.createElement('div');
	let divImg = document.createElement('img');
	let divFoot = document.createElement('div');
	let divBtn = document.createElement('button');
	let divHr = document.createElement('hr');
	

	divParent.classList.add('meme')

	divParent.appendChild(divHr);

	divHead.innerText = header;
	divHead.classList.add('header')
    divParent.appendChild(divHead);

	divImg.src = url;
    divParent.appendChild(divImg);
    
    divFoot.innerText = footer;
    divFoot.classList.add('footer')
    divParent.appendChild(divFoot);

    divBtn.innerText = 'Delete Me';
    divParent.appendChild(divBtn);

    memeContainer.appendChild(divParent);
    
}


memeForm.addEventListener ('submit', function (event) {
	
	event.preventDefault();

	let memeSource = document.getElementById('url');
	let memeHeader = document.getElementById('topTxt');
	let memeFooter = document.getElementById('bottomTxt');
	
	genrateMeme (memeSource.value, memeHeader.value, memeFooter.value);
	memeForm.reset();

});


memeContainer.addEventListener('click', function (event) {

    if (event.target.tagName === "BUTTON" ) {
    	event.target.parentElement.remove();
    }
    
});
