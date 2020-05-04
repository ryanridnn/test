const button = document.querySelector('button');

function backgroundChanger(){
	const red = Math.round(Math.random() * 255);
	const green = Math.round(Math.random() * 255);
	const blue = Math.round(Math.random() * 255);

	document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	return { red, green, blue};
}

backgroundChanger();

// document.querySelector('button').addEventListener('click', function (){
// 	const color = backgroundChanger();
	
// 	if(color.red < 127.5 && color.green < 127.5 && color.green < 127.5){
// 		this.style.color = 'white';
// 		this.style.border = '1px solid #fff';
// 	}
// 	console.log(color);

// })


let bool = true;

button.addEventListener('click', n =>{
	let interval;
	if(bool){
		interval = setInterval(backgroundChanger, 1000);
		bool = !bool;
	}
	else{
		clearInterval(interval);
	}
	console.log(interval);
})