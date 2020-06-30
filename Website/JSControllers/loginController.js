
$(document).ready(function(){

});

function Login(email,password){

	
var email=jQuery('#loginEmail').val();
var password=jQuery('#loginPassword').val();


firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       //   Handle Errors here.


          var errorCode = error.code;
          var errorMessage = error.message;
         
          alert(errorMessage);
     

      }) 
 

firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
         	
                   window.location.replace("http://localhost/MedicoAssists/Website/Views/home.php"); 
                   alert("Login! Welcome"); 
         }
        });


}

function signUp(email,password){
 	
 	var name=jQuery('#registerName').val();
 	var gender=jQuery('#registerGender').val();
 	var bloodGroup=jQuery('#registerBloodGroup').val();
 	var detail=jQuery('#registerDetail').val();
 	var address=jQuery('#registerAddress').val();
 	var age=jQuery('#registerAge').val();
	var email=jQuery('#registerEmail').val(); 
	var phone=jQuery('#registerPhone').val(); 
 	var image=jQuery('#registerImage').val();
	var password=jQuery('#registerPassword').val(); 

	firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){ 
		console.log('uid',user);
		var userNode = { 
			'name': name,
			'gender': gender,
			'bloodGroup': bloodGroup,
			'detail': detail,
			'address': address,
			'age': age,
			'email': email, 
			'phone': phone, 
			'password': password, 
			'image': image, 
 
		} 

		firebase.database().ref('Patients/'+user.user.uid).set(userNode); 
	

	}).catch(function(error) { 
		// Handle Errors here. 
		var errorCode = error.code; 
		var errorMessage = error.message;
		alert("Error: "+ errorMessage); 
	})

			
}



function loginChecker(){

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  console.log(user.uid);                                                                      
  } 
  else 
  {
   window.location.replace("http://localhost/MedicoAssists/Website/Views/login.php");
   alert('You are not signed in. Sign In first');
  }
  });
}
	
function loginCheckerForBookNow(startTime, endTime, day, docKey){

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	bookAppointment(startTime, endTime, day, docKey);                                                                   
  } 
  else 
  {
   window.location.replace("http://localhost/MedicoAssists/Website/Views/login.php");
   alert('You are not signed in. Sign In first');
  }
  });
}



function loginCheckerForProfile(user)
{	
	 firebase.auth().onAuthStateChanged(function(user) {


  if (user) 
  {	
  	var currentuserid= user.uid;
  	populateMyProfile(currentuserid);

  } 
  else 
  {
   
   alert('ERR');
  }
  });

}




function signout(){
 firebase.auth().signOut();
   window.location.replace("http://localhost/MedicoAssists/Website/Views/login.php");
    alert('You are signed out.');
}

//function forgetPassword(){
//var verifyEmail=$('#forgotEmail').val();
//firebase.auth().sendPasswordResetEmail(verifyEmail);
//alert('Check Your Email for new password link.');
//}



	
function populateMyProfile(user){

var firebaseRef=firebase.database().ref().child('Patients');
$('#myprofileid').empty();
  firebase.database().ref('/Patients/' + user).once('value').then(function(snapshot){
  

  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var gender=snapshot.child("gender").val();
  var bloodGroup=snapshot.child("bloodGroup").val();
  var detail=snapshot.child("detail").val();
  var email=snapshot.child("email").val();
  var phone=snapshot.child("phone").val();
  var age = snapshot.child("age").val();
  var address=snapshot.child("address").val();
  var image=snapshot.child("image").val();
 $('#imageid').empty();
 $('#imageid').append('<img src=\"'+image+' \"width=40px >');

 $('#nameid').empty();
 $('#nameid').append(' <h5 style="font-size:18px; color:#3AAA64"><strong>Name: </strong>'+name+'</h5>');
 $('#phoneid').empty();
 $('#phoneid').append('<h5 class="number" style="font-size:18px; color:#3AAA64"><strong>Phone: </strong>'+phone+'</h5>');
 $('#ageid').empty();
 $('#ageid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Age: </strong>'+age+'</h5>');
$('#addressid').empty();
 $('#addressid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Address: </strong>'+address+'</h5>');
$('#bloodgroupid').empty();
 $('#bloodgroupid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>BloodGroup: </strong>'+bloodGroup+'</h5>');
 $('#genderid').empty();
 $('#genderid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Gender: </strong>'+gender+'</h5>');
  $('#detailid').empty();
 $('#detailid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Details: </strong>'+detail+'</h5>');
		  		  
  //append data
//  $('#myprofileid').append('<div class="col-md-3"> <a href="myprofile.php?link='+key+'"></div><div class="col-md-6"> <h5 style="color:#3AAA64">'+name+' </h5> <p>'+email+'</p>  </div>');
  ////	<div class="department_gd_inner"><div class="image"><a href="single-labs.php?link='+key+'"><img src=\''+image+' \' class="img-fluid" alt="img" /></div><div class="dp_content"><h2><a href="#">'+name+'</a></h2><p>'+email+'</p><a href="#"  class="read_" >Read more</a></div></div></div>');
  })

}


