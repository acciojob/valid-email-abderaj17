function validEmail(str) {
 //  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	// return regex.test(str);

	if(!str.includes("@")){
		return false;
	}

	let parts = str.split("@");
	if(parts.length != 2){
		return false;
	}

	if(parts[0].length == 0){
		return false;
	}

	if(!parts[1].includes('.')){
		return false;
	}

	let domainParts = parts[1].split('.');

	if(domainParts.length < 2){
		return false;
	}

	if(domainParts[domainParts.length - 1].length < 2){
		return false;
	}
	return true;
}

// Do not change the code below.
// const str = prompt("Enter an email address.");    
alert(validEmail(str));
