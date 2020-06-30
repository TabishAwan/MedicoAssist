$(document).ready(function(){
});

function populateDoctors(){
var firebaseRef=firebase.database().ref().child('Doctor')
  firebaseRef.orderByKey().on("value", snap => {
  $('#our-doctors').empty();
    snap.forEach(function(snapshot) {
 	//alert(3);
  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var specification=snapshot.child("specification").val();
  var bio=snapshot.child("bio").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#our-doctors').prepend('<div class="col-lg-4" ><div class="best-doctor-outer"><a href="single-doctors.php?link='+key+'"><img src=\''+image+' \'></a><a href="#"> <h2>Dr. '+name+'</h2></a><p>Dr. '+name+' '+bio+'.</p></div></div>');
           
  })
    });
}

function loginForDoctor(user){
	
	var loginEmail = document.getElementById('loginEmail').value;
	var loginPassword = document.getElementById('loginPassword').value;
	var firebaseRef=firebase.database().ref().child('Doctor'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		var flag = false;
 		var docID;
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var email=snapshot.child("email").val();
		   var password=snapshot.child("password").val();


		   if(loginEmail==email && loginPassword==password)
		   {
		   	flag = true;
		   	docID = key;
		   }
	  	})
	  	if (flag) {
	  		window.location.replace('profileDoctor.php?did='+docID);
	  	}
	  	else{
	  		alert("Wrong Email & password!");
	  	}
    });
}

function displayDoctorAppointments(docID){

	var firebaseRef=firebase.database().ref().child('Appointments/'+docID); 
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
		   var pid=snapshot.child("patientID").val();
		    var timeStamp=snapshot.child("timeStamp").val();

			var Checkbox ='<a title="Checkbox" onclick=getPrescriptionData(\'' + docID + '\',\'' + pid + '\',\'' + key + '\') class="m-datatable__toggle-subtable fa fa-check-square-o" data-toggle="modal" data-target="#prescriptionModal" style="width: 20px; color:green;" href="#"></a>';
		   $('#myprofiletablebody').append('<tr>'+
		    '<td>'+i+'</td>'+
		     '<td>'+startTime+'</td>'+
		
		    '<td>'+endTime+'</td>'+
		 
		
		    '<td>'+day+'</td>'+
		    '<td>'+pid+'</td>'+
		    '<td>'+timeStamp+'</td>'+
		    '<td>'+Checkbox+'</td>'+

	

		
		    '</tr>');
		   i++;
	  	})
    });

  }

  function getPrescriptionData(docID, patientID, appointmentID)
  {
  	$('#patientIDPrec').val(patientID);
  	$('#modalButtons').empty();
  	$('#modalButtons').append('<button onclick="savePrescription(\'' + docID + '\',\'' + patientID + '\',\'' + appointmentID + '\');" class="btn btn-primary" data-dismiss="modal">Save</button><button type="button" class="btn btn-success" data-dismiss="modal">Discard</button>');
  }

  function savePrescription(docID, patientID, appointmentID){
  	var prescription = $('#prescriptionDetails').val();
  	var prescriptionNode ={
  					'docID' : docID,
					'patientID' : patientID,
					'appointmentID' : appointmentID,
					'prescription' : prescription,
  			}

	var keyRef = firebase.database().ref('Prescription').push().key;
	firebase.database().ref('Prescription/'+keyRef).update(prescriptionNode);
	$('#prescriptionDetails').val('');
  }
	


