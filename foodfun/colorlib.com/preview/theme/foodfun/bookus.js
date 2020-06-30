function booktable(downloadURL){
	//Get values from input fields
	var date=$('#date').val();
	var time=$('#time').val();
	var user=$('#user').val();
	var bookingwithname=$('#bookingwithname').val();    

	
	//convert into json
	var Contactus = {
	               'date': date,
	               'time': time,
	               'user': user,
	               'bookingwithname': bookingwithname,
	             
	               }; 

	var keyRef = firebase.database().ref('Bookus').push().key;
	alert(keyRef);
	firebase.database().ref('Bookus/'+keyRef).update(Contactus);
}