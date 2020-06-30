var selectedFile;
var editSelectedFile;



$(document).ready(function(){
displayPharmacy();
displayPharmacyBranches();
});

function updateKey(key){
	$('#branchKeyPharmacy').val(key);
}

function addPharmacy(downloadURL){
	//Get values from input fields
	var name=$('#name').val();
	var branch=$('#branch').val();
	var email=$('#email').val();
	var contact=$('#contact').val();
	var opening=$('#openTime').val();    
	var closing=$('#closeTime').val();
	var location=$('#location').val();
	
	//convert into json
	var pharmacyNode = {
	               'name': name,
	               'branch': branch,
	               'email': email,
	               'contact': contact,
	               'openTime': opening,
	               'closeTime': closing,
	               'location': location,
	               'imageURL': downloadURL,
	               }; 
	          

	var keyRef = firebase.database().ref('Pharmacy').push().key;
	firebase.database().ref('Pharmacy/'+keyRef).update(pharmacyNode);
}

function addBranch(key)
{
	//get data from input fields 
	var branchId = $('#branchId').val();
	var location =$('#location').val();
	var phone = $('#phone').val();
	var description = $('#description').val();
	var pharmacyKey = $('#branchKeyPharmacy').val();

	// convert into json 

// location not working 
	var pharmacyNode = {
		'branchId' : branchId,
		'location' : location,
		'phone' : phone,
		'description' : description,
					};

	var keyRef = firebase.database().ref('BranchesOfPharmacy').push().key;
	firebase.database().ref('/BranchesOfPharmacy/'+pharmacyKey+'/'+keyRef).update(pharmacyNode);

}



function displayPharmacy(){
	var firebaseRef=firebase.database().ref().child('Pharmacy'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#pharmacyTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var name=snapshot.child("name").val();
		   var branch=snapshot.child("branch").val();
		   var email=snapshot.child("email").val();
		   var contact=snapshot.child("contact").val();
		   var openTime=snapshot.child("openTime").val();
		   var closeTime=snapshot.child("closeTime").val();
		   var location=snapshot.child("location").val();
		    var image=snapshot.child("imageURL").val();





		   //Action buttons
		   var deleteButton='<a title="Delete" onclick="deletePharmacy(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		   var editButton='<a title="Edit" data-toggle="modal" data-target="#editModalpharmacy" onclick="editPharmacy(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
		    var addbranchButton='<a title="Add Branch" data-toggle="modal" data-target="#addBranchModal" onclick="updateKey(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-plus" style="width: 20px; color:powderblue;" href="#"></a>';
		   //append data into table
		   $('#pharmacyTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		     '<td>'+name+'</td>'+
		    '<td>'+branch+'</td>'+
		    '<td>'+email+'</td>'+
		    '<td>'+contact+'</td>'+
		    '<td>'+openTime+'</td>'+
		    '<td>'+closeTime+'</td>'+
		     '<td>'+location+'</td>'+
		     '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+editButton+'</td>'+
		    '<td>'+deleteButton+'</td>'+
		    '<td>'+addbranchButton+'</td>'+

		    '</tr>');
		   i++;
	  	})
	  
	  	//convert blog table into datatable
	    $('#pharmacyTable').DataTable();
    });
}



// labs branches display table 
function displayPharmacyBranches(){
	var firebaseRef=firebase.database().ref().child('BranchesOfPharmacy'); ///////////
 	firebaseRef.orderByKey().on("value", snap =>{
 		//Destory Existing table
		$('#branchesofPharmacyTable').DataTable().clear().destroy();
 		snap.forEach(function(snapshot) {	    
		   var key=snapshot.key;
		  // var bkey = snapshot.key;
		// var pharmacyKey = $('#branchKeyPharmacy').val();

		   firebaseRef.child(key).on("value", snap1 => {
		 		//Counter
		 	//	alert(key);
			  	var i=1;
			    //Get Fresh copy of blog data
			  	snap1.forEach(function(snapshot1) {
			  ///////////////
			    
				   var bkey=snapshot1.key;
				   var branchId=snapshot1.child("branchId").val();
				   var description=snapshot1.child("description").val();
				   var location=snapshot1.child("location").val();
				   var phone=snapshot1.child("phone").val();

				   //Action buttons
				   var deleteButton='<a title="Delete" onclick="deletePharmacyBranches(\'' + bkey + '\',\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
				   var editButton='<a title="Edit" data-toggle="modal" data-target="#editModalPharmacyBranches" onclick="editPharmacyBranches(\'' + bkey + '\',\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
			
				   //append data into table
				   $('#branchesofpharmacybody').append('<tr>'+
				    '<td>'+i+'</td>'+
				    '<td>'+branchId+'</td>'+
				    '<td>'+description+'</td>'+
				    '<td>'+location+'</td>'+
				    '<td>'+phone+'</td>'+
				    '<td>'+editButton+'</td>'+
				    '<td>'+deleteButton+'</td>'+
				    '</tr>')
				 	i++;
			  	})
			  	//convert table into datatable
			    $('#branchesofPharmacyTable').DataTable();

			
		    });
		});
	

	});
}