function displayDoctor(did){
//$('#myprofileid').empty();
  firebase.database().ref('Doctor/' + did).once('value').then(function(snapshot){
  

  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var email=snapshot.child("email").val();
  var phone=snapshot.child("phone").val();
  var specification = snapshot.child("specification").val();
  var address=snapshot.child("address").val();

 $('#nameid').empty();
 $('#nameid').append(' <h5 style="font-size:18px; color:#3AAA64"><strong>Name: </strong>'+name+'</h5>');
 $('#phoneid').empty();
 $('#phoneid').append('<h5 class="number" style="font-size:18px; color:#3AAA64"><strong>Phone: </strong>'+phone+'</h5>');
 $('#specificationid').empty();
 $('#specificationid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Experties: </strong>'+specification+'</h5>');
 $('#addressid').empty();
 $('#addressid').append('<h5 style="font-size:18px; color:#3AAA64"><strong>Address: </strong>'+address+'</h5>');
 $('#editButton').empty();
 $('#editButton').append('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" onclick="editDoctor(\'' + key + '\');" style="float: right;">Edit  Profile</button>');	  
  //append data
//  $('#myprofileid').append('<div class="col-md-3"> <a href="myprofile.php?link='+key+'"></div><div class="col-md-6"> <h5 style="color:#3AAA64">'+name+' </h5> <p>'+email+'</p>  </div>');
  ////	<div class="department_gd_inner"><div class="image"><a href="single-labs.php?link='+key+'"><img src=\''+image+' \' class="img-fluid" alt="img" /></div><div class="dp_content"><h2><a href="#">'+name+'</a></h2><p>'+email+'</p><a href="#"  class="read_" >Read more</a></div></div></div>');
  })

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
	});
}

function saveChanges(){
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
	firebase.database().ref('Doctor/'+editKey).update(editDoctorNode);
	displayDoctor(editKey)
}


$(document).ready(function(){
});

function populateSingleDoctors(){
var firebaseRef=firebase.database().ref().child('Doctor')
  firebaseRef.orderByKey().on("value", snap => {
  $('#our-singledoctors').empty();
    snap.forEach(function(snapshot) {
 	//alert(3);
  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var specification=snapshot.child("specification").val();
    var image=snapshot.child("imageURL").val();
  var bio=snapshot.child("bio").val();

 
  //append data
  $('#our-singledoctors').append('<div class="col-lg-6"><div class="heading mg_btm"><a href="single-doctors.php?link='+key+'"><img src=\''+image+' \'></a><a href="#"> <h2>Dr. '+name+'</h2></a><p>Dr. '+name+' '+bio+'.</p></div></div>');
           
  })
    });
}


function updatekey(link){
firebase.database().ref('/Doctor/' + link).once('value').then(function(snapshot) {
  var tempAddress=snapshot.child("address").val();
  var tempBio=snapshot.child("bio").val();
  var tempClinic=snapshot.child("clinic").val();
  var tempEmail=snapshot.child("email").val();
  var tempExperience=snapshot.child("experience").val();
  var tempFee=snapshot.child("fee").val();
  var tempGender=snapshot.child("gender").val();
  var tempName=snapshot.child("name").val();
  var tempPhone=snapshot.child("phone").val();
  var tempSpecifications=snapshot.child("specifications").val();
  var tempTimeapp=snapshot.child("timeapp").val();
  var tempTimespan=snapshot.child("timespan").val();
  var tempImage=snapshot.child("imageURL").val();

$('#docQuickDetails').empty();
$('#docQuickDetails').append('<div class="quick_profile"><h2>Quick Profile</h2><ul ><li>Name.................'+tempName+'</li><li>Phone.....................'+tempPhone+'</li><li>Email..............'+tempEmail+'</li><li>Address...............'+tempAddress+'</li><li>Speciality................'+tempSpecifications+'</li><li>Degree...................M.D. of Medicine</li><li>Experience...................'+tempExperience+'</li></ul><a href="#" class="theme-btn">View Timetable</a></div>');
$('#docName').empty();
$('#docName').append('<h1>Dr <span>'+tempName+'</span></h1><p>'+tempSpecifications+'</p>');
$('#docImage').empty();
$('#docImage').append("<img src=\""+tempImage+" \" class='img-fluid' alt='img' />");
$('#docDetails').empty();
$('#docDetails').append('<div class="content_one"><p>Dr. '+tempName+' '+tempBio+'.</p></div>');
});
}


function displayDoctorDropdown()
{
	var firebaseRef=firebase.database().ref().child('Doctor'); 
 	firebaseRef.orderByKey().on("value", snap => {
 		//Counter
	  	var i=1;
	  	//Destory Existing table
	    $('#doctordropdown').empty();
	    //Get Fresh copy of blog data
	  	snap.forEach(function(snapshot) {
	   
		   var key=snapshot.key;
		   var name=snapshot.child("name").val();
		   var specifications=snapshot.child("specifications").val();




		   //Action buttons
	$('#doctordropdown').append('<a href="#" class="dropdown-item" onclick="getDocTimetable(\''+key+'\')  ; " >'+name+'.........'+specifications+'</a>');

		   i++;
	  	})

    });
}


