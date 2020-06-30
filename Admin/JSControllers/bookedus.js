// labs table function 
function displaybooked(){
	var firebaseRef=firebase.database().ref().child('Bookus'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#labsTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var date=snapshot.child("date").val();
		   var time=snapshot.child("time").val();
		   var user=snapshot.child("user").val();

		   var bookingwithname=snapshot.child("bookingwithname").val();
	
		   
		   //Action buttons
	
		   //append data into table
		   $('#labsTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+date+'</td>'+
		    '<td>'+time+'</td>'+
		    '<td>'+user+'</td>'+
		    '<td>'+bookingwithname+'</td>'+
		
		    '</tr>');
		   i++;

	  	})
	  	//convert table into datatable
	    $('#labsTable').DataTable();
    });
}