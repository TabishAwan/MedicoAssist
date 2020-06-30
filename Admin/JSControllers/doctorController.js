


var selectedFile;
var editSelectedFile;

$(document).ready(function(){
displayDoctor();

});


function addDoctor(downloadURL){
	//Get values from input fields
	var address=$('#address').val();
	var bio=$('#bio').val();
	var clinic=$('#clinic').val();
	var email=$('#email').val();    
	var password=$('#password').val();    
	var experience=$('#experience').val();
	var fee=$('#fee').val();  
	var gender=$('#gender').val();  
	var name=$('#name').val();  
	var phone=$('#phone').val();  
	var specifications=$('#specifications').val();  
	var timeapp=$('#timeapp').val();  
	var appstarttime=$('#appstarttime').val();
	var appclosetime=$('#appclosetime').val();
	var timespan=$('#timespan').val();  
	
	//convert into json
	var doctorNode = {
	               'address': address,
	               'bio': bio,
	               'clinic': clinic,
	               'experience': experience,
	               'email': email,
	               'password':password,
	               'fee': fee,
	               'gender': gender,
	               'name': name,
	               'phone': phone,
	               'specifications': specifications,
	                'imageURL': downloadURL,
	               'timeapp': timeapp,
	               'appstarttime': appstarttime,
	               'appclosetime': appclosetime,
	               'timespan': timespan,
	               }; 

	var keyRef = firebase.database().ref('Doctor').push().key;
	alert(keyRef);
	firebase.database().ref('Doctor/'+keyRef).update(doctorNode);
}

function displayDoctor(){
	var firebaseRef=firebase.database().ref().child('Doctor'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#doctorTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var address=snapshot.child("address").val();
		   var bio=snapshot.child("bio").val();
		   var clinic=snapshot.child("clinic").val();
		   var email=snapshot.child("email").val();
		   var password=snapshot.child("password").val();
		   var experience=snapshot.child("experience").val();
		   var fee=snapshot.child("fee").val();
		   var gender=snapshot.child("gender").val();
		   var name=snapshot.child("name").val();
		   var phone=snapshot.child("phone").val();
		   var specifications=snapshot.child("specifications").val();
		   var timeapp=snapshot.child("timeapp").val();
		   var appstarttime=snapshot.child("appstarttime").val();
		   var appclosetime=snapshot.child("appclosetime").val();
		   var timespan=snapshot.child("timespan").val();
		    var image=snapshot.child("imageURL").val();



		   //Action buttons
		   var deleteButton='<a title="Delete" onclick=deleteDoctor(\'' + key + '\') class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		   var editButton='<a title="Edit" data-toggle="modal" data-target="#editmodale" onclick="editDoctor(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
		   //append data into table
		   $('#doctorTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+address+'</td>'+
		    '<td>'+bio+'</td>'+
		    '<td>'+clinic+'</td>'+
		    '<td>'+email+'</td>'+
		    '<td>'+password+'</td>'+
		    '<td>'+experience+'</td>'+
		    '<td>'+fee+'</td>'+
		    '<td>'+gender+'</td>'+
		    '<td>'+name+'</td>'+
		    '<td>'+phone+'</td>'+
		    '<td>'+specifications+'</td>'+
		    '<td>'+timeapp+'</td>'+
			   '<td>'+appstarttime+'</td>'+
    			'<td>'+appclosetime+'</td>'+
					    '<td>'+timespan+'</td>'+
		       '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+editButton+'</td>'+
		    '<td>'+deleteButton+'</td>'+
		    '</tr>');
		   i++;
	  	})
 //*****=/]'/77ttfftgvjggjknh ,nn  m;,ol,,ki9iuu877uuuh9i9bbhbuhbgojkgkjbbcmvv eyue7	``vccxvcx ,nba``++++++++++++*/
	    $('#doctorTable').DataTable();
    });
}

function editDoctor(Key){
	firebase.database().ref('/Doctor/' + Key).once('value').then(function(snapshot) {
	 	   var tempAddress=snapshot.child("address").val();
		   var tempBio=snapshot.child("bio").val();
		   var tempClinic=snapshot.child("clinic").val();
		   var tempEmail=snapshot.child("email").val();
		   var tempPassword=snapshot.child("password").val();
		   var tempExperience=snapshot.child("experience").val();
		   var tempFee=snapshot.child("fee").val();
		   var tempGender=snapshot.child("gender").val();
		   var tempName=snapshot.child("name").val();
		   var tempPhone=snapshot.child("phone").val();
		   var tempSpecifications=snapshot.child("specifications").val();
		   var tempTimeapp=snapshot.child("timeapp").val();
		   var tempappstarttime=snapshot.child("appstarttime").val();
		   var tempappclosetime=snapshot.child("appclosetime").val();
		   var tempTimespan=snapshot.child("timespan").val();
		   var tempImage=snapshot.child("imageURL").val();
		$('#eKey').val(Key);
		$('#eaddress').val(tempAddress);
		$('#ebio').val(tempBio);
		$('#eclinic').val(tempClinic);
		$('#eemail').val(tempEmail);
		$('#epassword').val(tempPassword);
		$('#eexperience').val(tempExperience);
		$('#efee').val(tempFee); 
		$('#egender').val(tempGender); 
		$('#ename').val(tempName); 
		$('#ephone').val(tempPhone); 
		$('#especifications').val(tempSpecifications); 
		$('#etimeapp').val(tempTimeapp); 
				$('#eappstarttime').val(tempappstarttime); 
						$('#eappclosetime').val(tempappclosetime); 
		$('#etimespan').val(tempTimespan); 
			$('#efileToUpload').empty();
		$('#image').empty();
		$('#image').append("<img src=\""+tempImage+" \"width=50px >")
	});
}

