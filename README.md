# ContactsAppKS
basic node js structure to start an app 

## Basic Structure for a normal GET request


- git clone https://github.com/krishnasai453/ContactsAppKS.git
- cd ContactsAppKS
- npm install
- npm install chance --save-dev (not needed)
- node server.js


	open browser and make a request-- 
		Request:
	 	http://localhost:8099/api/contact
 	
	Response:
		[
		{
		"_id": "57949468d8a5353c0362bdef",
		"__v": 0,
		"email": "sai@sai.com",
		"phone": "",
		"lastName": "said",
		"firstName": "sai"
		},
		{
		"_id": "579531e729574454274d1522",
		"__v": 0,
		"email": "krisi@dkei.com",
		"phone": "5105567133",
		"lastName": "said",
		"firstName": "sai"
		},
		]



	send a post request and you will response {
	  "firstName": "krishna",
	  "lastName": "sai",
	  "phone": "9511296043",
	  "email.com": "krishnasai@gmail.com",
	 
}


