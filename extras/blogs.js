$(document).ready(function(){
	updateBlogsTable();
})
 

function addblogs(downloadURL){
	//Get values from input fields
	var title=$('#Title').val();
	var tag=$('#Tag').val();
	var discrption=$('#Discrption').val();
	var status=$('#Status').val();    
 

	//convert into json
	var blogNode = {
	               'discription': discrption,
	               'title': title,
	               'tag': tag,
	               'status': status,
	               'blogImageUrl': downloadURL,

	               }; 
	var keyRef = firebase.database().ref('Blog').push().key;
	firebase.database().ref('Blog/'+keyRef).update(blogNode);
	var title=$('#Title').val('');
	var tag=$('#Tag').val('');
	var discrption=$('#Discrption').val(''); 
}

function updateBlogsTable()
{
	var firebaseRef=firebase.database().ref().child('Blog');
 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#blogsTable').DataTable().clear().destroy();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var tempTitle=snapshot.child("title").val();
		   var tempDis=snapshot.child("discription").val();
		   var tempTag=snapshot.child("tag").val();
		   var tempStatus=snapshot.child("status").val();
		   var image=snapshot.child("blogImageUrl").val();

		   //Action buttons
		   var deleteButton='<a title="Delete Blog" onclick="deleteBlog(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-trash" style="width: 20px; color:powderblue;" href="#"></a>';
		   var editButton='<a title="Edit Blog" data-toggle="modal" data-target="#EditBlogs" onclick="editBlog(\'' + key + '\');" class="m-datatable__toggle-subtable fa fa-edit" style="width: 20px; color:powderblue;" href="#"></a>';
		   
		   //append data into blog table
		   $('#blogsTableBody').append('<tr>'+
		    '<td>'+i+'</td>'+
		    '<td>'+tempTitle+'</td>'+
		    '<td>'+tempTag+'</td>'+
		    '<td>'+tempDis+'</td>'+
		    '<td>'+tempStatus+'</td>'+
	        '<td>'+"<img src=\""+image+" \"width=50px >"+'</td>'+
		    '<td>'+editButton+'</td>'+
		    '<td>'+deleteButton+'</td>'+
		    '</tr>');
		   i++;
	  	})
	  	//convert blog table into datatable
	    $('#blogsTable').DataTable();
    });
}

function editBlog(Key){
	firebase.database().ref('/Blog/' + Key).once('value').then(function(snapshot) {
	 	var tempTitle=snapshot.val().title;
	 	var tempDis=snapshot.val().discription;
		var tempTag=snapshot.val().tag;
		var tempStatus=snapshot.val().status;
		$('#Key').val(Key);
		$('#eTitle').val(tempTitle);
		$('#eTag').val(tempTag);
		$('#eDiscrption').val(tempDis);
		$('#eStatus').val(tempStatus); 
	});
}

function saveChanges(){
	var editKey=$('#Key').val();
	var editTitle=$('#eTitle').val();
	var editTag=$('#eTag').val();
	var editDiscrption=$('#eDiscrption').val();
	var editStatus=$('#eStatus').val();    
 

	//convert into json
	var editBlogNode = {
	               'discription': editDiscrption,
	               'title': editTitle,
	               'tag': editTag,
	               'status': editStatus,
	               }; 
	firebase.database().ref('Blog/'+editKey).update(editBlogNode);
}

function deleteBlog(Key){
	
	firebase.database().ref('/Blog/'+ Key).remove();
}


$(document).on('change', '#fileToUpload', function(event) {
  selectedFile = event.target.files[0];
});

var uploadImage_addBlog= function() {
	var filename=selectedFile.name;
	var storageRef = firebase.storage().ref();
	var uploadTask = storageRef.child('/BlogImages/'+filename).put(selectedFile);

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
	    addblogs(downloadURL)
	  });
	});
}