var selectedFile;
var editSelectedFile;



$(document).ready(function(){
displayPatient();
});



function displayPatient(){
	var firebaseRef=firebase.database().ref().child('Patient'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#patientTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var address=snapshot.child("address").val();
		   var age=snapshot.child("age").val();
		   var detail=snapshot.child("detail").val();
		   var email=snapshot.child("email").val();
		   var gender=snapshot.child("gender").val();
		   var name=snapshot.child("name").val();
		   var phone=snapshot.child("phone").val();
		   var bloodgroup=snapshot.child("bloodgroup").val();
		   var image=snapshot.child("imageURL").val();





	   //Action buttons
		   var deleteButton='<a title="Delete" onclick=deletePatient(\'' + key + '\') class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		     //append data into table
		   $('#patientTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		     '<td>'+address+'</td>'+
		    '<td>'+age+'</td>'+
		    '<td>'+detail+'</td>'+
		    '<td>'+email+'</td>'+
		    '<td>'+gender+'</td>'+
		    '<td>'+name+'</td>'+
		     '<td>'+phone+'</td>'+
		    '<td>'+bloodgroup+'</td>'+
		      '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+deleteButton+'</td>'+
		    '</tr>');
		   i++;
	  	})
	  	//convert patient table into datatable
	    $('#patientTable').DataTable();
    });
}

function deletePatient(Key){
	firebase.database().ref('/Patient/'+ Key).remove();
}