function getDocTimetable(key)
{
 			firebase.database().ref('/Doctor/' + key).once('value').then(function(snapshot) {
 				$('#doctordropdown2').empty();

				 			
	  		var appstarttime=snapshot.child("appstarttime").val();
			var appendtime=snapshot.child("appendtime").val();
	  		var timespan=snapshot.child("timespan").val();
	  		var timeapp=snapshot.child("timeapp").val();
		     

			var arrayEndTime=[];
			var arrayStartTime=[];
			var loopLimit = (timespan * 60)/timeapp;

			var minutes=0;
			var hours = appstarttime;
			var t = appstarttime + ': 00';
			arrayStartTime.push(t);


			
  
		    for(i=0;i<loopLimit;i++)
		    {
		    	minutes = parseInt(minutes) + parseInt(timeapp);
		    	var s =  parseInt(minutes) + parseInt(1);
				if(minutes >= 60){
					minutes="00";
					s="01";
					hours++;
				}
		      	var y = hours+' : '+minutes;
		      	var t = hours+' : '+s;
				arrayEndTime.push(y);
				arrayStartTime.push(t);

			}


			$('#doctordropdown2').append('<th scope="col"></th>')
	
			$('#id1').empty();
			$('#id2').empty();
			$('#id3').empty();
			$('#id4').empty();
			$('#id5').empty();
			$('#id6').empty();
			$('#id7').empty();

		 	$('#id1').append('<th class="side_time">Monday</th>');
		 	$('#id2').append('<th class="side_time">Tuesday</th>');
		 	$('#id3').append('<th class="side_time">Wed</th>');
		 	$('#id4').append('<th class="side_time">thurs</th>');
		 	$('#id5').append('<th class="side_time">frid</th>');
		 	$('#id6').append('<th class="side_time">sature</th>');
		 	$('#id7').append('<th class="side_time">sunday</th>');
   			 for(x=0;x<arrayEndTime.length;x++)
		     {	

 				$('#doctordropdown2').append('<th scope="col">'+arrayStartTime[x]+'pm - '+arrayEndTime[x]+'pm</th>');
 					$('#id1').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Monday" + '\',\'' + key + '\');">BookNow</button></th>');
				

					$('#id2').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Tuesday" + '\',\'' + key + '\');">BookNow</button></th>');
	
					$('#id3').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Wednesday" + '\',\'' + key + '\');">BookNow</button></th>');


							$('#id4').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Thursday" + '\',\'' + key + '\');">BookNow</button></th>');

								$('#id5').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Friday" + '\',\'' + key + '\');">BookNow</button></th>');


									$('#id6').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Saturday" + '\',\'' + key + '\');">BookNow</button></th>');
								
									$('#id7').append(' <th class="side_time"><button class="button" onclick="loginCheckerForBookNow(\'' + arrayStartTime[x] + '\',\'' + arrayEndTime[x] + '\',\'' + "Sunday" + '\',\'' + key + '\');">BookNow</button></th>');
			

		      }	
		  
	  		});


}

function bookAppointment(startTime, endTime, day, docKey){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	var currentUserID = user.uid;

	  	var appointmentNode = {
	  				'startTime': startTime,
	  				'endTime': endTime,
	  				'day': day,
	  				'docID': docKey,
	  				'timeStamp': firebase.database.ServerValue.TIMESTAMP,
	  	}
	  	var appointmentNodePatient = {
	  				'startTime': startTime,
	  				'endTime': endTime,
	  				'day': day,
	  				'patientID': currentUserID,
	  				'timeStamp': firebase.database.ServerValue.TIMESTAMP,
	  	}
	  	var keyRef = firebase.database().ref('Appointments').push().key;
		firebase.database().ref('Appointments/'+ currentUserID +'/'+keyRef).update(appointmentNode);
		firebase.database().ref('Appointments/'+ docKey +'/'+keyRef).update(appointmentNodePatient);
		window.location.replace('http://localhost/MedicoAssists/Website/Views/myprofile.php');                                                                      
	  } 
	 });
}


