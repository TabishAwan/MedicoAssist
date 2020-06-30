$(document).ready(function(){
});
	
function populatePharmacy(){
var firebaseRef=firebase.database().ref().child('Pharmacy')
  firebaseRef.orderByKey().on("value", snap => {
  $('#Pharmacy').empty();
  snap.forEach(function(snapshot) {

  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var contact=snapshot.child("contact").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#Pharmacy').append('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="department_gd_inner"><div class="image"><a href="single-pharmacy.php?link='+key+'"><img src=\''+image+' \' class="img-fluid" alt="img" /></div><div class="dp_content"><h2><a href="#">'+name+'</a></h2><p>'+contact+'</p><a href="#"  class="read_" >Read more</a></div></div></div>');
  })
    });
}


function updatekey(link){
firebase.database().ref('/Pharmacy/' + link).once('value').then(function(snapshot) {
 		var tempBranch=snapshot.child("branch").val();
	   var tempCloseTime=snapshot.child("closeTime").val();
	   var tempContact=snapshot.child("contact").val();
	   var tempEmail=snapshot.child("email").val();
	   var tempLocation=snapshot.child("location").val();
	   var tempName=snapshot.child("name").val();
	   var tempOpenTime=snapshot.child("openTime").val();
  var tempImage=snapshot.child("imageURL").val();

$('#pharmacyQuickDetails').empty();
$('#pharmacyQuickDetails').append('<div class="quick_profile"><h2>Quick Profile</h2><ul ><li>Name.................'+tempName+'</li><li>Phone.....................'+tempContact+'</li><li>Email..............'+tempEmail+'</li><li>Address...............'+tempLocation+'</li></ul><a href="#" class="theme-btn">View Timetable</a></div>');
$('#pharmacyName').empty();
$('#pharmacyName').append('<h1> <span>'+tempName+'</span></h1><p>'+tempContact+'</p>');
$('#pharmacyImage').empty();
$('#pharmacyImage').append("<img src=\""+tempImage+" \" class='img-fluid' alt='img' />");
$('#pharmacyDetails').empty();
$('#pharmacyDetails').append('<div class="content_one"><p>Dr. '+tempName+' '+tempEmail+'.</p></div>');
});
}

