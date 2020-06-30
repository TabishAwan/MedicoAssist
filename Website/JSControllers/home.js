$(document).ready(function(){
	
});

function populateLabs(){
var firebaseRef=firebase.database().ref().child('Laboratory')
  firebaseRef.orderByKey().limitToLast(4).on("value", snap => {
  $('#labDiv').empty();
  snap.forEach(function(snapshot) {

  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var email=snapshot.child("email").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#labDiv').append('<div class="department_icon_content"><a href="#"><img src=\''+image+' \'></a><a href="#"> <h2>'+name+'</h2></a> <p>'+email+'</p></div>');

  })
    });
}

function populateDoctors(){
var firebaseRef=firebase.database().ref().child('Doctor')
  firebaseRef.orderByKey().limitToLast(4).on("value", snap => {
  $('#doctorDiv').empty();
    snap.forEach(function(snapshot) {
 
  var key=snapshot.key;
  var name=snapshot.child("name").val();
  var specification=snapshot.child("specification").val();
  var bio=snapshot.child("bio").val();
  var image=snapshot.child("imageURL").val();
 
  //append data
  $('#doctorDiv').prepend('<div class="department_icon_content"><a href="#"><img src=\''+image+' \'></a><a href="#"> <h2>Dr. '+name+'</h2></a><p>Dr. '+name+' '+bio+'.</p></div>');
           
  })
    });
}
