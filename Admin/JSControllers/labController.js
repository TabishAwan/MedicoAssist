////
var selectedFile;
var editSelectedFile;

$(document).ready(function(){
	displayLabs();
	displayLabsBranches();
});

function addLabs(downloadURL)
{
	//Get values from input fields
	var name=$('#name').val();
	var email=$('#inputEmail').val();
	var contact=$('#inputContact').val();
	var opening=$('#opentimings').val();    
	var closing=$('#closetimings').val();
	
	//convert into json
	var labNode = {
	               'name': name,
	               'email': email,
	               'contact': contact,
	               'opentimings': opening,
	               'closetimings': closing,
	               'imageURL': downloadURL,
	               //useless branch 0 
	               //'branches': 0,
	               }; 

	var keyRef = firebase.database().ref('Laboratory').push().key;
	firebase.database().ref('Laboratory/'+keyRef).update(labNode);
}

function addBranch()
{
	//get data from input fields 
	var branchId = $('#branchId').val();
	var location =$('#location').val();
	var phone = $('#phone').val();
	var description = $('#description').val();
	var labKey = $('#branchKey').val();

	// convert into json 


	var labNode = {
		'branchId' : branchId,
		'location' : location,
		'phone' : phone,
		'description' : description,
					};

	var keyRef = firebase.database().ref('BranchesOfLabs').push().key;
	firebase.database().ref('BranchesOfLabs/'+labKey+'/'+keyRef).update(labNode);

}


/////////////////

// labs table function 
function displayLabs(){
	var firebaseRef=firebase.database().ref().child('Laboratory'); 
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
		   var contact=snapshot.child("contact").val();
		   var opentimings=snapshot.child("opentimings").val();
		   var closetimings=snapshot.child("closetimings").val();
		   var branches=snapshot.child("branches").val();
		   var image=snapshot.child("imageURL").val();
		   
		   //Action buttons
		   var deleteButton='<a title="Delete" onclick=deleteLabs(\'' + key + '\') class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		   var editButton='<a title="Edit" data-toggle="modal" data-target="#editModal" onclick="editLabs(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
		   var addbranchButton='<a title="Add Branch" data-toggle="modal" data-target="#addBranchModal" onclick="updateKey(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-plus" style="width: 20px; color:powderblue;" href="#"></a>';
		   
		   //append data into table
		   $('#labsTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+name+'</td>'+
		    '<td>'+email+'</td>'+
		    '<td>'+contact+'</td>'+
		    '<td>'+opentimings+'</td>'+
		    '<td>'+closetimings+'</td>'+
		    '<td>'+branches+'</td>'+
		     '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+editButton+'</td>'+
		    '<td>'+deleteButton+'</td>'+
		    '<td>'+addbranchButton+'</td>'+
		    '</tr>');
		   i++;

	  	})
	  	//convert table into datatable
	    $('#labsTable').DataTable();
    });
}

function updateKey(key){
	$('#branchKey').val(key);
}