function editPharmacyBranches(editKey, labKey){
	var firebaseRef=firebase.database().ref().child('BranchesOfPharmacy'); 
 	firebaseRef.child(labKey+'/'+editKey).on("value", snap => {
 		var tempbranchid=snap.child("branchId").val();
	    var tempdescription=snap.child("description").val();
	    var templocation=snap.child("location").val();
	    var tempphone=snap.child("phone").val();
		
		$('#ePharmacyKey').val(labKey);
		$('#ebranchKeyPharmacy').val(editKey);
		$('#ebranchid').val(tempbranchid);
		$('#edescription').val(tempdescription);
		$('#elocation').val(templocation);
		$('#ephone').val(tempphone); 
	});
}



function editPharmacy(Key){
	firebase.database().ref('/Pharmacy/' + Key).once('value').then(function(snapshot) {
	 	   var tempBranch=snapshot.child("branch").val();
		   var tempCloseTime=snapshot.child("closeTime").val();
		   var tempContact=snapshot.child("contact").val();
		   var tempEmail=snapshot.child("email").val();
		   var tempLocation=snapshot.child("location").val();
		   var tempName=snapshot.child("name").val();
		   var tempOpenTime=snapshot.child("openTime").val();
		$('#eKey').val(Key);
		$('#ebranch').val(tempBranch);
		$('#eclosetime').val(tempCloseTime);
		$('#econtact').val(tempContact);
		$('#eemail').val(tempEmail);
		$('#elocation').val(tempLocation); 
		$('#ename').val(tempName); 
		$('#eopentime').val(tempOpenTime); 
			$('#efileToUpload').empty();
		$('#image').empty();
		$('#image').append("<img src=\""+tempImage+" \"width=50px >");
	});
}


function saveChangesPharmacyBranches(Key){
		var editLabKey=$('#ePharmacyKey').val();
		var editbranchKeyPharmacy=$('#ebranchKeyPharmacy').val();
		var editBranchId=$('#ebranchid').val();
		var editDescription=$('#edescription').val();
		var editLocation=$('#elocation').val();
		var editPhone=$('#ephone').val();
	    
	 
		//convert into json
		var editPharmacyBranchNode = {
		               'branchId': editBranchId,
		               'description': editDescription,
		               'location': editLocation,
		               'phone': editPhone,
		            
		               }; 
		firebase.database().ref('/BranchesOfPharmacy/'+editLabKey+'/'+editbranchKeyPharmacy).update(editPharmacyBranchNode);
	}


function deletePharmacyBranches(editKey, labKey){
	firebase.database().ref('/BranchesOfPharmacy/'+labKey+'/'+editKey).remove(); 
}









function saveChanges(downloadURL){

			if(downloadURL!="noURL"){
	var editKey=$('#eKey').val();
	var editBranch=$('#ebranch').val();
	var editClosetime=$('#eclosetime').val();
	var editContact=$('#econtact').val();
	var editEmail=$('#eemail').val();
	var editLocation=$('#elocation').val();
	var editName=$('#ename').val();
	var editOpentime=$('#eopentime').val();    
 

	//convert into json
	var editPharmacyNode = {
	               'branch': editBranch,
	               'closeTime': editClosetime,
	               'contact': editContact,
	               'email': editEmail,
	               'location': editLocation,
	               'name': editName,
	               'openTime': editOpentime,
	               'imageURL': downloadURL,


	               }; 
	firebase.database().ref('Pharmacy/'+editKey).update(editPharmacyNode);}
	else 
	{var editKey=$('#eKey').val();
	var editBranch=$('#ebranch').val();
	var editClosetime=$('#eclosetime').val();
	var editContact=$('#econtact').val();
	var editEmail=$('#eemail').val();
	var editLocation=$('#elocation').val();
	var editName=$('#ename').val();
	var editOpentime=$('#eopentime').val();    
 

	//convert into json
	var editPharmacyNode = {
	               'branch': editBranch,
	               'closeTime': editClosetime,
	               'contact': editContact,
	               'email': editEmail,
	               'location': editLocation,
	               'name': editName,
	               'openTime': editOpentime,
	         
	               }; 
	firebase.database().ref('Pharmacy/'+editKey).update(editPharmacyNode);}
}


function deletePharmacy(Key){
	
	firebase.database().ref('/Pharmacy/'+ Key).remove();
}
 


$(document).on('change', '#fileToUpload', function(event) {
  selectedFile = event.target.files[0];
});

var uploadImage_addPharmacy= function() {
	var filename = selectedFile.name;
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
	  alert(123);
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
	  	addPharmacy(downloadURL)
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

