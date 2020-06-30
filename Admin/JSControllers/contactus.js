// labs table function 
function displaycontactus(){
	var firebaseRef=firebase.database().ref().child('Contactus'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#labsTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var name=snapshot.child("name").val();
		   var email=snapshot.child("email").val();
		   var subject=snapshot.child("subject").val();

		   var message=snapshot.child("message").val();
	
		   
		   //Action buttons
	
		   //append data into table
		   $('#labsTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+name+'</td>'+
		    '<td>'+email+'</td>'+
		    '<td>'+subject+'</td>'+
		    '<td>'+message+'</td>'+
		
		    '</tr>');
		   i++;

	  	})
	  	//convert table into datatable
	    $('#labsTable').DataTable();
    });
}