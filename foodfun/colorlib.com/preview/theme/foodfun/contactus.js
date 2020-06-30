function addcontactus(downloadURL){
	//Get values from input fields
	var name=$('#name').val();
	var email=$('#email').val();
	var subject=$('#subject').val();
	var message=$('#message').val();    

	
	//convert into json
	var Contactus = {
	               'name': name,
	               'email': email,
	               'subject': subject,
	               'message': message,
	             
	               }; 

	var keyRef = firebase.database().ref('Contactus').push().key;
	alert(keyRef);
	firebase.database().ref('Contactus/'+keyRef).update(Contactus);
}