//function logincheckerformyprofile(user)
//{
 // alert("enntered function");
  //firebase.auth().onAuthStateChanged(function(user) {
  //if (user) {
  	//	firebase.database().ref('/Patients/' + user).once('value').then(function(snapshot) {
  	//		var tempName=snapshot.child("name").val();
//})
  //			alert(tempName);
  	//		};                                                   
 // else 
  //{
  //	alert('error');

	//}		
//}}

function updatekey(userid){
	firebase.database().ref('/Patients/' + userid).once('value').then(function(snapshot) {
 	    var tempName=snapshot.child("name").val();
	    var tempAddress=snapshot.child("address").val();
	    var tempAge=snapshot.child("age").val();
	 
	 alert(tempName);
	 alert(tempAge);
	 alert(address);
	}
)}
/*
//$('#labQuickDetails').empty();
$('#').append('<div class="quick_profile"><h2>Quick Profile</h2><ul ><li>Name.................'+tempName+'</li><li>Email..............'+tempEmail+'</li></ul><a href="#" class="theme-btn">View Timetable</a></div>');
//$('#labName').empty();
$('#').append('<span>'+tempName+'</span><p>'+tempEmail+'</p>');
//$('#labImage').empty();
$('#').append("<img src=\""+tempImage+" \" class='img-fluid' alt='img' />");
//$('#labDetails').empty();
$('#').append('<div class="content_one"><p>'+tempName+' '+tempphone+'.</p></div>');
});
} 
*/

function editProfile(){
	firebase.auth().onAuthStateChanged(function(user) {


  if (user) 
  {	
  	var currentuserid= user.uid;
  	firebase.database().ref('/Patients/' + currentuserid).once('value').then(function(snapshot) {
 	    var tempName=snapshot.child("name").val();
 	    var tempGender=snapshot.child("gender").val();
 	    var tempBloodGroup=snapshot.child("bloodGroup").val();
 	    var tempDetail=snapshot.child("detail").val();
	    var tempAddress=snapshot.child("address").val();
	    var tempAge=snapshot.child("age").val();
 	    var tempImage=snapshot.child("image").val();
	    var tempPhone=snapshot.child("phone").val();


		$('#eKey').val(currentuserid);
		$('#ename').val(tempName);
		$('#egender').val(tempGender);
		$('#ebloodgroup').val(tempBloodGroup);
		$('#edetail').val(tempDetail);
		$('#eaddress').val(tempAddress);
		$('#eage').val(tempAge);
	//	$('#eimage').val(tempImage);
		$('#ephone').val(tempPhone);

		$('#eimage').append("<img src=\""+tempImage+" \"width=50px >")

	});

  }
});
	
}

function saveChanges(image){

	var editKey=$('#eKey').val();
	var editName=$('#ename').val();
	var editGender=$('#egender').val();
	var editBloodGroup=$('#ebloodgroup').val();
	var editDetail=$('#edetail').val();
	var editAddress=$('#eaddress').val();
	var editAge=$('#eage').val();
	var editPhone=$('#ephone').val();
 
	//convert into json
	var editPatientNode = {
	               'address': editAddress,
	               'gender': editGender,
	               'bloodGroup': editBloodGroup,
	               'detail': editDetail,
	               'age': editAge,
	               'name': editName,
					'phone': editPhone,
					'image': image,
				}
				
	firebase.database().ref('Patients/'+editKey).update(editPatientNode);

	         }



function displayAppointments(){
	firebase.auth().onAuthStateChanged(function(user) {


  if (user) 
  {	
  	var currentuserid= user.uid;
	var firebaseRef=firebase.database().ref().child('Appointments/'+currentuserid); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    //$('#myprofiletableid').DataTable().clear().destroy();
	    $('#myprofiletablebody').empty();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var startTime=snapshot.child("startTime").val();
		   var endTime=snapshot.child("endTime").val();
		   var day=snapshot.child("day").val();
		   var docID=snapshot.child("docID").val();
		    var timeStamp=snapshot.child("timeStamp").val();



		   $('#myprofiletablebody').append('<tr>'+
		    '<td>'+i+'</td>'+
		     '<td>'+startTime+'</td>'+
		    '<td>'+endTime+'</td>'+
		    '<td>'+day+'</td>'+
		    '<td>'+docID+'</td>'+
		    '<td>'+timeStamp+'</td>'+
	
		    '</tr>');
		   i++;
	  	})
 //*****=/]'/77ttfftgvjggjknh ,nn  m;,ol,,ki9iuu877uuuh9i9bbhbuhbgojkgkjbbcmvv eyue7	``vccxvcx ,nba``++++++++++++*/
	    //$('#myprofiletableid').DataTable();
    });

  }
});
	
}