// labs branches display table 
function displayLabsBranches(){
	var firebaseRef=firebase.database().ref().child('BranchesOfLabs'); 
 	firebaseRef.orderByKey().on("value", snap =>{
 		//Destory Existing table
		$('#branchesofLabsTable').DataTable().clear().destroy();
		//Counter
		var i=1;
 		snap.forEach(function(snapshot) {	    
		   var key=snapshot.key;
		   var branchesCount = 0;
		   
		   firebaseRef.child(key).on("value", snap1 => {			  	
			    //Get Fresh copy of blog data
			  	snap1.forEach(function(snapshot1) {
			    
				   var bkey=snapshot1.key;
				   var branchId=snapshot1.child("branchId").val();
				   var description=snapshot1.child("description").val();
				   var location=snapshot1.child("location").val();
				   var phone=snapshot1.child("phone").val();
				   branchesCount++;
				   setBranchesCount(branchesCount, key);

				   //Action buttons
				   var deleteButton='<a title="Delete" onclick=deleteLabsBranches(\'' + bkey + '\',\'' + key + '\'); class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
				   var editButton='<a title="Edit" data-toggle="modal" data-target="#editModalLabBranches" onclick=editLabsBranches(\'' + bkey + '\',\'' + key + '\'); class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
				   
				   //append data into table
				   $('#branchesoflabsbody').append('<tr>'+
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
			    $('#branchesofLabsTable').DataTable();
		    });
		});
	

	});
}

function setBranchesCount(branchesCount, key){
	var countNode = {
					'branches': branchesCount,
				}
	firebase.database().ref('Laboratory/'+key).update(countNode);
}

function editLabs(Key){
	firebase.database().ref('/Laboratory/' + Key).once('value').then(function(snapshot) {
 	    var tempName=snapshot.child("name").val();
	    var tempEmail=snapshot.child("email").val();
	    var tempContact=snapshot.child("contact").val();
	    var tempOpentimings=snapshot.child("opentimings").val();
	    var tempClosetimings=snapshot.child("closetimings").val();
	    var tempImage=snapshot.child("imageURL").val();
		$('#eKey').val(Key);
		$('#ename').val(tempName);
		$('#einputEmail').val(tempEmail);
		$('#einputContact').val(tempContact);
		$('#eopentimings').val(tempOpentimings);
		$('#eclosetimings').val(tempClosetimings); 
		$('#efileToUpload').empty();
		$('#image').empty();
		$('#image').append("<img src=\""+tempImage+" \"width=50px >");


	});
}

function editLabsBranches(editKey, labKey){
	var firebaseRef=firebase.database().ref().child('BranchesOfLabs'); 
 	firebaseRef.child(labKey+'/'+editKey).on("value", snap => {
 		var tempbranchid=snap.child("branchId").val();
	    var tempdescription=snap.child("description").val();
	    var templocation=snap.child("location").val();
	    var tempphone=snap.child("phone").val();
		
		$('#eLabKey').val(labKey);
		$('#eBranchKey').val(editKey);
		$('#ebranchid').val(tempbranchid);
		$('#edescription').val(tempdescription);
		$('#elocation').val(templocation);
		$('#ephone').val(tempphone); 
	});
}


function saveChangesLabBranches(Key){
		var editLabKey=$('#eLabKey').val();
		var editBranchKey=$('#eBranchKey').val();
		var editBranchId=$('#ebranchid').val();
		var editDescription=$('#edescription').val();
		var editLocation=$('#elocation').val();
		var editPhone=$('#ephone').val();
	    
	 
		//convert into json
		var editLabsBranchNode = {
		               'branchId': editBranchId,
		               'description': editDescription,
		               'location': editLocation,
		               'phone': editPhone,
		            
		               }; 
		firebase.database().ref('BranchesOfLabs/'+editLabKey+'/'+editBranchKey).update(editLabsBranchNode);
	}


function deleteLabsBranches(editKey, labKey){
	var firebaseRef=firebase.database().ref().child('BranchesOfLabs'); 
 	firebaseRef.orderByKey().on("value", snap =>{
 		var flag = false;
 		snap.forEach(function(snapshot) {
		   var branchesCount = 0;

		   firebaseRef.child(key).on("value", snap1 => {
			  	snap1.forEach(function(snapshot1) {
			  		flag = true;
				   	branchesCount++;
			  	})
		    });
		});
		if (flag == false) {
			setBranchesCount(0, labKey);
		}
	});
	firebase.database().ref('/BranchesOfLabs/'+labKey+'/'+editKey).remove();
}









function saveChanges(downloadURL){
	if(downloadURL!="noURL"){
		alert("1");
		var editKey=$('#eKey').val();
		var editName=$('#ename').val();
		var editInputemail=$('#einputEmail').val();
		var editContact=$('#einputContact').val();
		var editOpeningtimings=$('#eopentimings').val();
		var editClosetimings=$('#eclosetimings').val();    
	 
		//convert into json
		var editLabsNode = {
		               'name': editName,
		               'email': editInputemail,
		               'contact': editInputemail,
		               'opentimings': editOpeningtimings,
		               'closetimings': editClosetimings,
		               'imageURL': downloadURL,
		               }; 
		firebase.database().ref('Laboratory/'+editKey).update(editLabsNode);
	}
	else{alert("2s");
		var editKey=$('#eKey').val();
		var editName=$('#ename').val();
		var editInputemail=$('#einputEmail').val();
		var editContact=$('#einputContact').val();
		var editOpeningtimings=$('#eopentimings').val();
		var editClosetimings=$('#eclosetimings').val();    
	 
		//convert into json
		var editLabsNode = {
		               'name': editName,
		               'email': editInputemail,
		               'contact': editInputemail,
		               'opentimings': editOpeningtimings,
		               'closetimings': editClosetimings,

		               }; 
		firebase.database().ref('Laboratory/'+editKey).update(editLabsNode);
	}
	
}


function deleteLabs(Key){	
	firebase.database().ref('/Laboratory/'+ Key).remove();
	firebase.database().ref('/BranchesOfLabs/'+Key).remove();
}


$(document).on('change', '#fileToUpload', function(event) {
  selectedFile = event.target.files[0];
});

var uploadImage_addLab= function() {
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
	  	addLabs(downloadURL)
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