function saveChanges(downloadURL){{
	if(downloadURL!="noURL"){
	alert('Edited Sucessfully');
	var editKey=$('#eKey').val();
	var editAddress=$('#eaddress').val();
	var editBio=$('#ebio').val();
	var editClinic=$('#eclinic').val();
	var editEmail=$('#eemail').val();
	var editPassword=$('#epassword').val();
	var editExperience=$('#eexperience').val(); 
	var editFee=$('#efee').val();    
	var editGender=$('#egender').val();    
	var editName=$('#ename').val();    
	var editPhone=$('#ephone').val();    
	var editSpecifications=$('#especifications').val();    
	var editTimeapp=$('#etimeapp').val();   
		var editappstarttime=$('#eappstarttime').val();    
			var editappclosetime=$('#eappclosetime').val();     
	var editTimespan=$('#etimespan').val();       
 

	//convert into json
	var editDoctorNode = {
	               'address': editAddress,
	               'bio': editBio,
	               'clinic': editClinic,
	               'email': editEmail,
	               'password': editPassword,
	               'experience': editExperience,
	               'fee': editFee,
	               'gender': editGender,
	               'name': editName,
	               'phone': editPhone,
	               'specifications': editSpecifications,
	               'timeapp': editTimeapp,
	                      'appstarttime': editappstarttime,
	                             'appclosetime': editappclosetime,
	               'timespan': editTimespan,
	                 'imageURL': downloadURL,
	             }

	         }
	         else{
	var editKey=$('#eKey').val();
	var editAddress=$('#eaddress').val();
	var editBio=$('#ebio').val();
	var editClinic=$('#eclinic').val();
	var editEmail=$('#eemail').val();
	var editPassword=$('#epassword').val();
	var editExperience=$('#eexperience').val(); 
	var editFee=$('#efee').val();    
	var editGender=$('#egender').val();    
	var editName=$('#ename').val();    
	var editPhone=$('#ephone').val();    
	var editSpecifications=$('#especifications').val();    
	var editTimeapp=$('#etimeapp').val();    
	var editappstarttime=$('#eappstarttime').val();    
	var editappclosetime=$('#eappclosetime').val();
	var editTimespan=$('#etimespan').val();       
 

	//convert into json
	var editDoctorNode = {
	               'address': editAddress,
	               'bio': editBio,
	               'clinic': editClinic,
	               'email': editEmail,
	               'password': editPassword,
	               'experience': editExperience,
	               'fee': editFee,
	               'gender': editGender,
	               'name': editName,
	               'phone': editPhone,
	               'specifications': editSpecifications,
	               'timeapp': editTimeapp,
	             'appstarttime': editappstarttime,
	        'appclosetime': editappclosetime,
	               'timespan': editTimespan,
	               
	             }
	         }

	               }; 
	firebase.database().ref('Doctor/'+editKey).update(editDoctorNode);
}

function deleteDoctor(Key){
	
	firebase.database().ref('/Doctor/'+ Key).remove();
}



$(document).on('change', '#fileToUpload', function(event) {
  selectedFile = event.target.files[0];
});

var uploadImage_addDoctor= function() {
	var filename=selectedFile.name;
	var storageRef = firebase.storage().ref();
	var uploadTask = storageRef.child('/LabImages/'+filename).put(selectedFile);

	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	  console.log('Upload is ' + progress + '% done');
	  switch (snapshot.state) {
	    case firebase.storage.TaskState.PAUSED: // or 'paused'
	      console.log('Upload is paused');
	      break;
	    case firebase.storage.TaskState.RUNNING: // or 'running'
	      console.log('Upload is running');
	      break;
	  }
	}, function(error) {
	  // Handle unsuccessful uploads
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	  	addDoctor(downloadURL)
	  });
	});
}

$(document).on('change', '#efileToUpload', function(event) {
   editSelectedFile = event.target.files[0];
});

var editImage= function() {

if ( editSelectedFile != null )
{ 

	var filename= editSelectedFile;
 

	var storageRef = firebase.storage().ref();

	var uploadTask = storageRef.child('/LabImages/'+filename).put(editSelectedFile);

	

	// Register three observers:
	// 1. 'state_changed' observer, called any time the state changes
	// 2. Error observer, called on failure
	// 3. Completion observer, called on successful completion
	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	  console.log('Upload is ' + progress + '% done');
	  switch (snapshot.state) {
	    case firebase.storage.TaskState.PAUSED: // or 'paused'
	      console.log('Upload is paused');
	      break;
	    case firebase.storage.TaskState.RUNNING: // or 'running'
	      console.log('Upload is running');
	      break;
	  }
	}, function(error) {
	  // Handle unsuccessful uploads
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	  	saveChanges(downloadURL);
	  });
	});}


	else
	{	
		var url="noURL";
		saveChanges(url);
	}	
  
}

function loginForDoctor(){alert('infunction');
	var firebaseRef=firebase.database().ref().child('Doctor'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	 // 	var i=1;
	  	//Destory Existing table
	  //  $('#doctorTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var email=snapshot.child("email").val();
		   var password=snapshot.child("password").val();
		   alert(email);
		   alert(password);

		//    if()

	


	  	})
 //*****=/]'/77ttfftgvjggjknh ,nn  m;,ol,,ki9iuu877uuuh9i9bbhbuhbgojkgkjbbcmvv eyue7	``vccxvcx ,nba``++++++++++++*/
	    //$('#doctorTable').DataTable();
    });
}

