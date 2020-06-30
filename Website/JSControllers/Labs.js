
	
function populateLabs(){
var firebaseRef=firebase.database().ref().child('Laboratory')
  firebaseRef.orderByKey().on("value", snap => {
  $('#Labs').empty();
  snap.forEach(function(snapshot) {

  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var email=snapshot.child("email").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#Labs').append('<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><div class="department_gd_inner"><div class="image"><a href="single-labs.php?link='+key+'"><img src=\''+image+' \' class="img-fluid" alt="img" /></div><div class="dp_content"><h2><a href="#">'+name+'</a></h2><p>'+email+'</p><a href="#"  class="read_" >Read more</a></div></div></div>');
  })
    });
}


function updatekey(link){
firebase.database().ref('/Laboratory/' + link).once('value').then(function(snapshot) {
 	    var tempName=snapshot.child("name").val();
	    var tempEmail=snapshot.child("email").val();
	    var tempContact=snapshot.child("contact").val();
	    var tempOpentimings=snapshot.child("opentimings").val();
	    var tempClosetimings=snapshot.child("closetimings").val();
	    var tempImage=snapshot.child("imageURL").val();

$('#labQuickDetails').empty();
$('#labQuickDetails').append('<div class="quick_profile"><h2>Quick Profile</h2><ul ><li>Name.................'+tempName+'</li><li>Email..............'+tempEmail+'</li></ul><a href="#" class="theme-btn">View Timetable</a></div>');
$('#labName').empty();
$('#labName').append('<span>'+tempName+'</span><p>'+tempEmail+'</p>');
$('#labImage').empty();
$('#labImage').append("<img src=\""+tempImage+" \" class='img-fluid' alt='img' />");
$('#labDetails').empty();
$('#labDetails').append('<div class="content_one"><p>'+tempName+' '+tempContact+'.</p></div>');
});
}

