////
var selectedFile;
var editSelectedFile;

$(document).ready(function(){
	displayMenu();
});

function addMenu(downloadURL)
{
	//Get values from input fields
	var name=$('#name').val();
	var itemtype=$('#itemtype').val();
	var itemcode=$('#itemcode').val();

	
	//convert into json
	var labNode = {
	               'name': name,
	               'itemtype': itemtype,
	               'itemcode': itemcode,

	               'imageURL': downloadURL,
	     
	               }; 

	var keyRef = firebase.database().ref('Menu').push().key;
	firebase.database().ref('Menu/'+keyRef).update(labNode);
}



/////////////////

// labs table function 
function displayMenu(){
	var firebaseRef=firebase.database().ref().child('Menu'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#labsTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var name=snapshot.child("name").val();
		   var itemcode=snapshot.child("itemcode").val();
		   var itemtype=snapshot.child("itemtype").val();

		   var image=snapshot.child("imageURL").val();
	
		   
		   //Action buttons
		   var deleteButton='<a title="Delete" onclick=deleteMenu(\'' + key + '\') class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		   var editButton='<a title="Edit" data-toggle="modal" data-target="#editModal" onclick="editMenu(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
	   
		   //append data into table
		   $('#labsTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+name+'</td>'+
		    '<td>'+itemcode+'</td>'+
		    '<td>'+itemtype+'</td>'+
		
		     '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+editButton+'</td>'+
		    '<td>'+deleteButton+'</td>'+
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




function editMenu(Key){
	firebase.database().ref('/Menu/' + Key).once('value').then(function(snapshot) {
 	    var tempName=snapshot.child("name").val();
	    var tempItemcode=snapshot.child("itemcode").val();
	    var tempItemtype=snapshot.child("itemtype").val();

	    var tempImage=snapshot.child("imageURL").val();
		$('#eKey').val(Key);
		$('#ename').val(tempName);
		$('#eitemcode').val(tempItemcode);
		$('#eitemtype').val(tempItemtype);
			$('#efileToUpload').empty();
		$('#image').empty();
		$('#image').append("<img src=\""+tempImage+" \"width=50px >");

	});
}



function saveChanges(downloadURL){
	if(downloadURL!="noURL"){

		var editKey=$('#eKey').val();
		var editName=$('#ename').val();
		var editItemtype=$('#eitemtype').val();
		var editItemCode=$('#eitemcode').val();
 
	 
		//convert into json
		var editLabsNode = {
		               'name': editName,
		               'itemtype': editItemtype,
		               'itemcode': editItemCode,
		               'imageURL': downloadURL,
		               }; 
		firebase.database().ref('Menu/'+editKey).update(editLabsNode);
	}
	else{
		var editKey=$('#eKey').val();
		var editName=$('#ename').val();
		var editItemtype=$('#eitemtype').val();
		var editItemCode=$('#eitemcode').val();
   
	 
		//convert into json
		var editLabsNode = {
		               'name': editName,
		               'itemtype': editItemtype,
		               'itemcode': editItemCode,


		               }; 
		firebase.database().ref('Menu/'+editKey).update(editLabsNode);
	}
	
}


function deleteMenu(Key){	
	firebase.database().ref('/Menu/'+ Key).remove();
}


$(document).on('change', '#fileToUpload', function(event) {
  selectedFile = event.target.files[0];
});

var uploadImage_addLab= function() {
	var filename=selectedFile.name;
	var storageRef = firebase.storage().ref();
	var uploadTask = storageRef.child('/FoodfunImages/'+filename).put(selectedFile);

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
	  	addMenu(downloadURL)
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

	var uploadTask = storageRef.child('/FoodfunImages/'+filename).put(editSelectedFile);

	

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
