//your JS code here. If required.
	let x=0
setInterval(()=>{
	x=x+2;
	line.style.transform=`rotateZ(${x}deg)`;
},20)
