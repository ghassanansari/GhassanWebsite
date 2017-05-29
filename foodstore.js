var xmlHttp = createXmlHttpRequestObject(); //It allows to comunicate with the server without refreshing the page

//This function needs to be in every ajax code
function createXmlHttpRequestObject(); {
	var xmlHttp;

	//This will be only true if user us  using internet windows explorer
	if (window.ActiveXObject) {
		try{
		
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

		} catch (e){
			xmlHttp = false;
		}
	} else { //This is used if they do not have internet explorer and using other browser
		try{
		
			xmlHttp = new XMLHttpRequest(); //This is a built in funcion so no need to code it

		} catch (e){
			xmlHttp = false;
		}
	}
	//if the above code is set to false it will do this
	if (!xmlHttp)
		alert("Can't create that object hoss!");

		else 
			return xmlHttp; 
}

//Be resposible of taking object and sending the request to the server. It will be called as soon as your webpage loads.
function process(){
//This helps get the state of xmlHttp. 0 and 4 are the states were it says the object is not busy and is free communicate with the server
	if(xmlHttp.readyState == 4 || xmlHttp.readyState == 4 ){ 
		food = encodeURIComponent(document.getElementById("userinput").value);
		//To communicate with the server. Creates request that we are going to send to the server
		xmlHttp.open("GET", "foodstore.php?food="+food, true);//This is what we are sending to the php file. 
		xmlHttp.onreadystatechange = handleServerReponse;//We wante to call this function handleServerReponse whenever server responds to our request
		xmlHttp.send(null);//Whenever you send request to the server the parameter that you use its only used with POST but since we are using get in php we use null.

	} else{
		setTimeout('process()',1000); //
	}

}

//Whenever we get this request and it will check if object is in list
function handleServerResponse(){
	if (xmlHttp.readyState == 4) {
		if(xmlHttp.status == 200){ //200 on your object it means communication went OK.
			xmlResponse = xmlHttp.responseXML;//responseXML is a built in function. Getting xml from file
			xmlDocumentElement= xmlResponse.documentElement;
			message = xmlDocumentElement.firstChild.data;//what we want to put out on screen
			document.getElementById("underinput").innetHTML = '<span style = "color:blue">' + message + '</span>';
			setTimeout('process()',1000); //waits a second to communicate with server
		
		} else{
			alert('Something went wrong!');
		}
	}

}